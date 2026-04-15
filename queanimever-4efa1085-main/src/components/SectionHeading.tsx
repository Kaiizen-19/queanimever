import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  tag?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ tag: Tag = "h2", children, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 ${className}`}>
      <Tag className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {children}
      </Tag>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </AnimatedSection>
  );
}
