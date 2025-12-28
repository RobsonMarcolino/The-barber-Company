import Interior from './Interior.png';
import ScrollReveal from './ScrollReveal';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-valBlack relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
                <span className="font-val-heading text-[20vw] leading-none text-white whitespace-nowrap">DEFY LIMITS</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-1 bg-valRed"></div>
                            <span className="text-valRed font-bold tracking-[0.3em] uppercase text-sm">Briefing da Missão</span>
                        </div>

                        <ScrollReveal direction="right">
                            <h2 className="font-val-heading text-6xl md:text-7xl text-white uppercase mb-8 leading-none">
                                Mais que um corte <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-valRed to-white">Uma Declaração.</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.2}>
                            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                                <p>
                                    Em um mundo onde o padrão é o inimigo, a <strong className="text-white font-normal">The Barber Company</strong> nasceu para os que desafiam limites. Nossa base não é apenas uma barbearia; é um laboratório de estilo tático.
                                </p>
                                <p>
                                    Combinamos precisão cirúrgica no manuseio da lâmina com a estética futurista do protocolo Valorant. Cada agente da nossa equipe é treinado para entregar não apenas um serviço, mas uma transformação visual que recarrega sua confiança para o próximo round.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-valRed pl-4">
                                <h4 className="font-val-heading text-3xl text-white">5K+</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Missões Concluídas</p>
                            </div>
                            <div className="border-l-2 border-valRed pl-4">
                                <h4 className="font-val-heading text-3xl text-white">100%</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Taxa de Precisão</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="md:w-1/2 relative">
                        <ScrollReveal direction="left" delay={0.4}>
                            <div className="relative z-10 clip-card border-2 border-white/5 hover:border-valRed transition-colors duration-500">
                                <img
                                    src={Interior}
                                    className="w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    alt="Interior Barbearia"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-valDark via-transparent to-transparent opacity-80"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 right-8 bg-valRed p-4 clip-button text-white text-center shadow-[0_0_30px_rgba(255,70,85,0.4)]">
                                    <span className="block font-val-heading text-2xl">EST.</span>
                                    <span className="block font-bold tracking-widest">2025</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-valRed/20 z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-valRed/20 z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
