import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AdSlot } from "@/components/AdSlot";
import { SearchBar } from "@/components/SearchBar";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Flame, Sparkles, Star, Zap, Heart, Laugh, BookOpen, TrendingUp, Crown, ArrowRight, Clock, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const trendingAnimes = [
  { title: "Jujutsu Kaisen", tag: "🔥 Trending", desc: "La nueva era del shōnen con la mejor animación del momento", to: "/top-7" as const },
  { title: "Blue Box", tag: "💕 Popular", desc: "El romance más genuino y emotivo de los últimos años", to: "/generos" as const },
  { title: "Chainsaw Man", tag: "⚡ Imprescindible", desc: "Crudo, impredecible y con animación cinematográfica", to: "/generos" as const },
  { title: "Spy x Family", tag: "⭐ Para todos", desc: "Comedia familiar perfecta para cualquier público", to: "/generos" as const },
];

const featuredArticles = [
  { title: "Animes parecidos a Attack on Titan", slug: "animes-parecidos-attack-on-titan", readTime: "12 min", emoji: "⚔️" },
  { title: "Mejores animes románticos recomendados", slug: "animes-romanticos-recomendados", readTime: "10 min", emoji: "💕" },
  { title: "Animes poco conocidos que debes ver", slug: "animes-poco-conocidos", readTime: "9 min", emoji: "💎" },
];

