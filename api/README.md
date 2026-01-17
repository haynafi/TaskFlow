# TaskFlow API

A demo SaaS-style REST API built with FastAPI, featuring JWT authentication, user management, and task/project CRUD operations.

## Features

- JWT-based authentication
- User registration and login
- Project management (CRUD)
- Task management (CRUD)
- Filtering and pagination
- Auto-generated API docs (Swagger/ReDoc)
- SQLite database (easy demo deployment)
- Docker support

## Project Structure

```
taskflow/
├── main.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
```

## Quick Start

### Option 1: Docker (Recommended)

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

API will be available at `http://localhost:8000`

### Option 2: Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

## API Documentation

Once running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Usage Examples

### 1. Register a new user

```bash
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "username": "testuser",
    "password": "securepassword123",
    "full_name": "Test User"
  }'
```

### 2. Login and get token

```bash
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=securepassword123"
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}
```

### 3. Create a project (authenticated)

```bash
curl -X POST "http://localhost:8000/projects" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Portfolio Website",
    "description": "Building a personal portfolio",
    "status": "active"
  }'
```

### 4. List tasks with filters

```bash
# Get all tasks
curl -X GET "http://localhost:8000/tasks" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Filter by status
curl -X GET "http://localhost:8000/tasks?status=todo&priority=high" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Pagination
curl -X GET "http://localhost:8000/tasks?skip=0&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 5. Update a task

```bash
curl -X PUT "http://localhost:8000/tasks/1" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "in_progress",
    "priority": "high"
  }'
```

### 6. Delete a project

```bash
curl -X DELETE "http://localhost:8000/projects/1" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login and get JWT token
- `GET /users/me` - Get current user profile

### Projects
- `GET /projects` - List projects (with filters)
- `POST /projects` - Create project
- `GET /projects/{id}` - Get project details
- `PUT /projects/{id}` - Update project
- `DELETE /projects/{id}` - Delete project

### Tasks
- `GET /tasks` - List tasks (with filters)
- `POST /tasks` - Create task
- `GET /tasks/{id}` - Get task details
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Delete task

## Query Parameters

### Pagination
- `skip` - Number of items to skip (default: 0)
- `limit` - Max items to return (default: 10)

### Filters
- `status` - Filter by status (projects: active/archived, tasks: todo/in_progress/done)
- `priority` - Filter tasks by priority (low/medium/high)

## Environment Variables

Create a `.env` file:

```bash
SECRET_KEY=your-super-secret-key-change-this-in-production
```

Generate a secure key:
```bash
openssl rand -hex 32
```

## Database

SQLite database file: `taskflow.db`

The database is created automatically on first run with these tables:
- `users` - User accounts
- `projects` - User projects
- `tasks` - User tasks

## Security Notes

- Change `SECRET_KEY` in production
- Passwords are hashed with bcrypt
- JWT tokens expire after 30 minutes
- All endpoints (except auth) require authentication
- Users can only access their own data

## Deployment to VPS

```bash
# On your VPS
git clone <your-repo>
cd taskflow-api

# Update SECRET_KEY in docker-compose.yml
nano docker-compose.yml

# Run with Docker
docker-compose up -d

# Check status
docker-compose ps
```

### Nginx reverse proxy (optional)

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Tech Stack

- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM for database operations
- **Pydantic** - Data validation
- **JWT** - Token-based authentication
- **Passlib** - Password hashing
- **Uvicorn** - ASGI server

## License

MIT - Free for portfolio use