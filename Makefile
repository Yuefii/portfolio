COMPOSE_DIR = docker/compose
COMPOSE_FILE = postgresql.yml

db_up:
	cd $(COMPOSE_DIR) && docker-compose -f $(COMPOSE_FILE) up -d

db_down:
	cd $(COMPOSE_DIR) && docker-compose -f $(COMPOSE_FILE) down

clean: db_down