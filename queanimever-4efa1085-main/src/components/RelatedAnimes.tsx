import { Link } from "@tanstack/react-router";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  title: string;
  desc: string;
  to: string;
  emoji: string;
}

interface RelatedAnimesProps {
  items: RelatedItem[];
  title?: string;
}

export function RelatedAnimes({ items, title = "Si te gustó esto, mira también..." }: RelatedAnimesProps) {
  return (
    <AnimatedSection className="mt-16 pt-12 border-t border-border/50">
      <h3 className="font-display text-2xl font-bold text-foreground mb-6">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.to as "/generos"}
            className="anime-card-hover group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <span className="text-2xl shrink-0">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
