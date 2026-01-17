"use client";

import { Moon, Sun, Search, Github } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-xl font-bold">TaskFlow API</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#introduction" className="text-sm hover:text-blue-500 transition">
              Introduction
            </a>
            <a href="#authentication" className="text-sm hover:text-blue-500 transition">
              Authentication
            </a>
            <a href="#endpoints" className="text-sm hover:text-blue-500 transition">
              Endpoints
            </a>
            <a href="https://github.com/haynafi/TaskFlow" className="text-sm hover:text-blue-500 transition">
              GitHub
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
              });
              window.dispatchEvent(event);
            }}
            className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-border hover:bg-accent transition"
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden md:inline-flex h-5 px-1.5 items-center gap-1 rounded border border-border bg-muted text-xs">
              ⌘K
            </kbd>
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-accent transition"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <a
            href="https://github.com/haynafi/TaskFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-accent transition"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}