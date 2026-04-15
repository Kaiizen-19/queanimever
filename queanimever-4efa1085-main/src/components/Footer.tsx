import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-surface mt-20">
      <div className="section-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-2xl font-display font-extrabold text-gradient-primary">🔥 AniméQué</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Tu guía definitiva para encontrar el anime perfecto. Recomendaciones honestas, sin spoilers y con contenido actualizado.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explorar</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/generos" className="hover:text-primary transition-colors">Por Género</Link>
              <Link to="/animes-tipo" className="hover:text-primary transition-colors">Animes Tipo...</Link>
              <Link to="/top-7" className="hover:text-primary transition-colors">Top 7 Mejores</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Descubrir</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/animes-cortos" className="hover:text-primary transition-colors">Animes Cortos</Link>
              <Link to="/joyas-ocultas" className="hover:text-primary transition-colors">Joyas Ocultas</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Ayuda</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-xl border border-dashed border-border/50 bg-muted/10 p-4 text-center text-xs text-muted-foreground/50">
          Espacio reservado para anuncios — Google AdSense
        </div>
        <div className="mt-8 border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} AniméQué. Todas las imágenes pertenecen a sus respectivos autores.</span>
          <span>Hecho con 🔥 para fans del anime</span>
        </div>
      </div>
    </footer>
  );
}
