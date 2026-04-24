import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-warm shadow-warm">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            Imprimindo <span className="text-gradient-warm italic">Ideias</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="hero" size="sm" className="rounded-full">
          <a href="#contato">Encomendar</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
