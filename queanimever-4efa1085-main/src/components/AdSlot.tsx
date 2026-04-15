export function AdSlot({ className = "" }: { className?: string }) {
  return (
    <div className={`my-10 rounded-xl border border-dashed border-border/60 bg-muted/20 p-8 text-center text-xs text-muted-foreground/60 ${className}`}>
      <div className="flex items-center justify-center gap-2">
        <span className="opacity-50">📢</span>
        <span>Espacio publicitario — Google AdSense</span>
      </div>
    </div>
  );
}
