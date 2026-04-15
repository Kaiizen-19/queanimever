import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimeCard } from "@/components/AnimeCard";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedCard } from "@/components/AnimatedSection";

export const Route = createFileRoute("/animes-cortos")({
  head: () => ({
    meta: [
      { title: "Animes Cortos para Empezar — Menos de 24 Episodios | AniméQué" },
      { name: "description", content: "Los mejores animes cortos para principiantes. Series completas de 12 a 24 episodios perfectas si tienes poco tiempo o eres nuevo en el anime." },
      { property: "og:title", content: "Animes Cortos para Empezar" },
      { property: "og:description", content: "Series completas y cortas perfectas para principiantes." },
    ],
  }),
  component: AnimeCortosPage,
});

function AnimeCortosPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="¿Poco tiempo? ¿Nuevo en el anime? Estas series se completan en un fin de semana y te dejarán enganchado para siempre.">
        ⚡ Animes Cortos para Empezar
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnimatedCard><AnimeCard title="Erased (Boku dake ga Inai Machi)" genre="Thriller / Misterio — 12 episodios" color="story" synopsis="Satoru tiene un poder que lo envía al pasado antes de tragedias. Cuando su madre es asesinada, viaja 18 años atrás y debe salvar a una compañera de clase para cambiar el futuro. Un thriller emocional que combina misterio y viaje en el tiempo." whyWatch="12 episodios perfectos de tensión y emoción. El anime perfecto para un fin de semana." audience="Fans del thriller y el misterio. Principiantes que quieren algo corto e intenso." strengths={["12 episodios perfectos", "Thriller emocional", "Viaje en el tiempo", "Final satisfactorio"]} /></AnimatedCard>
        <AnimatedCard delay={0.1}><AnimeCard title="Death Parade" genre="Psicológico / Drama — 12 episodios" color="story" synopsis="Cuando dos personas mueren, llegan a un bar donde deben jugar un juego mortal que revela sus verdaderas naturalezas. Un árbitro decide si sus almas son reencarnadas o enviadas al vacío. Cada episodio explora la moralidad humana." whyWatch="Filosóficamente profundo pero accesible. El opening es engañosamente alegre y contrasta brillantemente con el tono." audience="Fans de Black Mirror y antologías filosóficas." strengths={["Cada episodio es una joya", "Filosofía accesible", "Opening icónico", "Personajes memorables"]} /></AnimatedCard>
        <AnimatedCard delay={0.2}><AnimeCard title="Angel Beats!" genre="Acción / Comedia / Drama — 13 episodios" color="comedy" synopsis="Otonashi despierta muerto en un purgatorio con forma de instituto. Un grupo de jóvenes lucha contra las reglas del más allá. Lo que empieza como comedia de acción se transforma en un drama profundamente emotivo sobre aceptar la muerte." whyWatch="Te hará reír a carcajadas y llorar, a veces en el mismo episodio. El final es devastador." audience="Para quienes quieren una montaña rusa emocional en 13 episodios." strengths={["Montaña rusa emocional", "Humor genial", "Música increíble", "Final devastador"]} /></AnimatedCard>
        <AnimatedCard delay={0.3}><AnimeCard title="Mob Psycho 100" genre="Acción / Comedia / Sobrenatural — 37 eps" color="comedy" synopsis="Mob tiene poderes psíquicos abrumadores que reprime. Trabaja para Reigen, un 'médium' charlatán pero sabio. La serie explora que el verdadero crecimiento viene de las relaciones humanas, no de poderes extraordinarios." whyWatch="Del creador de One Punch Man pero con más corazón. La animación de BONES es la más creativa del anime." audience="Fans de One Punch Man, comedia con profundidad y animación experimental." strengths={["Animación revolucionaria", "Mensaje profundo", "Humor brillante", "Reigen es perfecto"]} /></AnimatedCard>
      </div>

      <AdSlot />

      <RelatedAnimes items={[
        { title: "Top 7 Mejores Animes", desc: "Los animes imprescindibles de todos los tiempos", to: "/top-7", emoji: "🏆" },
        { title: "Joyas Ocultas", desc: "Animes poco conocidos que merecen atención", to: "/joyas-ocultas", emoji: "💎" },
        { title: "Guía para principiantes", desc: "Todo lo que necesitas saber del anime", to: "/faq", emoji: "❓" },
      ]} />
    </div>
  );
}
