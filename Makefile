COMMIT_SHA := $(shell git rev-parse --short HEAD)

RESUME_DIR := ./resume
RESUME_TEX := resume.tex
RESUME_PDF := resume.pdf
COVER_LETTER_TEX := cover_letter.tex
COVER_LETTER_PDF := cover_letter.pdf

DEPLOY_SITE := zbhavyai

IMAGE_APP := localhost/zbhavyai
IMAGE_LATEX := localhost/latex
CONTAINER_APP := zbhavyai

.PHONY: init clean distclean format lint dev build update deploy resume cl container-build container-run container-destroy help

init: ## install hook and dependencies
	@ln -sf $(CURDIR)/.hooks/pre-commit.sh .git/hooks/pre-commit
	@pnpm install --frozen-lockfile

clean: ## clean the build artifacts
	@rm -rf dist/

distclean: clean ## clean all generated files
	@rm -rf node_modules/
	@rm -f $(RESUME_DIR)/fonts/
	@rm -f $(RESUME_DIR)/$(RESUME_PDF)
	@rm -f $(RESUME_DIR)/$(COVER_LETTER_PDF)

format: ## format the codebase
	@pnpm run format

lint: ## lint the codebase
	@pnpm run lint

dev: ## start the development server
	@pnpm run dev

build: clean ## build the project
	@pnpm run build

update: ## update dependencies in interactive mode
	@pnpm update --interactive --latest
	@pnpm self-update

deploy: build ## deploy to netlify
	@echo "Ensuring site $(DEPLOY_SITE) exists"
	@pnpm exec netlify sites:list --json | grep -q '"name": "$(DEPLOY_SITE)"' || \
		(pnpm exec netlify sites:create --name $(DEPLOY_SITE) --account-slug zbhavyai)
	@pnpm exec netlify deploy \
		--site $(DEPLOY_SITE) \
		--auth ${NETLIFY_AUTH_TOKEN} \
		--dir dist \
		--prod \
		--no-build \
		--message "deploy by makefile at commit: $(COMMIT_SHA)"

.latex:
	@if ! podman image exists $(IMAGE_LATEX); then \
		echo "'$(IMAGE_LATEX)' is not present in podman."; \
		echo "Refer to https://github.com/zbhavyai/containers/tree/main/texlive for setup."; \
		exit 1; \
	fi

.fonts:
	@if [ ! -d "$(RESUME_DIR)/fonts" ]; then \
		if ! command -v fonttools >/dev/null 2>&1; then \
			echo "'fonttools' is not installed. Please run:"; \
			echo "  pip install fonttools"; \
			exit 1; \
		fi; \
		mkdir -p $(RESUME_DIR)/fonts; \
		cp /usr/share/fonts/adwaita-sans-fonts/*ttf $(RESUME_DIR)/fonts/; \
		fonttools varLib.mutator -o $(RESUME_DIR)/fonts/AdwaitaSans-Light.ttf $(RESUME_DIR)/fonts/AdwaitaSans-Regular.ttf wght=350; \
		fonttools varLib.mutator -o $(RESUME_DIR)/fonts/AdwaitaSans-Bold.ttf $(RESUME_DIR)/fonts/AdwaitaSans-Regular.ttf wght=600; \
		fonttools varLib.mutator -o $(RESUME_DIR)/fonts/AdwaitaSans-BoldItalic.ttf $(RESUME_DIR)/fonts/AdwaitaSans-Italic.ttf wght=600; \
	fi

resume: .latex .fonts ## build the resume PDF using latex (requires podman image)
	@echo "Building resume..."
	@podman container run \
		--rm \
		--volume /etc/localtime:/etc/localtime:ro \
		--volume "$(shell pwd):/data:Z" \
		--workdir /data/$(RESUME_DIR) \
		--name latex \
		$(IMAGE_LATEX) \
		latex $(RESUME_TEX) \
		>/dev/null
	@echo "Resume generated at '$(RESUME_DIR)/$(RESUME_PDF)'."

cl: .latex .fonts ## build the cover letter PDF using latex (requires podman image)
	@echo "Building Cover Letter..."
	@podman container run \
		--rm \
		--volume /etc/localtime:/etc/localtime:ro \
		--volume "$(shell pwd):/data:Z" \
		--workdir /data/$(RESUME_DIR) \
		--name latex \
		$(IMAGE_LATEX) \
		latex $(COVER_LETTER_TEX) \
		>/dev/null
	@echo "Cover Letter generated at '$(RESUME_DIR)/$(COVER_LETTER_PDF)'."

container-build: ## build the container
	@podman image build --tag $(IMAGE_APP):$(COMMIT_SHA) --build-arg COMMIT_SHA=$(COMMIT_SHA) --file Dockerfile .

container-run: ## run the container
	@podman container run --rm --name $(CONTAINER_APP) --detach --publish 8080:80 $(IMAGE_APP):$(COMMIT_SHA)

container-destroy: ## stop the running container
	@podman container stop $(CONTAINER_APP)

help: ## show this help message
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s - %s\n", $$1, $$2}'
