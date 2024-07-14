# syntax = docker/dockerfile:1

ARG PYTHON_VERSION=3.11.4
ARG DJANGO_SECRET_KEY
ARG DJANGO_SETTINGS_MODULE
ARG DB_HOST
ARG POSTGRES_PASSWORD
ARG POSTGRES_USER
ARG POSTGRES_DB
ARG GOOGLE_CREDENTIALS_BASE64_ENCODED

FROM --platform=linux/amd64 registry.docker.com/library/python:$PYTHON_VERSION-slim as base

WORKDIR /django 

ENV PYTHONDONTWRITEBYTECODE=1 \
	PYTHONUNBUFFERED=1 \
	DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE \
	DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY \
	DB_HOST=$DB_HOST \
	POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
	POSTGRES_USER=$POSTGRES_USER \
	POSTGRES_DB=$POSTGRES_DB \
	GOOGLE_CREDENTIALS_BASE64_ENCODED=$GOOGLE_CREDENTIALS_BASE64_ENCODED


FROM base as build 

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libpq-dev libvips pkg-config

RUN pip install poetry 

COPY pyproject.toml poetry.lock ./ 

RUN poetry export -f requirements.txt > requirements.txt
RUN pip install --no-cache-dir -r requirements.txt


COPY . .

FROM base 

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libvips postgresql-client && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

RUN apt-get update -qq && apt-get install -y nodejs npm

COPY --from=build /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=build /django /django

RUN useradd django --create-home --shell /bin/bash && \ 
	chown -R django:django /django
	
USER django:django

ENTRYPOINT ["/django/bin/docker-entrypoint"]

expose 8000 
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
