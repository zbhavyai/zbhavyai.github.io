# Hello!

Visit my portfolio at [zbhavyai.github.io](https://zbhavyai.github.io).

## Get web app running

and seeing it on [localhost:3010](http://localhost:3010/).

```shell
npm install
npm start
```

## Build and run the web app

```shell
make container
```

## Get resume's pdf

but first refer to [my texlive guide](https://github.com/zbhavyai/containers/tree/main/texlive) for setup details.

```shell
make resume

# or

cd ./src/assets/resume && latex resume.tex && cd -
```
