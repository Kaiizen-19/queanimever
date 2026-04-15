import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AdSlot } from "@/components/AdSlot";
import { AnimatedCard } from "@/components/AnimatedSection";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog de Anime — Artículos, Listas y Guías | AniméQué" },
      { name: "description", content: "Lee nuestros artículos sobre anime: guías para principiantes, comparativas, rankings y análisis profundos de las mejores series." },
      { property: "og:title", content: "Blog de Anime — AniméQué" },
      { property: "og:description", content: "Artículos, guías y análisis sobre los mejores animes." },
    ],
  }),
  component: BlogPage,
});

export const articles = [
  {
    slug: "animes-parecidos-attack-on-titan",
    title: "5 Animes parecidos a Attack on Titan que debes ver",
    excerpt: "Shingeki no Kyojin dejó un vacío. Estos 5 animes llenarán ese hueco con acción, drama y giros argumentales épicos.",
    date: "15 Mar 2026",
    category: "Similares",
    readTime: "12 min",
    emoji: "⚔️",
    gradient: "from-genre-action/20 to-primary/10",
  },
  {
    slug: "animes-romanticos-recomendados",
    title: "Los mejores animes románticos recomendados",
    excerpt: "Blue Box, Horimiya y más: los animes de romance que demuestran que el amor en animación puede ser más real que en live-action.",
    date: "28 Feb 2026",
    category: "Recomendaciones",
    readTime: "10 min",
    emoji: "💕",
    gradient: "from-genre-romance/20 to-accent/10",
  },
  {
    slug: "animes-poco-conocidos",
    title: "Animes poco conocidos que debes ver — Joyas ocultas",
    excerpt: "Ranking of Kings, Odd Taxi, Sonny Boy y más: animes brillantes que merecen mucha más atención de la que reciben.",
    date: "20 Ene 2026",
    category: "Descubrimiento",
    readTime: "9 min",
    emoji: "💎",
    gradient: "from-neon/15 to-genre-story/10",
  },
  {
    slug: "guia-principiantes-anime",
    title: "Guía definitiva para principiantes en el anime",
    excerpt: "¿No sabes por dónde empezar? Te explicamos todo: qué es el anime, cómo elegir tu primer anime y dónde verlo.",
    date: "10 Feb 2026",
    category: "Guías",
    readTime: "15 min",
    emoji: "🎓",
    gradient: "from-genre-comedy/15 to-gold/10",
  },
  {
    slug: "mejores-animes-accion-2026",
    title: "Los 10 mejores animes de acción de 2026",
    excerpt: "Desde Jujutsu Kaisen Season 2 hasta las nuevas sorpresas del año, repasamos los animes de acción que están rompiendo internet.",
    date: "1 Mar 2026",
    category: "Rankings",
    readTime: "8 min",
    emoji: "🔥",
    gradient: "from-primary/20 to-genre-action/10",
  },
  {
    slug: "mejor-anime-todos-tiempos",
    title: "¿Cuál es el mejor anime de todos los tiempos?",
    excerpt: "Fullmetal Alchemist, Steins;Gate, AoT, Hunter x Hunter... analizamos los candidatos y te damos nuestra respuesta.",
    date: "5 Ene 2026",
    category: "Análisis",
    readTime: "15 min",
    emoji: "🏆",
    gradient: "from-gold/15 to-primary/10",
  },
];

function BlogPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="Artículos, listas, guías y análisis sobre el mundo del anime. Contenido actualizado para fans nuevos y veteranos.">
        📝 Blog de Anime
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <AnimatedCard key={a.slug} delay={i * 0.08}>
            <Link to="/blog/$slug" params={{ slug: a.slug }} className="anime-card-hover group flex flex-col rounded-xl border border-border bg-card overflow-hidden h-full">
              <div className={`h-36 bg-gradient-to-br ${a.gradient} flex items-center justify-center relative`}>
                <span className="text-5xl">{a.emoji}</span>
                <div className="absolute inset-0 shimmer" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-card/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-foreground">
                    <Tag className="h-3 w-3" /> {a.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{a.title}</h2>
                <p className="flex-1 text-sm text-muted-foreground mb-4 line-clamp-3">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readTime}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Leer <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedCard>
        ))}
      </div>

      <AdSlot />

      <div className="mt-12 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">¿Quieres que escribamos sobre un anime?</h3>
        <p className="text-muted-foreground">Estamos en constante expansión. Publicamos artículos nuevos cada semana.</p>
      </div>
    </div>
  );
}
