# Hello!

[![GH Pages](https://img.shields.io/github/actions/workflow/status/zbhavyai/zbhavyai.github.io/main.yml?label=GH%20Pages)](https://github.com/zbhavyai/zbhavyai.github.io/actions/workflows/main.yml)
[![License](https://img.shields.io/github/license/zbhavyai/zbhavyai.github.io?label=License)](https://github.com/zbhavyai/zbhavyai.github.io/blob/main/LICENSE)

This is my personal website and portfolio built with **Vite**, **ReactJS**, and **LaTeX**.

Live at [https://zbhavyai.github.io](https://zbhavyai.github.io).

## Scaffolding

The project was bootstrapped with the command:

```shell
pnpm create vite --template react-swc --no-rolldown --immediate zbhavyai.github.io
```

## Local build and run

Build and run in a container, then access it at [http://127.0.0.1:8080](http://127.0.0.1:8080/):

```shell
make container-build && make container-run
```

## Resume PDF generation

Resume is built with XeLaTeX in a container. See [texlive guide](https://github.com/zbhavyai/containers/tree/main/texlive) for setup.

```shell
make resume
```
