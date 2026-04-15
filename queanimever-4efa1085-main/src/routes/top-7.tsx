import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimeCard } from "@/components/AnimeCard";
import { AdSlot } from "@/components/AdSlot";
import { RelatedAnimes } from "@/components/RelatedAnimes";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Route = createFileRoute("/top-7")({
  head: () => ({
    meta: [
      { title: "Top 7 Mejores Animes Recomendados 2026 | AniméQué" },
      { name: "description", content: "Los 7 mejores animes que todo el mundo debería ver: Naruto, Attack on Titan, Jujutsu Kaisen y más. Con sinopsis, opiniones y por qué verlos." },
      { property: "og:title", content: "Top 7 Mejores Animes Recomendados" },
      { property: "og:description", content: "La lista definitiva de animes imprescindibles." },
    ],
  }),
  component: Top7Page,
});

function Top7Page() {
  const animes = [
    { title: "1. Naruto / Naruto Shippūden", genre: "Shōnen / Aventura", color: "action" as const, synopsis: "Naruto Uzumaki es un joven ninja huérfano que lleva sellado dentro de sí al Zorro de Nueve Colas. Rechazado por todos, su sueño es convertirse en Hokage. Su camino ninja lo lleva a formar el Equipo 7 junto a Sasuke y Sakura. Lo que comienza como superación se transforma en una épica sobre la guerra, la paz y los lazos humanos.", whyWatch: "Es más que un anime: es una experiencia formativa. Los arcos de Pain, la Guerra Ninja y la relación Naruto-Sasuke son momentos que marcan tu vida.", audience: "Para todos. Es el punto de entrada perfecto al anime.", strengths: ["Desarrollo épico", "Peleas icónicas", "Banda sonora legendaria", "Temas universales"] },
    { title: "2. Tokyo Revengers", genre: "Acción / Drama / Viaje en el tiempo", color: "action" as const, synopsis: "Takemichi viaja 12 años al pasado para salvar a su ex-novia infiltrándose en la Tokyo Manji Gang. Combina peleas de pandillas con viaje en el tiempo de manera adictiva.", whyWatch: "Los giros son constantes y devastadores. La premisa de viaje en el tiempo añade misterio. Mikey y Draken son increíblemente carismáticos.", audience: "Fans del drama, pandillas y viajes en el tiempo.", strengths: ["Giros impredecibles", "Personajes carismáticos", "Premisa original", "Drama emocional"] },
    { title: "3. Attack on Titan", genre: "Acción / Drama / Dark Fantasy", color: "action" as const, synopsis: "La humanidad vive dentro de murallas, protegida de los Titanes. Cuando el Titán Colosal rompe la muralla, Eren jura exterminar a todos los Titanes. Lo que comienza como supervivencia evoluciona en una saga política y filosófica épica.", whyWatch: "Cada temporada reinventa la serie. Los giros redefinen todo. No tiene miedo de hacer preguntas incómodas.", audience: "Para espectadores maduros que buscan narrativa compleja.", strengths: ["Guión magistral", "Giros que cambian todo", "Animación MAPPA/WIT", "Temas profundos"] },
    { title: "4. My Hero Academia", genre: "Acción / Superhéroes / Shōnen", color: "action" as const, synopsis: "Izuku Midoriya nace sin poderes en un mundo donde casi todos los tienen. All Might le transmite su poder legendario. En la Academia U.A. debe dominar un poder que destroza su cuerpo y enfrentarse a villanos cada vez más peligrosos.", whyWatch: "Cada arco es mejor que el anterior. Las peleas son momentos cumbre del shōnen moderno. Los villanos son tan complejos como los héroes.", audience: "Fans de Naruto, Marvel, DC y el shōnen clásico.", strengths: ["Poderes creativos", "Villanos complejos", "Animación BONES", "Emociones a tope"] },
    { title: "5. Tokyo Ghoul", genre: "Acción / Horror / Psicológico", color: "action" as const, synopsis: "Ken Kaneki se convierte en medio-ghoul tras un trasplante de órganos, atrapado entre dos mundos. Su lucha por mantener su humanidad mientras su cuerpo le exige carne humana es una de las transformaciones más impactantes del anime.", whyWatch: "La transformación de Kaneki es fascinante. La primera temporada es una obra maestra del horror psicológico.", audience: "Fans del horror, antihéroes e historias de identidad.", strengths: ["Transformación épica", "Horror psicológico", "Opening icónico", "Dilemas morales"] },
    { title: "6. Jujutsu Kaisen", genre: "Acción / Sobrenatural / Shōnen", color: "action" as const, synopsis: "Yuji Itadori ingiere un dedo de Sukuna, el Rey de las Maldiciones, convirtiéndose en su recipiente. Debe aprender a ser hechicero bajo la guía de Gojo, el hechicero más poderoso del mundo.", whyWatch: "MAPPA redefinió el estándar de animación. Gojo es el personaje más cool del anime moderno.", audience: "Fans del shōnen que buscan la nueva generación.", strengths: ["Animación revolucionaria", "Gojo Satoru", "Sistema de poder creativo", "Ritmo perfecto"] },
    { title: "7. Black Clover", genre: "Acción / Fantasía / Shōnen", color: "action" as const, synopsis: "Asta nace sin magia en un mundo donde la magia lo define todo. Obtiene un grimorio de cinco hojas con espadas anti-magia. Junto a su rival Yuno, persigue el sueño de ser el Rey Mago.", whyWatch: "Empieza lento pero se convierte en una saga épica. Los arcos del torneo y el Reino Spade son increíbles.", audience: "Fans de Naruto y Fairy Tail. Del viaje de cero a héroe.", strengths: ["Superación constante", "Peleas épicas", "Gran elenco", "Espíritu shōnen"] },
  ];

  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="Nuestra selección de los 7 animes que todo fan debería ver al menos una vez. Historias que definen géneros y crean comunidades.">
        🏆 Top 7 Mejores Animes Recomendados
      </SectionHeading>

      <div className="space-y-6">
        {animes.map((a, i) => (
          <AnimatedCard key={a.title} delay={i * 0.05}>
            <AnimeCard {...a} />
            {i === 2 && <AdSlot />}
            {i === 4 && <AdSlot />}
          </AnimatedCard>
        ))}
      </div>

      <RelatedAnimes items={[
        { title: "Animes por Género", desc: "Explora romance, acción, comedia y más", to: "/generos", emoji: "🎯" },
        { title: "Animes Cortos para Empezar", desc: "Poco tiempo? Empieza por aquí", to: "/animes-cortos", emoji: "⚡" },
        { title: "Animes Tipo...", desc: "Encuentra animes similares a tus favoritos", to: "/animes-tipo", emoji: "🔥" },
      ]} />
    </div>
  );
}
