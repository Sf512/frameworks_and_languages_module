DOCKER_IMAGE:=client

build:
	docker build --tag ${DOCKER_IMAGE} .

test:
	docker run -p 3000:3000 --rm ${DOCKER_IMAGE}
