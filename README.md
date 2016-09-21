# Google search suggestions proxy for nodeJS

This is a simple implementation of a proxy made in nodeJS to get search suggestions with correct headers for ajax requests.

## Usage

```bash
git clone https://github.com/giordanocardillo/node-google-search-suggestor.git
cd app
node .
```

Then go to `localhost:5454?q={SEARCH-QUERY-HERE}` to test it!

## Docker image

For your convenience i added a Dockerfile to build image for Docker.

To build image

```bash
docker build -t giordanocardillo/nodejs-google-suggestor-proxy .
```

Then run it


```bash
docker run --name google-suggestor-proxy -d -p 0.0.0.0:5454:5454 giordanocardillo/nodejs-google-suggestor-proxy
```

This project is also available on [Docker Hub](https://hub.docker.com/r/giordanocardillo/node-google-search-suggestor), just do

```bash
docker pull giordanocardillo/node-google-search-suggestor
```

