FROM ubuntu 

MAINTAINER juanda <juandacorreo@gmail.com>

RUN apt-get update
RUN apt-get install mysql-client -y

RUN mkdir /backups

ENV BACKUP_TIME 0 3 * * *

ADD docker-entrypoint.sh /entrypoint.sh
ADD backup /bin/
ADD restore /bin/

VOLUME /backups

ENTRYPOINT ["/entrypoint.sh"]

CMD ["cron", "-f"]
