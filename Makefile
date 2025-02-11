.PHONY: build

verifycss:
	bash ./scripts/verify-css.sh

zip:
	bash ./scripts/zip.sh

build: zip
