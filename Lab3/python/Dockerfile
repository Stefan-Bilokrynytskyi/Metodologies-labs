FROM python:3.10-alpine

RUN apk add --no-cache musl-dev g++ gcc lapack-dev

WORKDIR /app

COPY requirements/backend.in .

RUN pip3 install --no-cache-dir -r backend.in

COPY . .

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]