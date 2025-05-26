# Hello!

Visit my portfolio at [zbhavyai.github.io](https://zbhavyai.github.io).

## Get web app running

and seeing it on [127.0.0.1:8080](http://127.0.0.1:8080/).

```shell
make container-build
make container-run
```

## Get resume's pdf

but first refer to [my texlive guide](https://github.com/zbhavyai/containers/tree/main/texlive) for setup details.

```shell
make resume

# or

cd ./src/assets/resume && latex resume.tex && cd -
```
