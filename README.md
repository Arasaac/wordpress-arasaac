# wordpress-arasaac
Portal de Noticias para Arasaac

Creamos volúmenes de datos para wordpress y mysql

   docker create -v $PWD/bbdd:/var/lib/mysql --name bbdd ubuntu /bin/true
   docker create -v $PWD/web:/var/www/html --name web ubuntu /bin/true

Creamos los containers para mysql y apache:

    docker run --volumes-from bbdd --name mysql -e MYSQL_ROOT_PASSWORD="arasaac" -e MYSQL_USER="juanda" -e    MYSQL_PASSWORD="arasaac" -e MYSQL_DATABASE="arasaac" -d mysql 
    docker run --volumes-from web --name apache --link mysql:mysql -d -p 8080:80 wordpress

- Generamos la imagen para las copias de seguridad y ejecutamos el container correspondiente:

    docker build -t arasaac/backup $PWD/backup-image

    docker run --name backup-arasaac --volumes-from=web -v $PWD/backups:/backups  --link=mysql:mysql -d arasaac/backup

- Copias de seguridad de la base de datos:
    docker exec backup-arasaac backup

- Restauraciones (además del checkout correspondiente para el directorio web)
  - A último backup
     docker exec backup-arasaac restore
  - A fecha determinada:
    docker exec backup-arasaac restore yyyymmdd
