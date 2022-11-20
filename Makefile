
init:
	cd lambda && \
	npm install

build:
	cd lambda && \
	.\node_modules\.bin\tsc