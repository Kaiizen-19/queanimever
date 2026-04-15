import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { RelatedAnimes } from "@/components/RelatedAnimes";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes sobre Anime — FAQ | AniméQué" },
      { name: "description", content: "Resolvemos tus dudas: ¿Qué anime debería ver primero? ¿Dónde ver anime legal? ¿Cuál es el mejor anime de todos los tiempos? y más." },
      { property: "og:title", content: "Preguntas Frecuentes sobre Anime — AniméQué" },
      { property: "og:description", content: "Respuestas a las preguntas más comunes sobre anime." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "¿Qué anime debería ver primero si soy principiante?", a: "Recomendamos empezar con animes accesibles: Spy x Family (comedia familiar), My Hero Academia (superhéroes), o Death Note (thriller). Si prefieres algo corto, Erased (12 episodios) es perfecto. Elige un género que ya te guste en películas o series." },
  { q: "¿Cuál es el mejor anime de todos los tiempos?", a: "Fullmetal Alchemist: Brotherhood lidera la mayoría de rankings por su narrativa perfecta y final impecable. Attack on Titan, Steins;Gate, Hunter x Hunter y Cowboy Bebop también aparecen constantemente." },
  { q: "¿Dónde puedo ver anime de forma legal?", a: "Las principales plataformas son Crunchyroll (el catálogo más grande), Netflix (exclusivas como Cyberpunk: Edgerunners), Amazon Prime Video y Disney+. Crunchyroll tiene un plan gratuito con anuncios." },
  { q: "¿Qué diferencia hay entre shōnen, seinen, shōjo y josei?", a: "Son clasificaciones demográficas: Shōnen (chicos jóvenes, ej: Naruto), Seinen (hombres adultos, ej: Berserk), Shōjo (chicas jóvenes, ej: Sailor Moon), Josei (mujeres adultas, ej: Nana). Cualquiera puede disfrutar cualquier demografía." },
  { q: "¿Es necesario ver anime en japonés con subtítulos?", a: "No es obligatorio, pero la mayoría prefiere el japonés porque los seiyuu son extraordinariamente talentosos. Sin embargo, hay doblajes excelentes. Lo importante es que disfrutes la experiencia." },
  { q: "¿Qué es el 'relleno' en anime y cómo evitarlo?", a: "El relleno son episodios no basados en el manga original. Series como Naruto tienen mucho. Busca 'guía de relleno' en internet. Animes modernos como Jujutsu Kaisen prácticamente no tienen relleno." },
  { q: "¿Cuántos episodios tiene un anime típico?", a: "Un anime 'de temporada' suele tener 12-13 o 24-25 episodios. Series largas como Naruto (720 eps) o One Piece (1100+ eps) son excepciones." },
  { q: "¿Qué anime tiene la mejor animación?", a: "Los estudios top actualmente: MAPPA (Jujutsu Kaisen), ufotable (Demon Slayer), Studio BONES (Mob Psycho 100) y WIT Studio (Spy x Family). Para películas, Makoto Shinkai y Studio Ghibli son insuperables." },
];

function FAQPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading tag="h1" subtitle="Respuestas a las preguntas más comunes sobre el mundo del anime.">
        ❓ Preguntas Frecuentes sobre Anime
      </SectionHeading>

      <AnimatedSection>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                <AccordionTrigger className="font-display font-semibold text-foreground text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      <RelatedAnimes items={[
        { title: "Guía para principiantes", desc: "Artículo completo para empezar en el anime", to: "/blog", emoji: "🎓" },
        { title: "Animes Cortos", desc: "Series perfectas para empezar", to: "/animes-cortos", emoji: "⚡" },
        { title: "Top 7 Mejores Animes", desc: "Los imprescindibles de todos los tiempos", to: "/top-7", emoji: "🏆" },
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
