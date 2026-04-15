import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimeCard } from "@/components/AnimeCard";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Route = createFileRoute("/animes-tipo")({
  head: () => ({
    meta: [
      { title: "Animes parecidos a Attack on Titan, Naruto y Death Note | AniméQué" },
      { name: "description", content: "¿Buscas animes parecidos a Attack on Titan, Naruto o Death Note? Descubre recomendaciones similares con sinopsis y opiniones." },
      { property: "og:title", content: "Animes Tipo... — Encuentra animes similares a tus favoritos" },
      { property: "og:description", content: "Recomendaciones de animes parecidos a los más populares." },
    ],
  }),
  component: AnimesTipoPage,
});

function AnimesTipoPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="¿Te encantó un anime y quieres más del mismo estilo? Aquí encontrarás recomendaciones perfectas basadas en tus favoritos.">
        Animes Tipo...
      </SectionHeading>

      <section className="mb-16">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">⚔️ Animes tipo Attack on Titan</h2>
          <p className="text-muted-foreground mb-6">Acción brutal, historia intensa y giros inesperados.</p>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Kabaneri of the Iron Fortress" genre="Acción / Post-apocalíptico" color="action" synopsis="En un mundo donde criaturas no-muertas con corazones de hierro amenazan a la humanidad, los supervivientes viajan en trenes blindados. Ikoma se convierte en un kabaneri, un híbrido con fuerza sobrehumana. Del mismo estudio y director que AoT." whyWatch="Si Attack on Titan te dejó con ganas de más acción desesperada contra monstruos, Kabaneri te dará exactamente eso." audience="Fans de AoT, zombies, steampunk y acción post-apocalíptica." strengths={["Mismo estudio que AoT", "Acción frenética", "Estética steampunk", "Tensión constante"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="86 (Eighty-Six)" genre="Ciencia ficción / Drama / Mecha" color="action" synopsis="La República presume de luchar sin bajas humanas usando 'drones'. En realidad, los '86', una etnia marginada, son obligados a pilotar estos drones como soldados desechables. Aborda racismo, discriminación y el costo humano de la guerra." whyWatch="Combina la escala épica y los temas sociales de AoT con mecha y ciencia ficción. Los momentos emocionales golpean con fuerza." audience="Fans de AoT que buscan temas maduros y drama militar." strengths={["Temas profundos", "Animación impecable", "Drama devastador", "Worldbuilding rico"]} /></AnimatedCard>
          <AnimatedCard delay={0.2}><AnimeCard title="Claymore" genre="Dark Fantasy / Acción" color="action" synopsis="En un mundo medieval plagado de demonios, las Claymores son guerreras mitad humanas creadas para combatirlos. Clare, una Claymore de rango bajo, viaja exterminando demonios con un pasado traumático y una sed de venganza." whyWatch="Si la oscuridad de AoT te atrapó, Claymore te entregará eso multiplicado. Protagonistas femeninas fuertes y enemigos aterradores." audience="Fans del dark fantasy, Berserk y AoT." strengths={["Dark fantasy puro", "Protagonista femenina fuerte", "Villanos aterradores", "Sin censura"]} /></AnimatedCard>
        </div>
      </section>

      <AdSlot />

      <section className="mb-16">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">🍥 Animes tipo Naruto</h2>
          <p className="text-muted-foreground mb-6">Aventura épica, evolución del personaje y lazos de amistad.</p>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Black Clover" genre="Acción / Fantasía / Shōnen" color="action" synopsis="Asta nace sin magia en un mundo donde la magia lo es todo. Su rival Yuno es un prodigio mágico. Ambos persiguen el sueño de ser el Rey Mago. Black Clover es el sucesor espiritual directo de Naruto." whyWatch="Si amaste Naruto por su espíritu de superación, Black Clover es tu siguiente paso natural." audience="Fans directos de Naruto, Fairy Tail y My Hero Academia." strengths={["Espíritu shōnen puro", "Peleas épicas", "Gran elenco", "Mejora constante"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="My Hero Academia" genre="Acción / Superhéroes / Shōnen" color="action" synopsis="Izuku Midoriya nace sin poderes. All Might le transmite su poder legendario. En la Academia U.A. se enfrenta a villanos cada vez más poderosos. Reinventó el género de superhéroes con poderes creativísimos." whyWatch="Si Naruto te enseñó sobre perseverancia, My Hero Academia te mostrará lo que significa ser un héroe de verdad." audience="Fans de Naruto, superhéroes y shōnen en general." strengths={["Poderes creativos", "Desarrollo emocional", "Animación BONES", "Villanos icónicos"]} /></AnimatedCard>
        </div>
      </section>

      <AdSlot />

      <section className="mb-16">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">🧠 Animes tipo Death Note</h2>
          <p className="text-muted-foreground mb-6">Estrategia, mente maestra y batallas psicológicas.</p>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Code Geass" genre="Mecha / Estrategia / Drama" color="story" synopsis="Lelouch obtiene el Geass, un poder que permite dar una orden absoluta a cualquier persona. Se convierte en Zero, un líder revolucionario que desafía al imperio más poderoso del mundo usando estrategia e inteligencia." whyWatch="Si Death Note te fascinó por las batallas de ingenio, Code Geass te va a atrapar. Tiene un final considerado uno de los mejores de todo el anime." audience="Fans de Death Note, estrategia y protagonistas antihéroe." strengths={["Protagonista genio", "Final legendario", "Estrategia brillante", "Drama político"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="Monster" genre="Thriller / Psicológico / Drama" color="story" synopsis="El Dr. Tenma salva la vida de un niño que se convierte en el asesino en serie más peligroso del mundo. Consumido por la culpa, abandona su vida para detenerlo. Un thriller psicológico sin poderes sobrenaturales: solo un juego del gato y el ratón puro." whyWatch="Si Death Note te atrapó por su tensión intelectual, Monster la lleva a otro nivel con realismo escalofriante." audience="Fans del thriller psicológico y series como Mindhunter." strengths={["Mejor villano del anime", "Realismo escalofriante", "Thriller puro", "74 episodios sin relleno"]} /></AnimatedCard>
          <AnimatedCard delay={0.2}><AnimeCard title="Promised Neverland (T1)" genre="Thriller / Misterio" color="story" synopsis="Emma, Norman y Ray descubren que su orfanato es una granja donde crían niños como alimento para demonios. Deben usar su inteligencia para planificar una fuga imposible. Un thriller de escape perfecto." whyWatch="Es Death Note en un orfanato. La tensión es insoportable. IMPORTANTE: solo la temporada 1." audience="Fans de Death Note y thrillers de escape." strengths={["Tensión perfecta", "Protagonistas geniales", "Villana memorable", "12 episodios impecables"]} /></AnimatedCard>
        </div>
      </section>

      <RelatedAnimes items={[
        { title: "Top 7 Mejores Animes", desc: "Nuestra lista definitiva de imprescindibles", to: "/top-7", emoji: "🏆" },
        { title: "Animes por Género", desc: "Explora por romance, acción, comedia y más", to: "/generos", emoji: "🎯" },
        { title: "Artículo: Animes parecidos a AoT", desc: "Análisis profundo con más recomendaciones", to: "/blog/animes-parecidos-attack-on-titan", emoji: "📝" },
      ]} />
    </div>
  );
}
