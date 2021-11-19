## KPINetwork - Kleeen Docker Image

Here you can find instructions to test the Kleeen API in a local docker container.

# Getting started

Follow the next instructions to get the environment ready to use.

## Requirements:

- [Docker](https://docs.docker.com/engine/install/) (recommended desktop version).

## Build:

To build the docker image you need to run the next command:

```shell
docker build -t kpinetwork-image .
```

If you need to set the processor type, you just need to add the next flag:

```shell
docker build --platform linux/amd64 -t kpinetwork-image .
```

## Run application:

To run the container you need to execute the next command:

```shell
docker run -p 3000:3000 -d kpinetwork-image
```

If you need to set environment variables you need add the next part:

```shell
docker run -e VARIABLE=VALUE -p 3000:3000 -d kpinetwork-image
```

