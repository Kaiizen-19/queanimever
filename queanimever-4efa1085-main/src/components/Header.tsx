import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { SearchBar } from "./SearchBar";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/generos", label: "Por Género" },
  { to: "/animes-tipo", label: "Animes Tipo..." },
  { to: "/top-7", label: "Top 7" },
  { to: "/animes-cortos", label: "Cortos" },
  { to: "/joyas-ocultas", label: "Joyas Ocultas" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur-2xl">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-display font-extrabold text-gradient-primary tracking-tight">
            🔥 AniméQué
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-secondary"
              activeProps={{ className: "!text-primary !bg-primary/10" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop search toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden lg:inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search bar dropdown */}
      {searchOpen && (
        <div className="hidden lg:block border-t border-border/30 bg-background/95 px-4 pb-4 pt-3">
          <div className="section-container">
            <SearchBar />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border/30 bg-background px-4 pb-4 lg:hidden">
          <div className="py-3">
            <SearchBar />
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              activeProps={{ className: "!text-primary !bg-primary/10" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
