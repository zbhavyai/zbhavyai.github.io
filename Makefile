IMAGE_NAME := localhost/latex
RESUME_DIR := ./src/assets/resume
RESUME_TEX := resume.tex
RESUME_PDF := resume.pdf

.PHONY: check-image resume help

check-image:
	@if ! podman image exists $(IMAGE_NAME); then \
		echo "'$(IMAGE_NAME)' is not present in podman."; \
		echo "Refer to https://github.com/zbhavyai/containers/tree/main/texlive for setup."; \
		exit 1; \
	else \
		echo "All dependencies seems good."; \
	fi

resume: check-image
	@echo "Building resume PDF..."
	podman container run --privileged --rm --volume "$(shell pwd):/data" -w /data/$(RESUME_DIR) --name latex $(IMAGE_NAME) latex $(RESUME_TEX) 1>/dev/null
	@echo "Resume PDF generated at $(RESUME_DIR)/$(RESUME_PDF)"

help:
	@echo "Available targets:"
	@echo "  check-image    - Check if the podman image '$(IMAGE_NAME)' exists"
	@echo "  resume         - Build the resume PDF using latex (requires podman image)"
	@echo "  help           - Show this help message"
