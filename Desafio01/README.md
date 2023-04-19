# Desafio 1 - Docker e GO

## Gerar executável

Para gerar o executável utilizar a seguinte sequência de comandos:

```sh
go mod init github.com/<github username>/FullCycle
go mod tidy
go build -o fcrocks -ldflags="-s -w" fcrocks.go
```

## Gerar imagem

Para gerar a imagem Docker utilizar a seguinte sequência de comandos:

```sh
docker build -t <github username>/fullcycle .
docker images <github username>/*
```

## Subir imagens para o Docker Hub

Para subir as imagens no Docker Hub utilizar o seguinte comando:

```sh
docker image push --all-tags <github username>/fullcycle
```

## Testando a imagem

Para finalizar, vamos ao teste com a seguinte sequência de comandos:

```sh
docker image rm tarsoqueiroz/fullcycle
docker images tarsoqueiroz/fullcycle
docker container run --rm tarsoqueiroz/fullcycle
```

## That's...

...all folks!!!
