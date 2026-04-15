import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimeCard } from "@/components/AnimeCard";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedCard } from "@/components/AnimatedSection";

export const Route = createFileRoute("/joyas-ocultas")({
  head: () => ({
    meta: [
      { title: "Animes Poco Conocidos — Joyas Ocultas que Debes Ver | AniméQué" },
      { name: "description", content: "Descubre animes infravalorados y poco conocidos que merecen más atención. Joyas ocultas con historias increíbles que pocos conocen." },
      { property: "og:title", content: "Joyas Ocultas del Anime" },
      { property: "og:description", content: "Animes poco conocidos que merecen mucha más atención." },
    ],
  }),
  component: JoyasOcultasPage,
});

function JoyasOcultasPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="Estos animes no tienen la fama que merecen. Son obras brillantes que los verdaderos fans consideran imprescindibles.">
        💎 Joyas Ocultas — Animes Poco Conocidos
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnimatedCard><AnimeCard title="Ranking of Kings (Ousama Ranking)" genre="Fantasía / Aventura / Drama" color="story" synopsis="Bojji es un príncipe sordo, mudo y tan débil que no puede levantar una espada. Todos lo desprecian. Su único amigo es Kage, una pequeña sombra viviente. Juntos emprenden un viaje para demostrar que la verdadera fuerza no está en los músculos. Parece un cuento infantil pero esconde una historia profundamente madura." whyWatch="Te va a hacer llorar con un estilo de animación que parece para niños. Bojji es uno de los protagonistas más inspiradores del anime." audience="Para todos los públicos. Especialmente para quienes buscan historias de superación." strengths={["Estilo engañosamente simple", "Emociones arrolladoras", "Personajes profundos", "Giros brillantes"]} /></AnimatedCard>
        <AnimatedCard delay={0.1}><AnimeCard title="Odd Taxi" genre="Misterio / Thriller / Comedia" color="story" synopsis="Odokawa es un taxista morsa solitario involucrado en un caso de desaparición conectado con la yakuza, idols, un comediante y un policía corrupto. Parece tranquilo pero es un thriller noir donde cada detalle importa y todo está conectado." whyWatch="La serie más inteligentemente escrita del anime reciente. Cuando las piezas encajan en el final, quedarás en shock. Es Breaking Bad en 13 episodios con animales." audience="Fans de thrillers y misterios tipo Pulp Fiction." strengths={["Guión perfecto", "Todo está conectado", "13 episodios impecables", "Final revelador"]} /></AnimatedCard>
        <AnimatedCard delay={0.2}><AnimeCard title="Sonny Boy" genre="Ciencia ficción / Surrealismo / Drama" color="story" synopsis="Una clase entera desaparece junto con su escuela, flotando en un vacío interdimensional. Algunos desarrollan poderes. Cada dimensión tiene reglas imposibles. No hay respuestas fáciles. Cada episodio es una metáfora visual sobre la adolescencia y la vida adulta." whyWatch="Es arte puro. Si te gusta el cine de autor y las series que te dejan pensando días después, Sonny Boy es para ti." audience="Fans del anime experimental. Fans de Evangelion y Serial Experiments Lain." strengths={["Visualmente único", "Filosóficamente denso", "Sin precedentes", "12 episodios"]} /></AnimatedCard>
        <AnimatedCard delay={0.3}><AnimeCard title="Shouwa Genroku Rakugo Shinjuu" genre="Drama / Histórico / Romance" color="romance" synopsis="La historia trágica de dos artistas del rakugo a lo largo de décadas: su amistad, sus celos, su amor por el mismo arte y la misma mujer. Las actuaciones de rakugo son tan cautivadoras que olvidas que es animación." whyWatch="Es probablemente el drama más elegante del anime. Una experiencia cultural y emocional única." audience="Fans del drama adulto y la cultura japonesa." strengths={["Drama adulto excepcional", "Actuaciones hipnóticas", "Cultura japonesa", "Historia multigeneracional"]} /></AnimatedCard>
      </div>

      <AdSlot />

      <RelatedAnimes items={[
        { title: "Artículo: Joyas Ocultas en profundidad", desc: "Análisis detallado de estos animes", to: "/blog/animes-poco-conocidos", emoji: "📝" },
        { title: "Animes Cortos para Empezar", desc: "Más series que puedes ver en un fin de semana", to: "/animes-cortos", emoji: "⚡" },
        { title: "Animes por Género", desc: "Explora por romance, acción y más", to: "/generos", emoji: "🎯" },
      ]} />
    </div>
  );
}
