import { MessageCircle, Palette, Package } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conte sua ideia",
    desc: "Fale com a gente pelo WhatsApp e nos diga o que tem em mente: foto, frase, data especial.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Aprovamos a arte",
    desc: "Criamos uma prévia digital para você aprovar antes da impressão. Ajustes ilimitados.",
  },
  {
    icon: Package,
    number: "03",
    title: "Receba em casa",
    desc: "Produzimos com carinho e entregamos em embalagem caprichada na sua casa.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Simples e rápido
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Do papo ao presente em{" "}
            <span className=" text-gradient-warm">3 passos</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-card rounded-3xl p-8 border border-border/60 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
            >
              <span className="absolute top-6 right-6 font-display text-5xl font-bold text-primary/10">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-gradient-warm grid place-items-center shadow-warm">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
