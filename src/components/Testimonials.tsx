import { FaStar } from 'react-icons/fa6';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
    const reviews = [
        {
            name: "Rafael N.",
            rank: "Radiante",
            text: "Melhor experiência. O ambiente é insano e o corte ficou impecável. Me senti num mapa do Valorant.",
            rating: 5,
            agent: "Phoenix"
        },
        {
            name: "Lucas S.",
            rank: "Imortal",
            text: "Profissionais de alto nível. O degradê ficou perfeito, recomendo demais o 'Combo Tático'.",
            rating: 5,
            agent: "Sova"
        },
        {
            name: "Gabriel M.",
            rank: "Ascendente",
            text: "Atendimento top tier. A barba terapia com toalha quente é outro nível.",
            rating: 5,
            agent: "Breach"
        }
    ];

    return (
        <section className="py-24 bg-valBlack relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-valRed font-bold tracking-[0.3em] uppercase text-xs">Feedback da Comunidade</span>
                    <h2 className="font-val-heading text-5xl md:text-6xl uppercase mt-2">Mission Debriefs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-white/5 border border-white/10 p-8 relative group hover:border-valRed transition-colors">
                                {/* Quote Icon Background */}
                                <div className="absolute top-4 right-4 text-6xl font-val-heading text-white/5 select-none">"</div>

                                <div className="flex gap-1 mb-4 text-valRed">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                <p className="text-gray-300 font-light italic mb-6 leading-relaxed">"{review.text}"</p>

                                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                                    <div className="w-10 h-10 bg-valRed flex items-center justify-center font-bold text-lg rounded-sm uppercase">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider text-sm">{review.name}</h4>
                                        <span className="text-xs text-white/40 uppercase tracking-widest">{review.rank} // Main {review.agent}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
