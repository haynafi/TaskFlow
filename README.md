# TaskFlow - Full Stack Task Management API

Demo SaaS-style REST API with modern documentation site.

## Projects

### API Backend
**Location:** [./api/](./api/)

FastAPI-based REST API with JWT authentication, user management, and task/project CRUD operations.

**Quick Start:**
```bash
cd api
docker-compose up -d
```

Visit: `http://localhost:8000/docs`

### Documentation Site
**Location:** [./docs/](./docs/)

Modern Next.js documentation with Cmd+K search and interactive examples.

**Quick Start:**
```bash
cd docs
npm install && npm run dev
```

Visit: `http://localhost:3000`

## Features

- JWT Authentication
- Project & Task Management
- Advanced Filtering & Pagination
- Interactive API Documentation
- Cmd+K Quick Search
- Dark/Light Mode Toggle
- Docker Support

## Technology Stack

**Backend:** FastAPI, SQLAlchemy, SQLite, JWT  
**Frontend:** Next.js, TypeScript, Tailwind CSS  
**Tools:** Docker, Uvicorn

## Project Structure

```
taskflow/
├── api/              # Backend API
├── docs/             # Documentation site
└── README.md         # This file
```

## License

MIT - Portfolio/Demo Project