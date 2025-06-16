IMAGE_APP := localhost/zbhavyai
IMAGE_LATEX := localhost/latex
RESUME_DIR := ./public/assets/resume
RESUME_TEX := resume.tex
RESUME_PDF := resume.pdf

.PHONY: resume container-build container-run help

.check-latex:
	@if ! podman image exists $(IMAGE_LATEX); then \
		echo "'$(IMAGE_LATEX)' is not present in podman."; \
		echo "Refer to https://github.com/zbhavyai/containers/tree/main/texlive for setup."; \
		exit 1; \
	fi

resume: .check-latex
	@echo "Building resume PDF."
	@podman container run --privileged --rm --volume "$(shell pwd):/data" -w /data/$(RESUME_DIR) --name latex $(IMAGE_LATEX) latex $(RESUME_TEX) 1>/dev/null
	@echo "Resume generated at '$(RESUME_DIR)/$(RESUME_PDF)'."

container-build:
	@echo "Building the project in container."
	@podman build --tag $(IMAGE_APP):1.0.0 .

container-run:
	@echo "Running the project container."
	@podman container run --rm --name zbhavyai --detach --publish 8080:80 $(IMAGE_APP):1.0.0

help:
	@echo "Available targets:"
	@echo "  resume          - Build the resume PDF using latex (requires podman image)"
	@echo "  container-build - Build the container"
	@echo "  container-run   - Run the container"
	@echo "  help            - Show this help message"
