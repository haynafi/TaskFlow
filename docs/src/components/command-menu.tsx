"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Book, Lock, Code, AlertCircle, X } from "lucide-react";

const pages = [
  { id: "introduction", label: "Introduction", icon: Book, section: "Getting Started" },
  { id: "authentication", label: "Authentication", icon: Lock, section: "Getting Started" },
  { id: "endpoints", label: "API Endpoints", icon: Code, section: "Reference" },
  { id: "errors", label: "Error Handling", icon: AlertCircle, section: "Reference" },
  { id: "register", label: "Register User", icon: Code, section: "Endpoints" },
  { id: "login", label: "Login", icon: Code, section: "Endpoints" },
  { id: "projects", label: "Projects CRUD", icon: Code, section: "Endpoints" },
  { id: "tasks", label: "Tasks CRUD", icon: Code, section: "Endpoints" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (value: string) => {
    setOpen(false);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
        <Command
          className="cmd-k-dialog rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center border-b border-border px-4">
            <Search className="h-5 w-5 mr-3 text-muted-foreground" />
            <Command.Input
              placeholder="Search documentation..."
              className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-accent rounded-md transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            {["Getting Started", "Reference", "Endpoints"].map((section) => (
              <Command.Group
                key={section}
                heading={section}
                className="px-2 py-2"
              >
                {pages
                  .filter((page) => page.section === section)
                  .map((page) => {
                    const Icon = page.icon;
                    return (
                      <Command.Item
                        key={page.id}
                        value={page.id}
                        onSelect={handleSelect}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent cursor-pointer transition"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{page.label}</span>
                      </Command.Item>
                    );
                  })}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}