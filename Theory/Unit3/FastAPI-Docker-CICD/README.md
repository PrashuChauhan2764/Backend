# FastAPI Docker CI/CD Project

A small FastAPI application packaged with Docker and tested through a GitHub Actions workflow.

## Project files

- `main.py` — FastAPI application with root, health and students endpoints.
- `Dockerfile` — builds the application image.
- `docker-compose.yml` — runs the container on port 8000.
- `automationTesting.py` — checks the three API endpoints.
- `.github/workflows/main.yml` — runs API tests and builds/pushes the Docker image on pushes to `main`.

## Run locally without Docker

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Open `http://localhost:8000/docs` for the interactive API documentation.

In another terminal:

```bash
python automationTesting.py
```

## Run with Docker Compose

```bash
docker compose up --build
```

The API will be available at `http://localhost:8000`.

Stop it with:

```bash
docker compose down
```

## GitHub Actions setup

The workflow runs when code is pushed to the `main` branch. It installs Python dependencies, starts the API, runs the endpoint tests, then builds and pushes the Docker image.

Add these repository secrets in **Settings → Secrets and variables → Actions**:

- `DOCKERHUB_USERNAME` — your Docker Hub username.
- `DOCKERHUB_TOKEN` — a Docker Hub access token.

Without these secrets, the test steps can run but the Docker login and push steps will fail.

## Reference and attribution

This is a student coursework adaptation of the FastAPI Docker production example shared by Raj Tanay Singh:
https://github.com/rajtanayjsr-debug/fastapi-docker-production

Review the code and understand each step before presenting or submitting it as your own practical work.
