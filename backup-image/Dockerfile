FROM ubuntu 

MAINTAINER juanda <juandacorreo@gmail.com>

RUN apt-get update && \
    apt-get install mysql-client cron bzip2 -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    mkdir /backups

RUN echo Europe/Madrid | tee /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

ENV BACKUP_TIME 0 3 * * *

ADD docker-entrypoint.sh /entrypoint.sh
ADD backup /bin/
ADD restore /bin/

VOLUME /backups

ENTRYPOINT ["/entrypoint.sh"]

CMD ["cron", "-f"]