function HomePage() {
  return (
    <div className="bg-noise">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="section-container relative">
          <AnimatedSection className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary mb-8"
            >
              <Flame className="h-4 w-4" /> Tu guía de anime definitiva — 2026
            </motion.div>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              ¿No sabes qué anime ver?
              <br />
              <span className="text-gradient-primary">Aquí tienes las mejores</span>
              <br />
              <span className="text-gradient-primary">recomendaciones</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Descubre animes increíbles organizados por género, estilo y popularidad. 
              Sin spoilers, con opiniones honestas y listas actualizadas.
            </p>

            {/* Search bar in hero */}
            <div className="mx-auto mt-10 max-w-xl">
              <SearchBar />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/generos" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-display font-bold text-primary-foreground transition-all hover:scale-105 glow-primary text-sm">
                <Sparkles className="h-5 w-5" /> Explorar por Género
              </Link>
              <Link to="/top-7" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 font-display font-bold text-foreground transition-all hover:bg-secondary hover:border-primary/30 text-sm">
                <Star className="h-5 w-5" /> Ver Top 7
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AdSlot />

      {/* Trending / Featured Now */}
      <section className="section-container py-16">
        <SectionHeading subtitle="Los animes que todo el mundo está viendo y comentando ahora mismo.">
          <span className="inline-flex items-center gap-3"><TrendingUp className="h-8 w-8 text-primary" /> Tendencias Ahora</span>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingAnimes.map((anime, i) => (
            <AnimatedCard key={anime.title} delay={i * 0.1}>
              <Link to={anime.to} className="anime-card-hover group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden">
                <div className="h-36 bg-gradient-to-br from-primary/15 via-accent/10 to-neon/5 relative overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-card/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold">{anime.tag}</span>
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">{anime.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{anime.desc}</p>
                </div>
                <div className="px-4 pb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Descubrir <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Most recommended section */}
      <section className="section-container py-16">
        <SectionHeading subtitle="Los animes que más recomendamos a quienes buscan su próxima serie favorita.">
          <span className="inline-flex items-center gap-3"><Crown className="h-8 w-8 text-gold" /> Animes Más Recomendados</span>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Fullmetal Alchemist: Brotherhood", badge: "#1 Mejor Valorado", desc: "La obra maestra absoluta del anime. Acción, filosofía, aventura y un final perfecto.", emoji: "🏆", to: "/generos" as const },
            { title: "Attack on Titan", badge: "#2 Más Impactante", desc: "Cada temporada reinventa la serie. Giros que redefinen todo lo que creías saber.", emoji: "⚔️", to: "/top-7" as const },
            { title: "Vinland Saga", badge: "#3 Más Profundo", desc: "Un anime que te transforma. De la venganza a la búsqueda de la paz.", emoji: "🌊", to: "/generos" as const },
          ].map((item, i) => (
            <AnimatedCard key={item.title} delay={i * 0.1}>
              <Link to={item.to} className="anime-card-hover group flex flex-col rounded-xl border border-border bg-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                <span className="text-3xl mb-3">{item.emoji}</span>
                <span className="inline-block w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary mb-3">{item.badge}</span>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-4">
                  Ver detalles <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Quick genre cards */}
      <section className="section-container py-16">
        <SectionHeading subtitle="Encuentra animes según tu estado de ánimo y preferencias.">
          Explora por categoría
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Heart className="h-6 w-6" />, label: "Romance", desc: "Blue Box, Horimiya, My Dress-Up Darling", color: "genre-romance", to: "/generos" as const },
            { icon: <Zap className="h-6 w-6" />, label: "Acción", desc: "Gachiakuta, Chainsaw Man, Hell's Paradise", color: "genre-action", to: "/generos" as const },
            { icon: <Laugh className="h-6 w-6" />, label: "Comedia", desc: "Mashle, Spy x Family, Komi Can't Communicate", color: "genre-comedy", to: "/generos" as const },
            { icon: <BookOpen className="h-6 w-6" />, label: "Buena Historia", desc: "Vinland Saga, Dororo, Fullmetal Alchemist", color: "genre-story", to: "/generos" as const },
          ].map((c, i) => (
            <AnimatedCard key={c.label} delay={i * 0.08}>
              <Link to={c.to} className="anime-card-hover group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${c.color}/20 text-${c.color}`}>{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{c.label}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-auto">
                  Ver recomendaciones <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Animes Tipo preview */}
      <section className="section-container py-16">
        <SectionHeading subtitle="¿Te gustó un anime y quieres más del mismo estilo? Te ayudamos.">
          🔥 Animes tipo...
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Animes tipo Attack on Titan", desc: "Acción brutal, historia intensa y giros inesperados que te dejan sin aliento.", to: "/animes-tipo" as const, emoji: "⚔️" },
            { title: "Animes tipo Naruto", desc: "Aventura épica, evolución del personaje y lazos de amistad inquebrantables.", to: "/animes-tipo" as const, emoji: "🍥" },
            { title: "Animes tipo Death Note", desc: "Estrategia, mente maestra y batallas psicológicas que desafían tu inteligencia.", to: "/animes-tipo" as const, emoji: "🧠" },
          ].map((item, i) => (
            <AnimatedCard key={item.title} delay={i * 0.1}>
              <Link to={item.to} className="anime-card-hover group rounded-xl border border-border bg-card p-6 flex flex-col">
                <span className="text-3xl mb-3">{item.emoji}</span>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-4">
                  Descubrir animes <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Featured articles */}
      <section className="section-container py-16">
        <SectionHeading subtitle="Artículos completos con recomendaciones detalladas y análisis profundos.">
          <span className="inline-flex items-center gap-3"><Eye className="h-8 w-8 text-accent" /> Artículos Destacados</span>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredArticles.map((a, i) => (
            <AnimatedCard key={a.slug} delay={i * 0.1}>
              <Link to="/blog/$slug" params={{ slug: a.slug }} className="anime-card-hover group flex flex-col rounded-xl border border-border bg-card overflow-hidden">
                <div className="h-28 bg-gradient-to-br from-accent/15 via-primary/10 to-neon/5 flex items-center justify-center relative">
                  <span className="text-4xl">{a.emoji}</span>
                  <div className="absolute inset-0 shimmer" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">{a.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA sections */}
      <section className="section-container py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <AnimatedCard>
            <Link to="/animes-cortos" className="anime-card-hover group rounded-xl border border-border bg-card p-8 text-center block">
              <span className="text-5xl mb-4 block floating">⚡</span>
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">Animes cortos para empezar</h3>
              <p className="text-sm text-muted-foreground">Perfectos si tienes poco tiempo o eres nuevo en el anime.</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4">
                Ver lista <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <Link to="/joyas-ocultas" className="anime-card-hover group rounded-xl border border-border bg-card p-8 text-center block">
              <span className="text-5xl mb-4 block floating">💎</span>
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">Joyas ocultas poco conocidas</h3>
              <p className="text-sm text-muted-foreground">Animes infravalorados que merecen mucha más atención.</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4">
                Descubrir <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AniméQué",
            description: "Recomendaciones de anime organizadas por género, estilo y popularidad.",
            url: "https://queanimever.lovable.app",
          }),
        }}
      />
    </div>
  );
}
