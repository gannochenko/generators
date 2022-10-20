ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

help:
	@printf "usage: make [target] ...\n\n"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

# ---------------------------------
# Application related commands.
# ---------------------------------

install:
	@yarn

create_resources: ## Create local resources, such as data tables, buckets, etc.

migrate_database: ## Migrate the database

run: ## Run the application locally on the host machine
	@yarn dotenv -e $(ROOT_DIR)/../../.env.local yarn dev

deploy:
