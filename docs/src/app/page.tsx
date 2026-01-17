import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Introduction } from "@/components/sections/introduction";
import { Authentication } from "@/components/sections/authentication";
import { Endpoints } from "@/components/sections/endpoints";
import { Errors } from "@/components/sections/errors";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-8 py-12 max-w-4xl">
          <Introduction />
          <Authentication />
          <Endpoints />
          <Errors />
        </main>
      </div>
    </div>
  );
}