import { CodeBlock } from "../code-block";

export function Authentication() {
  return (
    <section id="authentication" className="space-y-6 scroll-mt-16 mt-16">
      <div>
        <h2 className="text-3xl font-bold mb-2">Authentication</h2>
        <p className="text-muted-foreground">
          TaskFlow API uses JWT (JSON Web Tokens) for secure authentication
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold" id="register">Register a New User</h3>
        <p className="text-muted-foreground">
          Create a new user account to access the API.
        </p>
        
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <div className="font-mono text-sm">
            <span className="text-green-500 font-semibold">POST</span>
            <span className="ml-3">/auth/register</span>
          </div>
        </div>

        <CodeBlock
          code={`{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "securepass123",
  "full_name": "John Doe"  // optional
}`}
          language="json"
          title="Request Body"
        />

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
          title="Response (201 Created)"
        />

        <CodeBlock
          code={`curl -X POST "http://localhost:8000/auth/register" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "username": "johndoe",
    "password": "securepass123",
    "full_name": "John Doe"
  }'`}
          language="bash"
          title="Example Request"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold" id="login">Login</h3>
        <p className="text-muted-foreground">
          Authenticate and receive a JWT token for API access.
        </p>
        
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <div className="font-mono text-sm">
            <span className="text-green-500 font-semibold">POST</span>
            <span className="ml-3">/auth/login</span>
          </div>
        </div>

        <CodeBlock
          code={`username=johndoe&password=securepass123`}
          language="text"
          title="Request Body (x-www-form-urlencoded)"
        />

        <CodeBlock
          code={`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}`}
          language="json"
          title="Response (200 OK)"
        />

        <CodeBlock
          code={`curl -X POST "http://localhost:8000/auth/login" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "username=johndoe&password=securepass123"`}
          language="bash"
          title="Example Request"
        />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-sm text-blue-400">
            <strong>Note:</strong> Tokens expire after 30 minutes. Store the token securely
            and include it in the Authorization header for all protected endpoints.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Using the Token</h3>
        <p className="text-muted-foreground">
          Include the JWT token in the Authorization header for all protected endpoints:
        </p>
        
        <CodeBlock
          code={`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
          language="text"
          title="Authorization Header"
        />

        <CodeBlock
          code={`curl -X GET "http://localhost:8000/users/me" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"`}
          language="bash"
          title="Example Authenticated Request"
        />
      </div>
    </section>
  );
}