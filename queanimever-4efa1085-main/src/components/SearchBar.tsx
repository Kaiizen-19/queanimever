import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimeResult {
  title: string;
  genre: string;
  link: string;
  linkLabel: string;
}

const allAnimes: AnimeResult[] = [
  { title: "Blue Box", genre: "Romance", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Horimiya", genre: "Romance", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "My Dress-Up Darling", genre: "Romance", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Gachiakuta", genre: "Acción", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Chainsaw Man", genre: "Acción", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Hell's Paradise", genre: "Acción", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Mashle", genre: "Comedia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Spy x Family", genre: "Comedia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Komi Can't Communicate", genre: "Comedia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Vinland Saga", genre: "Historia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Dororo", genre: "Historia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Fullmetal Alchemist: Brotherhood", genre: "Historia", link: "/generos", linkLabel: "Ver en Géneros" },
  { title: "Naruto", genre: "Shōnen", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Tokyo Revengers", genre: "Acción", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Attack on Titan", genre: "Acción", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "My Hero Academia", genre: "Acción", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Tokyo Ghoul", genre: "Horror", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Jujutsu Kaisen", genre: "Acción", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Black Clover", genre: "Fantasía", link: "/top-7", linkLabel: "Ver en Top 7" },
  { title: "Erased", genre: "Thriller", link: "/animes-cortos", linkLabel: "Ver en Cortos" },
  { title: "Death Parade", genre: "Psicológico", link: "/animes-cortos", linkLabel: "Ver en Cortos" },
  { title: "Angel Beats!", genre: "Drama", link: "/animes-cortos", linkLabel: "Ver en Cortos" },
  { title: "Mob Psycho 100", genre: "Acción", link: "/animes-cortos", linkLabel: "Ver en Cortos" },
  { title: "Ranking of Kings", genre: "Fantasía", link: "/joyas-ocultas", linkLabel: "Ver en Joyas Ocultas" },
  { title: "Odd Taxi", genre: "Misterio", link: "/joyas-ocultas", linkLabel: "Ver en Joyas Ocultas" },
  { title: "Sonny Boy", genre: "Ciencia ficción", link: "/joyas-ocultas", linkLabel: "Ver en Joyas Ocultas" },
  { title: "Kabaneri of the Iron Fortress", genre: "Acción", link: "/animes-tipo", linkLabel: "Animes Tipo..." },
  { title: "86 (Eighty-Six)", genre: "Ciencia ficción", link: "/animes-tipo", linkLabel: "Animes Tipo..." },
  { title: "Code Geass", genre: "Mecha", link: "/animes-tipo", linkLabel: "Animes Tipo..." },
  { title: "Monster", genre: "Thriller", link: "/animes-tipo", linkLabel: "Animes Tipo..." },
  { title: "Death Note", genre: "Psicológico", link: "/animes-tipo", linkLabel: "Animes Tipo..." },
];

export function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allAnimes.filter(
      (a) => a.title.toLowerCase().includes(q) || a.genre.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  const showResults = focused && query.length >= 2;

  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-all ${focused ? "border-primary/50 glow-primary" : "border-border"}`}>
        <Search className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="¿Qué anime quieres ver?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {results.length === 0 ? (
              <div className="p-4 text-sm text-muted-foreground text-center">
                No se encontraron resultados para "{query}"
              </div>
            ) : (
              <div className="max-h-80 overflow-y-auto">
                {results.map((r) => (
                  <Link
                    key={r.title}
                    to={r.link as "/generos"}
                    className="flex items-center justify-between px-4 py-3 text-sm hover:bg-secondary/50 transition-colors border-b border-border/50 last:border-0"
                    onClick={() => { setQuery(""); setFocused(false); }}
                  >
                    <div>
                      <span className="font-medium text-foreground">{r.title}</span>
                      <span className="ml-2 text-xs text-muted-foreground">— {r.genre}</span>
                    </div>
                    <span className="text-xs text-primary shrink-0">{r.linkLabel} →</span>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
