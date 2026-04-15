import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AnimeCardProps {
  title: string;
  genre: string;
  synopsis: string;
  whyWatch: string;
  audience: string;
  strengths: string[];
  color?: "romance" | "action" | "comedy" | "story" | "default";
  imageUrl?: string;
}

const colorMap = {
  romance: "bg-genre-romance/20 text-genre-romance border-genre-romance/30",
  action: "bg-genre-action/20 text-genre-action border-genre-action/30",
  comedy: "bg-genre-comedy/20 text-genre-comedy border-genre-comedy/30",
  story: "bg-genre-story/20 text-genre-story border-genre-story/30",
  default: "bg-primary/20 text-primary border-primary/30",
};

const accentLine = {
  romance: "bg-genre-romance",
  action: "bg-genre-action",
  comedy: "bg-genre-comedy",
  story: "bg-genre-story",
  default: "bg-primary",
};

export function AnimeCard({ title, genre, synopsis, whyWatch, audience, strengths, color = "default", imageUrl }: AnimeCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="anime-card-hover group relative rounded-xl border border-border bg-card overflow-hidden">
      {/* Accent top line */}
      <div className={`h-1 w-full ${accentLine[color]}`} />

      {/* Image placeholder with gradient */}
      {imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <Badge className={`${colorMap[color]} border`}>{genre}</Badge>
          </div>
        </div>
      ) : (
        <div className="relative h-32 bg-gradient-to-br from-secondary via-card to-secondary overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <Badge className={`${colorMap[color]} border`}>{genre}</Badge>
          </div>
        </div>
      )}

      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>

        <div className="space-y-3 text-sm leading-relaxed text-secondary-foreground">
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1 text-xs uppercase tracking-wider opacity-70">📖 Sinopsis</h4>
            <p className={expanded ? "" : "line-clamp-3"}>{synopsis}</p>
          </div>

          {expanded && (
            <>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1 text-xs uppercase tracking-wider opacity-70">🎯 ¿Por qué verlo?</h4>
                <p>{whyWatch}</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1 text-xs uppercase tracking-wider opacity-70">👤 Público ideal</h4>
                <p>{audience}</p>
              </div>
            </>
          )}

          <div>
            <h4 className="font-display font-semibold text-foreground mb-1 text-xs uppercase tracking-wider opacity-70">⭐ Puntos fuertes</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {strengths.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground border border-border/50">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? (
            <>Menos detalles <ChevronUp className="h-3 w-3" /></>
          ) : (
            <>Más detalles <ChevronDown className="h-3 w-3" /></>
          )}
        </button>
      </div>
    </article>
  );
}
