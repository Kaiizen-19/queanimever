import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug);
    return {
      meta: [
        { title: article?.metaTitle || "Artículo — AniméQué" },
        { name: "description", content: article?.metaDesc || "" },
        { property: "og:title", content: article?.metaTitle || "" },
        { property: "og:description", content: article?.metaDesc || "" },
      ],
    };
  },
  component: BlogArticlePage,
  notFoundComponent: () => (
    <div className="section-container py-16 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Artículo no encontrado</h1>
      <Link to="/blog" className="text-primary mt-4 inline-block">← Volver al blog</Link>
    </div>
  ),
});

interface ArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  category: string;
  readTime: string;
  date: string;
  emoji: string;
  content: Array<{ type: "h2" | "h3" | "p" | "list"; text: string; items?: string[] }>;
  related: Array<{ title: string; desc: string; to: string; emoji: string }>;
}

function getArticle(slug: string): ArticleData | undefined {
  return articleDatabase[slug];
}

const articleDatabase: Record<string, ArticleData> = {
  "animes-parecidos-attack-on-titan": {
    slug: "animes-parecidos-attack-on-titan",
    title: "5 Animes parecidos a Attack on Titan que debes ver",
    metaTitle: "5 Animes parecidos a Attack on Titan — Recomendaciones 2026 | AniméQué",
    metaDesc: "¿Buscas animes parecidos a Attack on Titan? Descubre 5 series con acción brutal, giros épicos y narrativas intensas como Shingeki no Kyojin.",
    category: "Similares",
    readTime: "12 min",
    date: "15 Mar 2026",
    emoji: "⚔️",
    content: [
      { type: "p", text: "Attack on Titan (Shingeki no Kyojin) no es solo un anime: es un fenómeno cultural que redefinió lo que la animación japonesa puede lograr. Con su narrativa impecablemente planificada desde el primer capítulo, sus giros argumentales devastadores y su exploración profunda de temas como la libertad, la guerra y la naturaleza humana, AoT dejó un vacío enorme en millones de espectadores cuando llegó a su final." },
      { type: "p", text: "Si eres uno de esos fans que terminó Attack on Titan y se preguntó '¿y ahora qué veo?', este artículo es para ti. Hemos seleccionado 5 animes que comparten la esencia de lo que hizo grande a AoT: acción intensa, worldbuilding profundo, personajes complejos y giros que te dejan sin aliento." },
      { type: "h2", text: "1. Kabaneri of the Iron Fortress — La conexión más directa" },
      { type: "p", text: "No es casualidad que Kabaneri se sienta tan familiar: fue creado por el mismo estudio (WIT Studio) y comparte director con las primeras temporadas de Attack on Titan. La premisa es similar pero con un giro steampunk: en lugar de titanes, la humanidad enfrenta a los kabane, criaturas no-muertas con corazones de hierro que solo pueden ser destruidos perforando su corazón blindado." },
      { type: "p", text: "Los supervivientes viajan en trenes blindados entre estaciones fortificadas, creando una atmósfera de tensión constante similar a la vida dentro de las murallas. Ikoma, el protagonista, se convierte en un kabaneri (medio humano, medio kabane), un concepto que recuerda directamente a la dualidad de Eren Jaeger. Las secuencias de acción en los trenes son espectaculares y la animación mantiene el nivel que esperarías del equipo detrás de AoT." },
      { type: "p", text: "Lo que realmente conecta ambas series es la sensación de desesperación. Los personajes luchan constantemente contra enemigos que los superan en número y fuerza, y la muerte puede llegar en cualquier momento. Si Attack on Titan te enganchó por esa tensión constante de 'nadie está a salvo', Kabaneri te dará exactamente eso." },
      { type: "h2", text: "2. 86 (Eighty-Six) — Temas profundos con acción mecha" },
      { type: "p", text: "86 es probablemente el anime que más se acerca a la profundidad temática de Attack on Titan en los últimos años. La premisa es devastadoramente relevante: la República de San Magnolia presume de luchar su guerra sin bajas humanas, usando 'drones autónomos'. La realidad es que los '86', ciudadanos de una etnia marginada, son obligados a pilotar estos drones como soldados desechables, invisibles para la sociedad que los explota." },
      { type: "p", text: "Al igual que AoT explora el ciclo de odio entre eldians y marleyanos, 86 disecciona el racismo sistémico, la propaganda y el costo humano de la indiferencia. Los paralelos son sorprendentes: ambas series te hacen cuestionar quiénes son realmente los 'monstruos' en sus respectivos mundos. La animación de A-1 Pictures es sobresaliente, especialmente en las secuencias de combate mecha que rivalizan con cualquier cosa que MAPPA haya producido." },
      { type: "h2", text: "3. Vinland Saga — Desarrollo de personajes sin igual" },
      { type: "p", text: "Si lo que más valoraste de Attack on Titan fue la evolución de Eren Jaeger, de niño vengativo a... bueno, ya sabes, Vinland Saga te va a fascinar. Thorfinn Karlsefni atraviesa una transformación igualmente radical pero en dirección opuesta: de un guerrero vikingo consumido por la venganza a un hombre que busca un mundo sin violencia." },
      { type: "p", text: "La primera temporada de Vinland Saga es pura épica vikinga: batallas brutales, política medieval, traiciones y un antagonista (Askeladd) que rivaliza con cualquier personaje de AoT en complejidad. La segunda temporada da un giro radical, convirtiendo la serie en una meditación filosófica sobre la violencia y el perdón que es tan audaz como la revelación de Marley en AoT. Ambas series comparten esa valentía narrativa de reinventarse completamente sin perder su esencia." },
      { type: "h2", text: "4. Claymore — Dark fantasy brutal y sin censura" },
      { type: "p", text: "Claymore es el dark fantasy que los fans de Attack on Titan necesitan si quieren algo más oscuro y visceral. En un mundo medieval plagado de yoma (demonios caníbales), las Claymores son guerreras mitad humanas mitad yoma creadas para combatirlos. Como los soldados del Cuerpo de Exploración, estas guerreras sacrifican su humanidad para proteger a quienes las desprecian." },
      { type: "p", text: "La serie comparte con AoT la atmósfera de peligro constante, la jerarquía de poder entre los personajes y la sensación de que la organización que los protege esconde secretos terribles. Clare, la protagonista, es una guerrera de rango bajo cuya determinación recuerda al Eren de las primeras temporadas, y los Despertar (Claymores que pierden el control) son tan aterradores como cualquier titán." },
      { type: "h2", text: "5. Code Geass — Estrategia y moral gris" },
      { type: "p", text: "Aunque a primera vista Code Geass parece muy diferente de Attack on Titan (tiene mechas, un estilo visual más colorido y un tono que mezcla seriedad con momentos más ligeros), ambas series comparten algo fundamental: un protagonista que comienza luchando por la libertad y gradualmente cruza líneas morales cada vez más oscuras en nombre de su causa." },
      { type: "p", text: "Lelouch vi Britannia es un genio estratega que usa un poder sobrenatural (el Geass) para liderar una revolución contra un imperio colonial. Como Eren, comienza como un héroe simpático cuyas motivaciones entendemos, y gradualmente se transforma en algo mucho más complejo y moralmente ambiguo. El final de Code Geass, como el de AoT, es polémico pero brillantemente coherente con todo lo que vino antes." },
      { type: "h2", text: "Conclusión: ¿Cuál elegir primero?" },
      { type: "p", text: "Si quieres algo que se sienta inmediatamente familiar, empieza por Kabaneri. Si buscas profundidad temática comparable, 86 es tu mejor opción. Si te importa el desarrollo de personajes por encima de todo, Vinland Saga es insuperable. Para dark fantasy puro, Claymore. Y si echas de menos las batallas de ingenio y los dilemas morales, Code Geass es imprescindible." },
      { type: "list", text: "Resumen rápido:", items: [
        "Kabaneri — La más parecida visualmente, mismo estudio y director",
        "86 — La más profunda temáticamente, aborda racismo y guerra",
        "Vinland Saga — El mejor desarrollo de personajes del anime",
        "Claymore — Dark fantasy brutal con protagonista femenina fuerte",
        "Code Geass — Estrategia, moral gris y final legendario",
      ]},
    ],
    related: [
      { title: "Animes tipo Attack on Titan", desc: "Más recomendaciones similares", to: "/animes-tipo", emoji: "⚔️" },
      { title: "Top 7 Mejores Animes", desc: "Nuestra lista de imprescindibles", to: "/top-7", emoji: "🏆" },
      { title: "Animes románticos recomendados", desc: "Cambia de género con las mejores historias de amor", to: "/blog/animes-romanticos-recomendados", emoji: "💕" },
    ],
  },
  "animes-romanticos-recomendados": {
    slug: "animes-romanticos-recomendados",
    title: "Los mejores animes románticos recomendados",
    metaTitle: "Los Mejores Animes Románticos Recomendados 2026 | AniméQué",
    metaDesc: "Descubre los mejores animes de romance: Blue Box, Horimiya, My Dress-Up Darling y más. Guía completa con sinopsis y opiniones.",
    category: "Recomendaciones",
    readTime: "10 min",
    date: "28 Feb 2026",
    emoji: "💕",
    content: [
      { type: "p", text: "El romance en el anime tiene algo especial que las series de acción real raramente logran capturar: la capacidad de transmitir emociones tan puras y genuinas que te hacen sentir mariposas en el estómago como si tuvieras 15 años otra vez. Desde miradas fugaces cargadas de significado hasta confesiones que llevan construyéndose durante episodios, el anime romántico es un género que, cuando se hace bien, puede ser una de las experiencias más gratificantes del medio." },
      { type: "p", text: "En esta guía hemos seleccionado los animes románticos que consideramos imprescindibles. No son solo 'buenos romances': son series con personajes memorables, humor natural, momentos que te hacen sonreír como idiota y, en algunos casos, historias que te dejan pensando durante días." },
      { type: "h2", text: "Blue Box — El romance más genuino de los últimos años" },
      { type: "p", text: "Blue Box es la definición de lo que un romance debería ser: orgánico, respetuoso y emocionalmente honesto. Taiki Inomata entrena bádminton cada mañana y comparte el gimnasio con Chinatsu Kano, una jugadora de baloncesto que admira y de la que se enamora gradualmente. Cuando las circunstancias los llevan a vivir bajo el mismo techo, la serie se convierte en un retrato bellísimo del primer amor." },
      { type: "p", text: "Lo que distingue a Blue Box de otros romances es su naturalidad. No hay malentendidos artificiales, no hay triángulos amorosos forzados, no hay momentos de fan service gratuito. La relación entre Taiki y Chinatsu se construye ladrillo a ladrillo, con silencios incómodos, miradas robadas y pequeños gestos que hablan más que cualquier confesión grandilocuente. La combinación con deportes añade un elemento de superación personal que eleva la historia." },
      { type: "h2", text: "Horimiya — La relación que todos queremos ver" },
      { type: "p", text: "Horimiya es especial porque va más allá del punto donde la mayoría de romances se detienen. No es solo la historia de cómo dos personas se enamoran: es la historia de una relación real que evoluciona, con convivencia, discusiones, celos sanos y crecimiento mutuo. Hori y Miyamura se complementan perfectamente: ella es sociable pero esconde una vida doméstica agotadora; él parece tímido pero tiene piercings, tatuajes y una personalidad directa." },
      { type: "p", text: "El anime condensa el manga de manera eficiente, y aunque algunos fans del manga critican el ritmo, la experiencia animada es increíblemente satisfactoria. Los personajes secundarios son memorables (Toru Ishikawa y Yuki Yoshikawa merecen su propio anime), y la serie tiene un sentido del humor natural que hace que cada episodio sea un placer." },
      { type: "h2", text: "My Dress-Up Darling — Química explosiva" },
      { type: "p", text: "Si buscas un romance con energía alta, personajes carismáticos y una celebración de la cultura otaku, My Dress-Up Darling es tu anime. Gojo es un artesano de muñecas introvertido; Marin es una cosplayer extrovertida y desinhibida. Son polos opuestos que se atraen magnéticamente, y cada interacción entre ellos chispea de química." },
      { type: "p", text: "La serie destaca por su representación positiva de los hobbies otaku. No se burla del cosplay ni del anime: los celebra. Marin ama lo que ama sin disculparse, y Gojo encuentra en su pasión por las muñecas una conexión con el mundo del cosplay. La animación de CloverWorks es vibrante y expresiva, capturando perfectamente las reacciones exageradas y los momentos íntimos." },
      { type: "h2", text: "Toradora! — El clásico moderno del romance anime" },
      { type: "p", text: "Ninguna lista de romances anime estaría completa sin Toradora!, considerada por muchos como la cumbre del género. Ryuuji Takasu parece un delincuente pero es un estudiante amable y hogareño; Taiga Aisaka parece una muñeca adorable pero tiene un temperamento feroz. Cuando descubren que cada uno está enamorado del mejor amigo del otro, forman una alianza para ayudarse mutuamente." },
      { type: "p", text: "Lo brillante de Toradora! es cómo desmonta gradualmente su propia premisa. Lo que comienza como una comedia romántica predecible se transforma en un drama emocional profundo sobre la identidad, las expectativas familiares y el miedo a ser vulnerable. El arco final es devastadoramente emotivo." },
      { type: "h2", text: "Your Lie in April — La belleza del dolor" },
      { type: "p", text: "Si estás dispuesto a llorar (y hablamos de llorar de verdad), Your Lie in April es una experiencia transformadora. Kousei Arima era un prodigio del piano que perdió la capacidad de escuchar su propia música tras la muerte de su madre. Kaori Miyazono, una violinista libre e impredecible, irrumpe en su vida con la misión de devolverle la música y, con ella, las ganas de vivir." },
      { type: "p", text: "La serie es visualmente deslumbrante, con secuencias musicales que combinan la animación con interpretaciones reales de piezas clásicas. Pero lo que realmente la eleva es su capacidad de capturar cómo el arte puede ser tanto una fuente de dolor como de sanación. Es un anime que habla de la pérdida, el arrepentimiento y la belleza de los momentos efímeros." },
      { type: "h2", text: "¿Cuál elegir según tu estado de ánimo?" },
      { type: "list", text: "Guía rápida:", items: [
        "Blue Box — Si quieres algo dulce, calmado y genuino",
        "Horimiya — Si quieres ver una relación evolucionar de verdad",
        "My Dress-Up Darling — Si quieres comedia, energía y cultura otaku",
        "Toradora! — Si quieres el clásico definitivo con drama emocional",
        "Your Lie in April — Si estás preparado para una montaña rusa emocional",
      ]},
    ],
    related: [
      { title: "Animes por Género", desc: "Explora romance y más géneros", to: "/generos", emoji: "❤️" },
      { title: "Animes poco conocidos", desc: "Joyas ocultas que debes descubrir", to: "/blog/animes-poco-conocidos", emoji: "💎" },
      { title: "Animes parecidos a AoT", desc: "Cambia de tono con acción brutal", to: "/blog/animes-parecidos-attack-on-titan", emoji: "⚔️" },
    ],
  },
  "animes-poco-conocidos": {
    slug: "animes-poco-conocidos",
    title: "Animes poco conocidos que debes ver — Joyas ocultas del anime",
    metaTitle: "Animes Poco Conocidos que Debes Ver — Joyas Ocultas 2026 | AniméQué",
    metaDesc: "Descubre animes infravalorados que pocos conocen pero que son obras maestras: Ranking of Kings, Odd Taxi, Sonny Boy y más.",
    category: "Descubrimiento",
    readTime: "9 min",
    date: "20 Ene 2026",
    emoji: "💎",
    content: [
      { type: "p", text: "En el inmenso mundo del anime, las series más populares (Naruto, Dragon Ball, Attack on Titan) acaparan toda la atención. Pero debajo de la superficie hay decenas de obras maestras que, por falta de marketing, un estilo visual diferente o simplemente mala suerte en su fecha de emisión, nunca recibieron la audiencia que merecían. Estas son las joyas ocultas del anime." },
      { type: "p", text: "Hemos seleccionado animes que no solo son 'buenos para lo desconocidos que son': son genuinamente excepcionales por méritos propios. Si los conocieras, probablemente estarían en tu top 10." },
      { type: "h2", text: "Ranking of Kings (Ousama Ranking) — No juzgues por las apariencias" },
      { type: "p", text: "El estilo visual de Ranking of Kings parece sacado de un cuento para niños. Y ese es exactamente su truco más brillante. Detrás de esa animación engañosamente simple se esconde una de las historias más maduras, emotivas y sorprendentes del anime reciente." },
      { type: "p", text: "Bojji es un príncipe sordo, mudo y tan débil que no puede levantar una espada de niño. Todos lo desprecian. Su único amigo es Kage, una pequeña sombra viviente. Juntos emprenden un viaje para demostrar que la verdadera fuerza no viene de los músculos. Cada personaje que parece un villano tiene motivaciones comprensibles, y los giros narrativos son genuinamente sorprendentes. Ranking of Kings te hará llorar más que cualquier anime 'serio' que hayas visto." },
      { type: "h2", text: "Odd Taxi — Breaking Bad en 13 episodios con animales" },
      { type: "p", text: "Odd Taxi parece, a primera vista, un anime tranquilo sobre un taxista morsa malhumorado. No podrías estar más equivocado. Es un thriller noir brillantemente construido donde cada conversación casual contiene pistas, cada personaje tiene su propia subtrama y todas las piezas encajan en un final que te deja en shock." },
      { type: "p", text: "Odokawa, el taxista morsa, se ve involucrado en un caso de desaparición de una chica que tiene conexiones con la yakuza, un grupo de idols aspirantes, un comediante desesperado y un policía corrupto. La genialidad de Odd Taxi es que todo está conectado de maneras que solo se revelan gradualmente. Es como Pulp Fiction en formato anime: narrativas entrelazadas que convergen en un clímax devastador." },
      { type: "h2", text: "Sonny Boy — Arte puro en formato anime" },
      { type: "p", text: "Sonny Boy no es para todos, y eso es exactamente lo que lo hace especial. Una clase entera de estudiantes desaparece, flotando en un vacío interdimensional. Algunos desarrollan poderes. Cada dimensión tiene sus propias reglas físicas imposibles. No hay explicaciones fáciles, no hay un villano claro, y cada episodio es una metáfora visual sobre la adolescencia y el paso a la vida adulta." },
      { type: "p", text: "Es el equivalente anime del cine de arte. Si te gustaron Serial Experiments Lain o Evangelion, Sonny Boy es tu siguiente paso. Su estilo visual minimalista, su narrativa surrealista y su banda sonora experimental crean una experiencia única que no encontrarás en ningún otro anime." },
      { type: "h2", text: "Shouwa Genroku Rakugo Shinjuu — El drama más elegante del anime" },
      { type: "p", text: "Es probablemente el anime más adulto y sofisticado que existe, y casi nadie lo ha visto. Rakugo Shinjuu cuenta la historia de dos artistas del rakugo (un arte narrativo tradicional japonés) a lo largo de décadas: su amistad, sus celos, su amor por el mismo arte y la misma mujer, y cómo la tragedia los marca para siempre." },
      { type: "p", text: "Lo más impresionante es que las actuaciones de rakugo dentro del anime son tan hipnóticas que olvidas que estás viendo animación. No necesitas saber absolutamente nada sobre rakugo para quedarte completamente atrapado. Es una historia sobre la pasión, la obsesión y el legado artístico que trasciende cualquier género o demografía." },
      { type: "h2", text: "¿Por qué estas joyas pasan desapercibidas?" },
      { type: "p", text: "La industria del anime favorece los géneros populares: shōnen de acción, isekai y romance escolar. Las series que no encajan en estas categorías reciben menos marketing, menos memes en redes sociales y menos recomendaciones en plataformas de streaming. Pero precisamente por eso descubrir estas joyas es tan gratificante: cuando las encuentras, sientes que tienes un secreto que quieres compartir con todo el mundo." },
      { type: "list", text: "Empieza por aquí:", items: [
        "Ranking of Kings — Si quieres llorar con un estilo visual adorable",
        "Odd Taxi — Si quieres un thriller que te explote la cabeza",
        "Sonny Boy — Si quieres arte experimental y filosófico",
        "Rakugo Shinjuu — Si quieres drama adulto y sofisticado",
      ]},
    ],
    related: [
      { title: "Joyas Ocultas — Lista completa", desc: "Todas nuestras recomendaciones de animes desconocidos", to: "/joyas-ocultas", emoji: "💎" },
      { title: "Animes románticos recomendados", desc: "Las mejores historias de amor del anime", to: "/blog/animes-romanticos-recomendados", emoji: "💕" },
      { title: "Top 7 Mejores Animes", desc: "Los imprescindibles de todos los tiempos", to: "/top-7", emoji: "🏆" },
    ],
  },
};

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="section-container py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
        <p className="text-muted-foreground mb-6">Este artículo aún no está disponible. ¡Pronto lo publicaremos!</p>
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium">
          <ArrowLeft className="h-4 w-4" /> Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <article className="section-container py-16">
      <AnimatedSection>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Volver al blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            <Tag className="h-3 w-3" /> {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {article.readTime} de lectura
          </span>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
          {article.title}
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent mb-8" />
      </AnimatedSection>

      <AdSlot />

      <div className="max-w-3xl">
        {article.content.map((block, i) => {
          if (block.type === "h2") {
            return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{block.text}</h2>;
          }
          if (block.type === "h3") {
            return <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{block.text}</h3>;
          }
          if (block.type === "list") {
            return (
              <div key={i} className="mt-6 mb-6">
                <p className="font-display font-semibold text-foreground mb-3">{block.text}</p>
                <ul className="space-y-2">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-secondary-foreground leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return <p key={i} className="text-secondary-foreground leading-relaxed mb-4">{block.text}</p>;
        })}
      </div>

      <AdSlot />

      <RelatedAnimes items={article.related} title="Si te gustó este artículo, mira también..." />
    </article>
  );
}
