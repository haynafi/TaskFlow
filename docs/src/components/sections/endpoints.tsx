import { CodeBlock } from "../code-block";

export function Endpoints() {
  return (
    <section id="endpoints" className="space-y-6 scroll-mt-16 mt-16">
      <div>
        <h2 className="text-3xl font-bold mb-2">API Endpoints</h2>
        <p className="text-muted-foreground">
          Complete reference for all available endpoints
        </p>
      </div>

      {/* User Endpoints */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">User</h3>
        
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-blue-500 font-semibold">GET</span>
              <span className="ml-3">/users/me</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Get current user profile</p>
          </div>

          <CodeBlock
            code={`{
  "id": 1,
  "email": "user@example.com",
  "username": "johndoe",
  "full_name": "John Doe",
  "is_active": true,
  "created_at": "2024-01-15T10:30:00"
}`}
            language="json"
            title="Response"
          />
        </div>
      </div>

      {/* Project Endpoints */}
      <div className="space-y-4" id="projects">
        <h3 className="text-2xl font-semibold">Projects</h3>
        
        {/* List Projects */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-blue-500 font-semibold">GET</span>
              <span className="ml-3">/projects</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">List all projects for current user</p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">skip</code>
                <span className="text-muted-foreground">Number of items to skip (default: 0)</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">limit</code>
                <span className="text-muted-foreground">Max items to return (default: 10)</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">status</code>
                <span className="text-muted-foreground">Filter by status (active, archived)</span>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`curl -X GET "http://localhost:8000/projects?status=active&limit=5" \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
            language="bash"
            title="Example"
          />
        </div>

        {/* Create Project */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-green-500 font-semibold">POST</span>
              <span className="ml-3">/projects</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Create a new project</p>
          </div>

          <CodeBlock
            code={`{
  "name": "Portfolio Website",
  "description": "Build my personal portfolio",
  "status": "active"
}`}
            language="json"
            title="Request Body"
          />

          <CodeBlock
            code={`{
  "id": 1,
  "user_id": 1,
  "name": "Portfolio Website",
  "description": "Build my personal portfolio",
  "status": "active",
  "created_at": "2024-01-15T10:30:00",
  "updated_at": "2024-01-15T10:30:00"
}`}
            language="json"
            title="Response (201 Created)"
          />
        </div>

        {/* Get Project */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-blue-500 font-semibold">GET</span>
              <span className="ml-3">/projects/{'{project_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Get project by ID</p>
          </div>
        </div>

        {/* Update Project */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-yellow-500 font-semibold">PUT</span>
              <span className="ml-3">/projects/{'{project_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Update project</p>
          </div>

          <CodeBlock
            code={`{
  "name": "Updated Project Name",
  "status": "archived"
}`}
            language="json"
            title="Request Body (all fields optional)"
          />
        </div>

        {/* Delete Project */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-red-500 font-semibold">DELETE</span>
              <span className="ml-3">/projects/{'{project_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Delete project (204 No Content)</p>
          </div>
        </div>
      </div>

      {/* Task Endpoints */}
      <div className="space-y-4" id="tasks">
        <h3 className="text-2xl font-semibold">Tasks</h3>
        
        {/* List Tasks */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-blue-500 font-semibold">GET</span>
              <span className="ml-3">/tasks</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">List all tasks for current user</p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">skip</code>
                <span className="text-muted-foreground">Number of items to skip (default: 0)</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">limit</code>
                <span className="text-muted-foreground">Max items to return (default: 10)</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">status</code>
                <span className="text-muted-foreground">Filter by status (todo, in_progress, done)</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-muted px-2 py-1 rounded">priority</code>
                <span className="text-muted-foreground">Filter by priority (low, medium, high)</span>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`curl -X GET "http://localhost:8000/tasks?status=todo&priority=high" \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
            language="bash"
            title="Example"
          />
        </div>

        {/* Create Task */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-green-500 font-semibold">POST</span>
              <span className="ml-3">/tasks</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Create a new task</p>
          </div>

          <CodeBlock
            code={`{
  "title": "Design homepage mockup",
  "description": "Create Figma designs for the landing page",
  "status": "todo",
  "priority": "high",
  "due_date": "2024-02-01T00:00:00"
}`}
            language="json"
            title="Request Body"
          />

          <CodeBlock
            code={`{
  "id": 1,
  "user_id": 1,
  "title": "Design homepage mockup",
  "description": "Create Figma designs for the landing page",
  "status": "todo",
  "priority": "high",
  "due_date": "2024-02-01T00:00:00",
  "created_at": "2024-01-15T10:30:00",
  "updated_at": "2024-01-15T10:30:00"
}`}
            language="json"
            title="Response (201 Created)"
          />
        </div>

        {/* Get Task */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-blue-500 font-semibold">GET</span>
              <span className="ml-3">/tasks/{'{task_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Get task by ID</p>
          </div>
        </div>

        {/* Update Task */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-yellow-500 font-semibold">PUT</span>
              <span className="ml-3">/tasks/{'{task_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Update task</p>
          </div>

          <CodeBlock
            code={`{
  "status": "in_progress",
  "priority": "medium"
}`}
            language="json"
            title="Request Body (all fields optional)"
          />
        </div>

        {/* Delete Task */}
        <div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="font-mono text-sm">
              <span className="text-red-500 font-semibold">DELETE</span>
              <span className="ml-3">/tasks/{'{task_id}'}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Delete task (204 No Content)</p>
          </div>
        </div>
      </div>
    </section>
  );
}