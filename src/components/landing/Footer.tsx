import { Sparkles, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-warm">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-display text-2xl font-semibold">
                Imprimindo <span className="italic text-gradient-warm">Ideias</span>
              </span>
            </div>
            <p className="mt-4 text-background/70 leading-relaxed text-sm max-w-xs">
              Canecas personalizadas e presentes únicos feitos com carinho para
              eternizar momentos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#produtos" className="hover:text-background transition-colors">Produtos</a></li>
              <li><a href="#como-funciona" className="hover:text-background transition-colors">Como funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-background transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4" />
                <a href="https://wa.me/5511999999999" className="hover:text-background transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/imprimindoideias" className="hover:text-background transition-colors">
                  @imprimindoideias
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@imprimindoideias.com.br" className="hover:text-background transition-colors">
                  contato@imprimindoideias.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Imprimindo Ideias. Todos os direitos reservados.</p>
          <p>Feito com ♥ para presentear quem você ama.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
