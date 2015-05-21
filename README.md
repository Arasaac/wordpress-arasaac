# wordpress-arasaac
Portal de Noticias para Arasaac

## Instalación

Copiamos el repositorio de github y nos situamos en el directorio

    git clone git@github.com:Arasaac/wordpress-arasaac.git
    cd wordpress-arasaac


Creamos volúmenes de datos para wordpress y mysql

    docker create -v $PWD/bbdd:/var/lib/mysql --name bbdd ubuntu /bin/true
    docker create -v $PWD/web:/var/www/html --name web ubuntu /bin/true

Creamos los containers para mysql y apache:

    docker run --volumes-from bbdd --name mysql -e MYSQL_ROOT_PASSWORD="arasaac" -d mysql 
    docker run --volumes-from web --name apache --link mysql:mysql -d -p 8080:80 wordpress

Con esto tenemos un wordpress vacío, para tener los datos actuales:

Si no está hecho previamente, generamos la imagen para las copias de seguridad y ejecutamos el container correspondiente.

    docker build -t arasaac/backup $PWD/backup-image
    docker run --name backup-arasaac --volumes-from=web -v $PWD/backups:/backups  --link=mysql:mysql -d arasaac/backup

Restauraciones bbdd a último backup

    docker exec backup-arasaac restore

## Acceso

url http://localhost:8080

usuario: juanda

pwd: arasaac

## Actualización del repositorio local

Se actualiza el repositorio con los cambios publicados en github:

   git pull git@github.com:Arasaac/wordpress-arasaac.git
 
Se restaura bbdd a último backup

    docker exec backup-arasaac restore

Se podría configurar un github para que la restauración sea automática

## Copias de Seguridad

Si no está hecho previamente, generamos la imagen para las copias de seguridad y ejecutamos el container correspondiente.

    docker build -t arasaac/backup $PWD/backup-image
    docker run --name backup-arasaac --volumes-from=web -v $PWD/backups:/backups  --link=mysql:mysql -d arasaac/backup

Copias de seguridad de la base de datos:

    docker exec backup-arasaac backup

Restauraciones bbdd a último backup

    docker exec backup-arasaac restore

Restauración bbdd a fecha determinada:

    docker exec backup-arasaac restore yyyymmdd
