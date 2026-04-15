import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimeCard } from "@/components/AnimeCard";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Heart, Zap, Laugh, BookOpen } from "lucide-react";

export const Route = createFileRoute("/generos")({
  head: () => ({
    meta: [
      { title: "Animes por Género — Romance, Acción, Comedia | AniméQué" },
      { name: "description", content: "Descubre los mejores animes organizados por género: romance, acción, comedia y buena historia. Recomendaciones con sinopsis detalladas." },
      { property: "og:title", content: "Mejores Animes por Género — AniméQué" },
      { property: "og:description", content: "Romance, acción, comedia y más. Encuentra tu próximo anime favorito por género." },
    ],
  }),
  component: GenerosPage,
});

const genreNav = [
  { id: "romance", label: "Romance", icon: <Heart className="h-4 w-4" />, color: "text-genre-romance" },
  { id: "accion", label: "Acción", icon: <Zap className="h-4 w-4" />, color: "text-genre-action" },
  { id: "comedia", label: "Comedia", icon: <Laugh className="h-4 w-4" />, color: "text-genre-comedy" },
  { id: "buena-historia", label: "Buena Historia", icon: <BookOpen className="h-4 w-4" />, color: "text-genre-story" },
];

function GenerosPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="Explora nuestras recomendaciones organizadas por género. Cada anime incluye sinopsis, razones para verlo y puntos fuertes.">
        Animes por Género
      </SectionHeading>

      {/* Genre quick nav */}
      <AnimatedSection className="mb-12">
        <div className="flex flex-wrap gap-3">
          {genreNav.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-primary/30 hover:bg-secondary ${g.color}`}
            >
              {g.icon} {g.label}
            </a>
          ))}
        </div>
      </AnimatedSection>

      {/* ROMANCE */}
      <section className="mb-16" id="romance">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-genre-romance" />
            <h2 className="font-display text-2xl font-bold text-genre-romance">Romance</h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { delay: 0 },
            { delay: 0.1 },
            { delay: 0.2 },
          ].map((_, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              {i === 0 && (
                <AnimeCard
                  title="Blue Box"
                  genre="Romance / Deportes"
                  color="romance"
                  synopsis="Taiki Inomata es un estudiante de secundaria apasionado por el bádminton que entrena cada mañana en el gimnasio del instituto. Ahí conoce a Chinatsu Kano, una estrella del equipo femenino de baloncesto y su primer amor. Cuando circunstancias inesperadas llevan a Chinatsu a vivir bajo el mismo techo que Taiki, su vida cotidiana se transforma en una mezcla de momentos dulces, competitivos y emocionalmente profundos. Blue Box combina la tensión romántica adolescente con el deporte de una manera refrescante y auténtica, explorando los sueños, la autodisciplina y el amor juvenil con una delicadeza poco vista en el género."
                  whyWatch="Es una de las historias de romance más genuinas y emotivas de los últimos años. No recurre a clichés exagerados ni malentendidos artificiales, sino que construye la relación entre los protagonistas de forma orgánica y creíble."
                  audience="Ideal para quienes buscan un romance maduro, cálido y sin drama innecesario. Perfecto para fans del slice of life y deportes."
                  strengths={["Animación hermosa", "Desarrollo de personajes", "Química natural", "Ritmo deportivo"]}
                />
              )}
              {i === 1 && (
                <AnimeCard
                  title="Horimiya"
                  genre="Romance / Slice of Life"
                  color="romance"
                  synopsis="Kyoko Hori es una chica popular y sociable en el instituto que esconde una vida doméstica ocupada cuidando de su hermano menor. Izumi Miyamura es su compañero de clase, un chico tímido y con aspecto de nerd que resulta tener un lado completamente opuesto: piercings, tatuajes y una personalidad sorprendentemente cálida y directa. Cuando ambos descubren sus verdaderas facetas fuera del instituto, nace una conexión inesperada y profunda."
                  whyWatch="Es uno de los romances más completos y satisfactorios del anime. No se detiene en la confesión sino que muestra la relación creciendo. Los personajes se sienten reales."
                  audience="Para quienes quieren una historia de amor completa, desde el inicio hasta una relación consolidada. Fans del romance realista."
                  strengths={["Relación realista", "Humor natural", "Personajes secundarios memorables", "Sin relleno"]}
                />
              )}
              {i === 2 && (
                <AnimeCard
                  title="My Dress-Up Darling"
                  genre="Romance / Comedia"
                  color="romance"
                  synopsis="Wakana Gojo es un estudiante introvertido y talentoso que se dedica a la fabricación de muñecas hina. Su mundo cambia cuando Marin Kitagawa, la chica más popular y extrovertida del instituto y una apasionada del cosplay, descubre su habilidad para la costura y le pide que le haga trajes. Lo que comienza como una colaboración creativa se transforma gradualmente en una relación llena de momentos divertidos, sensuales y emocionalmente sinceros."
                  whyWatch="Combina comedia, romance y la cultura otaku de una manera fresca y sin prejuicios. La química entre los protagonistas es explosiva."
                  audience="Para fans del romance con humor, la cultura pop japonesa y personajes carismáticos."
                  strengths={["Protagonistas carismáticos", "Animación vibrante", "Cultura cosplay", "Humor + romance equilibrado"]}
                />
              )}
            </AnimatedCard>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* ACCIÓN */}
      <section className="mb-16" id="accion">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-genre-action" />
            <h2 className="font-display text-2xl font-bold text-genre-action">Acción</h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Gachiakuta" genre="Acción / Seinen" color="action" synopsis="En un mundo dividido entre una ciudad flotante utópica y un vertedero desolado debajo de ella, Rudo es un huérfano que vive en los márgenes de la sociedad. Cuando es injustamente acusado de un crimen y arrojado al abismo, descubre que el vertedero está lleno de criaturas monstruosas y de personas que han desarrollado poderes extraordinarios a partir de la basura desechada." whyWatch="Es fresco, rebelde y visualmente impactante. Rompe moldes estéticos con un estilo artístico que parece arte callejero en movimiento." audience="Para amantes de la acción visceral, el arte alternativo y las historias de lucha contra la injusticia." strengths={["Estilo visual único", "Worldbuilding original", "Acción intensa", "Crítica social"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="Chainsaw Man" genre="Acción / Horror / Seinen" color="action" synopsis="Denji es un joven miserable que vive aplastado por la deuda de su padre muerto, sobreviviendo como cazador de demonios junto a Pochita, un pequeño demonio motosierra que es su único amigo. Cuando es traicionado y asesinado, Pochita se fusiona con su cuerpo, transformándolo en el Hombre Motosierra, un híbrido humano-demonio con el poder de generar motosierras de cualquier parte de su cuerpo." whyWatch="No se parece a nada que hayas visto. Es crudo, sorprendente y emocionalmente devastador. MAPPA entregó una animación cinematográfica de otro nivel." audience="Para quienes buscan algo diferente, oscuro y sin miedo a romper reglas narrativas." strengths={["Animación de película", "Protagonista único", "Impredecible", "Banda sonora legendaria"]} /></AnimatedCard>
          <AnimatedCard delay={0.2}><AnimeCard title="Hell's Paradise (Jigokuraku)" genre="Acción / Aventura / Seinen" color="action" synopsis="Gabimaru 'El Vacío' es un ninja legendario considerado invencible, que ha sido capturado y condenado a muerte. Se le ofrece un trato: si viaja a una isla mítica y trae de vuelta el Elixir de la Vida para el shōgun, será perdonado. La isla resulta ser un paraíso mortal lleno de criaturas sobrenaturales y flores que devoran humanos." whyWatch="Combina la brutalidad de un seinen con una estética visual preciosa. La isla es un personaje en sí misma, llena de misterio y peligro." audience="Fans de Dororo, Vinland Saga y las historias de supervivencia con un toque sobrenatural." strengths={["Worldbuilding fascinante", "Peleas elegantes", "Personajes complejos", "Mitología japonesa"]} /></AnimatedCard>
        </div>
      </section>

      <AdSlot />

      {/* COMEDIA */}
      <section className="mb-16" id="comedia">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <Laugh className="h-6 w-6 text-genre-comedy" />
            <h2 className="font-display text-2xl font-bold text-genre-comedy">Comedia</h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Mashle: Magic and Muscles" genre="Comedia / Acción / Shōnen" color="comedy" synopsis="En un mundo donde todos pueden usar magia y el estatus social depende del poder mágico de cada persona, Mash Burnedead es un joven sin una pizca de magia. Lo compensa con una fuerza física absurdamente sobrehumana. Para proteger a su abuelo adoptivo, Mash se infiltra en la prestigiosa Academia de Magia Easton con un objetivo: convertirse en el Mesías Divino, usando solo sus puños." whyWatch="Te va a hacer reír en voz alta. La premisa es brillantemente simple y cada situación la exprime al máximo." audience="Fans de One Punch Man, Mob Psycho 100 y Harry Potter." strengths={["Humor constante", "Premisa brillante", "Peleas creativas", "Personajes entrañables"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="Spy x Family" genre="Comedia / Acción / Familia" color="comedy" synopsis="En un mundo de Guerra Fría ficticia, el espía más hábil del país necesita una familia falsa para su misión. Adopta a Anya, una niña que secretamente puede leer mentes, y se casa con Yor, secretamente una asesina profesional. Ninguno conoce los secretos de los otros, creando situaciones absurdas y divertidas." whyWatch="Es divertida, emocionante y sorprendentemente conmovedora. Funciona para todo público. Es la definición de anime feel-good." audience="Para absolutamente todos. Es el anime perfecto para ver en familia, con amigos o solo." strengths={["Para todo público", "Anya es icónica", "Mezcla perfecta de géneros", "Animación premium"]} /></AnimatedCard>
          <AnimatedCard delay={0.2}><AnimeCard title="Komi Can't Communicate" genre="Comedia / Romance / Slice of Life" color="comedy" synopsis="Shoko Komi es una estudiante considerada la persona más hermosa del instituto. La realidad es que sufre de un trastorno de comunicación severo. Su sueño secreto es hacer 100 amigos. Todo cambia cuando Hitohito Tadano, un chico ordinario, descubre su secreto y decide ayudarla." whyWatch="Trata la ansiedad social con mucho cariño y humor sin burlarse. Los momentos en que Komi logra pequeños avances son genuinamente emotivos." audience="Personas introvertidas, fans del slice of life y quienes buscan un anime cálido." strengths={["Representación de ansiedad social", "Humor wholesome", "Romance dulce", "Elenco diverso"]} /></AnimatedCard>
        </div>
      </section>

      <AdSlot />

      {/* BUENA HISTORIA */}
      <section className="mb-16" id="buena-historia">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-genre-story" />
            <h2 className="font-display text-2xl font-bold text-genre-story">Buena Historia</h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCard><AnimeCard title="Vinland Saga" genre="Drama / Histórico / Acción" color="story" synopsis="Thorfinn es hijo de uno de los guerreros vikingos más grandes. Cuando su padre es asesinado por el mercenario Askeladd, jura venganza y se une a la banda de su asesino. La primera temporada es una épica de acción y venganza. La segunda temporada es una profunda reflexión sobre la violencia, el perdón y la búsqueda de un mundo sin guerra." whyWatch="Es un anime que te transforma como persona. La evolución de Thorfinn es una de las mejores narrativas del medio." audience="Para quienes buscan anime con profundidad filosófica y desarrollo de personajes excepcional." strengths={["Desarrollo magistral", "Filosofía profunda", "Ambientación histórica", "Animación de primer nivel"]} /></AnimatedCard>
          <AnimatedCard delay={0.1}><AnimeCard title="Dororo" genre="Acción / Sobrenatural / Drama" color="story" synopsis="En el Japón feudal, un señor feudal sacrifica a su hijo recién nacido a 48 demonios. El bebé nace sin extremidades, sin piel, sin ojos ni oídos, pero sobrevive. El joven Hyakkimaru emprende un viaje para recuperar las partes de su cuerpo derrotando a los demonios, acompañado por Dororo, un pequeño ladrón huérfano." whyWatch="Es oscuro, bello y devastadoramente emotivo. Cada demonio derrotado le devuelve una parte de su humanidad, creando momentos de intensidad emocional abrumadora." audience="Fans del dark fantasy, historias de redención y anime con peso emocional." strengths={["Premisa original", "Emocionalmente devastador", "Acción fluida", "Relación entre protagonistas"]} /></AnimatedCard>
          <AnimatedCard delay={0.2}><AnimeCard title="Fullmetal Alchemist: Brotherhood" genre="Acción / Aventura / Fantasía" color="story" synopsis="Los hermanos Edward y Alphonse Elric intentan la alquimia humana prohibida para revivir a su madre y pagan un precio terrible. Buscan la legendaria Piedra Filosofal, descubriendo una conspiración que amenaza la existencia de su nación. Considerada la obra maestra absoluta del anime." whyWatch="Es el anime más completo jamás creado. Combina acción, humor, drama, política, filosofía y aventura sin perder el ritmo. Su final es universalmente aclamado." audience="Para absolutamente cualquier fan del anime, especialmente quienes buscan una obra completa con cierre satisfactorio." strengths={["Narrativa perfecta", "Sistema de poder coherente", "Elenco inmenso", "Final legendario"]} /></AnimatedCard>
        </div>
      </section>

      <RelatedAnimes items={[
        { title: "Top 7 Mejores Animes", desc: "Nuestra selección de los 7 animes imprescindibles", to: "/top-7", emoji: "🏆" },
        { title: "Animes Cortos para Empezar", desc: "Series perfectas si tienes poco tiempo", to: "/animes-cortos", emoji: "⚡" },
        { title: "Joyas Ocultas", desc: "Animes poco conocidos que merecen atención", to: "/joyas-ocultas", emoji: "💎" },
      ]} />
    </div>
  );
}
