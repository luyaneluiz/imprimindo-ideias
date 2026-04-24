import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Souza",
    role: "Cliente desde 2023",
    text: "Encomendei a caneca buquê para o aniversário da minha mãe e ela chorou de emoção. Acabamento impecável e atendimento maravilhoso!",
    rating: 5,
  },
  {
    name: "Rafael Lima",
    role: "Comprou caneca mimo",
    text: "Presenteei minha namorada e foi um sucesso. A foto ficou super nítida e o pacote chegou antes do prazo. Já virei cliente fiel.",
    rating: 5,
  },
  {
    name: "Juliana Alves",
    role: "Comprou cesta presente",
    text: "Mandei como agrado pra um cliente importante e ele adorou. Embalagem digna de loja premium. Recomendo demais!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Histórias que aquecem o{" "}
            <span className="italic text-gradient-warm">coração</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative bg-card rounded-3xl p-8 border border-border/60 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-primary/20" />
              <div className="flex items-center gap-1 mt-4 text-accent">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
