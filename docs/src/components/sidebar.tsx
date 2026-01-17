"use client";

import { Book, Lock, Code, AlertCircle } from "lucide-react";

const sections = [
  { id: "introduction", label: "Introduction", icon: Book },
  { id: "authentication", label: "Authentication", icon: Lock },
  { id: "endpoints", label: "Endpoints", icon: Code },
  { id: "errors", label: "Error Handling", icon: AlertCircle },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-6 space-y-1">
        <h2 className="mb-4 text-sm font-semibold text-muted-foreground">
          Documentation
        </h2>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition text-sm"
            >
              <Icon className="h-4 w-4" />
              {section.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}