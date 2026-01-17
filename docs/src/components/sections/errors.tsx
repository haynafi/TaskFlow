import { CodeBlock } from "../code-block";

export function Errors() {
  return (
    <section id="errors" className="space-y-6 scroll-mt-16 mt-16">
      <div>
        <h2 className="text-3xl font-bold mb-2">Error Handling</h2>
        <p className="text-muted-foreground">
          Understanding error responses from the API
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">HTTP Status Codes</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <code className="bg-green-500/10 text-green-500 px-3 py-1 rounded font-mono text-sm">200</code>
            <div>
              <p className="font-medium">OK</p>
              <p className="text-sm text-muted-foreground">Request succeeded</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-green-500/10 text-green-500 px-3 py-1 rounded font-mono text-sm">201</code>
            <div>
              <p className="font-medium">Created</p>
              <p className="text-sm text-muted-foreground">Resource created successfully</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-gray-500/10 text-gray-400 px-3 py-1 rounded font-mono text-sm">204</code>
            <div>
              <p className="font-medium">No Content</p>
              <p className="text-sm text-muted-foreground">Resource deleted successfully</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded font-mono text-sm">400</code>
            <div>
              <p className="font-medium">Bad Request</p>
              <p className="text-sm text-muted-foreground">Invalid request data</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-red-500/10 text-red-500 px-3 py-1 rounded font-mono text-sm">401</code>
            <div>
              <p className="font-medium">Unauthorized</p>
              <p className="text-sm text-muted-foreground">Missing or invalid authentication</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-red-500/10 text-red-500 px-3 py-1 rounded font-mono text-sm">404</code>
            <div>
              <p className="font-medium">Not Found</p>
              <p className="text-sm text-muted-foreground">Resource doesn't exist</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <code className="bg-red-500/10 text-red-500 px-3 py-1 rounded font-mono text-sm">422</code>
            <div>
              <p className="font-medium">Validation Error</p>
              <p className="text-sm text-muted-foreground">Request data failed validation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Error Response Format</h3>
        <p className="text-muted-foreground">
          All errors follow a consistent JSON format:
        </p>

        <CodeBlock
          code={`{
  "detail": "Error message describing what went wrong"
}`}
          language="json"
          title="Standard Error Response"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Common Errors</h3>

        <div>
          <h4 className="font-semibold mb-2">Authentication Failed</h4>
          <CodeBlock
            code={`{
  "detail": "Could not validate credentials"
}`}
            language="json"
            title="401 Unauthorized"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Token is missing, invalid, or expired. Login again to get a new token.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resource Not Found</h4>
          <CodeBlock
            code={`{
  "detail": "Task not found"
}`}
            language="json"
            title="404 Not Found"
          />
          <p className="text-sm text-muted-foreground mt-2">
            The requested resource doesn't exist or you don't have access to it.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Validation Error</h4>
          <CodeBlock
            code={`{
  "detail": [
    {
      "loc": ["body", "email"],
      "msg": "value is not a valid email address",
      "type": "value_error.email"
    }
  ]
}`}
            language="json"
            title="422 Validation Error"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Request data didn't pass validation. Check the error details for specific field errors.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Duplicate Resource</h4>
          <CodeBlock
            code={`{
  "detail": "Email or username already registered"
}`}
            language="json"
            title="400 Bad Request"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Attempting to create a resource that already exists.
          </p>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <h4 className="font-semibold mb-2">Need Help?</h4>
        <p className="text-sm text-muted-foreground">
          Check the interactive API documentation at{" "}
          <code className="bg-muted px-2 py-1 rounded">/docs</code> or{" "}
          <code className="bg-muted px-2 py-1 rounded">/redoc</code> for more examples
          and testing capabilities.
        </p>
      </div>
    </section>
  );
}