.PHONY: build

genicons:
	node ./scripts/genicons.js

error_if_icon_changes:
	bash ./scripts/genicons.ci.test.sh

verifycss:
	bash ./scripts/verify-css.sh

zip:
	bash ./scripts/zip.sh

build: zip
