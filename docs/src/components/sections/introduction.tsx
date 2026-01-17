import { CodeBlock } from "../code-block";

export function Introduction() {
  return (
    <section id="introduction" className="space-y-6 scroll-mt-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">TaskFlow API Documentation</h1>
        <p className="text-xl text-muted-foreground">
          A modern REST API for task and project management
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          TaskFlow API is a demo SaaS-style REST API built with FastAPI. It provides
          a complete backend for managing users, projects, and tasks with JWT authentication,
          CRUD operations, and advanced filtering.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>JWT-based authentication with secure password hashing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Complete CRUD operations for projects and tasks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Advanced filtering and pagination support</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Auto-generated API documentation (Swagger/ReDoc)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>User isolation - users only access their own data</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Base URL</h3>
        <CodeBlock
          code={`https://api.taskflow.example.com
# or for local development
http://localhost:8000`}
          language="bash"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Start</h3>
        <p className="text-muted-foreground">
          Here's a quick example of registering a user and creating a task:
        </p>
        <CodeBlock
          code={`# 1. Register a new user
curl -X POST "http://localhost:8000/auth/register" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "username": "johndoe",
    "password": "securepass123",
    "full_name": "John Doe"
  }'

# 2. Login to get token
curl -X POST "http://localhost:8000/auth/login" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "username=johndoe&password=securepass123"

# 3. Create a task (use token from step 2)
curl -X POST "http://localhost:8000/tasks" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Build portfolio website",
    "priority": "high",
    "status": "todo"
  }'`}
          language="bash"
          title="Quick Start Example"
        />
      </div>
    </section>
  );
}