# Pet-Adoption-App-Tin-Puja
An app where admins can list pet for adoption, and users can adopt those pet

Steps to get the application up and running
1. In the project directory execute command "docker compose up -d", the -d flag means detached, so it will not occupy your terminal instance. This runs a postresql container as well as a pgadmin container
2. We need to create a db in our PostgreSQL container
   1. Start a psql session in the container<br>
docker exec -it pet_postgres_container psql -U admin
   2. Create the pet database in the psql session
      CREATE DATABASE pets;
3. After finished, to clean up docker containers on your system use command <br>
   docker rm $(docker ps -a -q)

To import keycloak.json
(Note the container id for keycloak container)
docker ps
(Copy keycloak.json into container)
docker cp ./keycloak/keycloak.json <keycloak-container-id>:/
(import config)
docker exec -it <keycloak-container-id> /bin/bash
/opt/keycloak/bin/kc.sh import --file /keycloak.json

To Export Keycloak Realm Config
1. TODO:
2. docker cp <keycloak-container-id>:/tmp/keycloak.json ./



