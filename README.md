# OmniHR URL Shortener
URL Shortener - Omni HR Full Stack Assignment #1

## Prerequisites
1. [Docker + Docker Compose](https://docs.docker.com/get-docker/)
 

## Installation

1. Copy root environment variables. - This is used for running the PostgreSQL through Docker
```bash
cp .env.example .env
```

2. Copy backend environment variables

```bash
cp ./backend/.env.example ./backend/.env
```

3. Copy frontend environment variables

```bash
cp ./frontend/.env.example ./frontend/.env
```

4. Run docker compose - Run production ready services

```bash
docker compose up -d
```

5. Run initial backend migration

```bash
docker exec -it omnihr-url-shortener-backend-1 python manage.py migrate
```

6. Open `localhost:3000` in your browser

7. (Optional) - Run containers for development

```bash
docker compose -f docker-compose.dev.yaml up
```

## Preview

![](/docs/urlshortener-demo.gif)


## Improvement Points

If I have more time, I will:

1. Add unit tests
2. Add caching to Get URL APIs
3. Clean database data for expired short URLs
4. Measure performance by doing load testing to the APIs
5. Fine tune nginx and gunicorn webservers


## License
[MIT](https://choosealicense.com/licenses/mit/)