.PHONY: build

error_if_icon_changes:
	git status icons | grep -q 'modified' && exit 1

verifycss:
	bash ./scripts/verify-css.sh

zip:
	bash ./scripts/zip.sh

build: zip
