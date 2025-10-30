IMAGE_APP := localhost/zbhavyai
IMAGE_LATEX := localhost/latex
RESUME_DIR := ./resume
RESUME_TEX := resume.tex
RESUME_PDF := resume.pdf
CV_TEX := cover_letter.tex
CV_PDF := cover_letter.pdf

.PHONY: check resume cv container-build container-run help

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

check: .latex .fonts
	@echo "Checks done."

resume: .latex .fonts
	@echo "Building your resume."
	@podman container run --privileged --rm --volume "$(shell pwd):/data" -w /data/$(RESUME_DIR) --name latex $(IMAGE_LATEX) latex $(RESUME_TEX) 1>/dev/null
	@echo "Resume generated at '$(RESUME_DIR)/$(RESUME_PDF)'."

cv: .latex .fonts
	@echo "Building your CV."
	@podman container run --privileged --rm --volume "$(shell pwd):/data" -w /data/$(RESUME_DIR) --name latex $(IMAGE_LATEX) latex $(CV_TEX) 1>/dev/null
	@echo "CV generated at '$(RESUME_DIR)/$(CV_PDF)'."

container-build:
	@echo "Building the project in container."
	@podman build --tag $(IMAGE_APP):1.0.0 .

container-run:
	@echo "Running the project in container."
	@podman container run --rm --name zbhavyai --detach --publish 8080:80 $(IMAGE_APP):1.0.0

container-destroy:
	@echo "Stopping the project container."
	@podman container stop zbhavyai

help:
	@echo "Available targets:"
	@echo "  check           - Run checks for latex image and fonts"
	@echo "  resume          - Build the resume PDF using latex (requires podman image)"
	@echo "  cv              - Build the cover letter PDF using latex (requires podman image)"
	@echo "  container-build - Build the container"
	@echo "  container-run   - Run the container"
	@echo "  help            - Show this help message"
