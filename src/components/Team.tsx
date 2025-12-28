import { useToast } from './ToastSystem';
import ScrollReveal from './ScrollReveal';

interface TeamProps {
    onOpenBooking: () => void;
}

const Team = ({ onOpenBooking }: TeamProps) => {
    const { showToast } = useToast();

    const barbers = [
        {
            name: "Phoenix",
            class: "Fade Duelist",
            img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop",
            bg: "bg-valDark",
            voiceLine: "Watch your eyes!",
            agentCode: "Phoenix"
        },
        {
            name: "Sova",
            class: "Recon Barber",
            img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600&auto=format&fit=crop",
            bg: "bg-valWhite",
            textColor: "text-valDark",
            voiceLine: "I found them!",
            agentCode: "Sova"
        },
        {
            name: "Jett",
            class: "Blade Storm",
            img: "https://images.unsplash.com/photo-1520338661084-680395057c93?q=80&w=600&auto=format&fit=crop",
            bg: "bg-valDark",
            voiceLine: "Watch this!",
            agentCode: "Jett"
        }
    ];

    const handleAgentClick = (barber: any) => {
        showToast(barber.voiceLine, barber.agentCode);
    };

    return (
        <section id="team" className="py-24 bg-valRed text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Watermark Background - Adjusted for better alignment */}
                <h2 className="font-val-heading text-[100px] md:text-[200px] text-[#2c1d20] opacity-30 absolute -top-10 md:-top-32 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 select-none pointer-events-none whitespace-nowrap z-0">
                    AGENTS
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-end mt-24 mb-12 border-b border-white/30 pb-4 relative z-10">
                    <div className="max-w-xl text-center md:text-left w-full md:w-auto">
                        <h2 className="font-val-heading text-6xl md:text-8xl uppercase text-white leading-none">
                            Selecione <br /> seu Agente
                        </h2>
                        <p className="text-white/80 mt-6 text-lg font-light max-w-md mx-auto md:mx-0">
                            Cada profissional possui um estilo único de combate contra o visual ultrapassado.
                            <br />
                            <span className="text-xs uppercase bg-black/30 border border-white/10 px-3 py-1 rounded-sm mt-3 inline-block font-bold tracking-widest text-valRed/90">
                                Clique no card para ouvir o agente
                            </span>
                        </p>
                    </div>
                </div>

                {/* Slider Wrapper */}
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {barbers.map((barber, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div
                                onClick={() => handleAgentClick(barber)}
                                className={`min-w-[300px] h-[500px] ${barber.bg} relative clip-card group cursor-pointer snap-center border-t-4 border-transparent hover:border-white transition-all ${index === 1 ? 'mt-12 md:mt-0' : ''}`}
                            >
                                <img src={barber.img}
                                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={`Barbeiro ${barber.name}`} />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                                    <span className={`text-5xl font-val-heading uppercase ${barber.textColor || 'text-outline-white'} group-hover:text-white transition-colors`}>{barber.name}</span>
                                    <div className="h-1 w-10 bg-valRed mt-2 mb-2"></div>
                                    <p className="text-xs uppercase tracking-widest text-gray-300">Class: {barber.class}</p>

                                    {/* Quick Booking Hover */}
                                    <div className="absolute inset-0 bg-valRed/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                        <span className="text-white font-val-heading text-2xl uppercase mb-2">Agendar com</span>
                                        <span className="text-white font-bold text-xl mb-6">{barber.name}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onOpenBooking();
                                            }}
                                            className="bg-white text-valRed font-bold px-6 py-2 uppercase tracking-widest clip-button text-xs hover:bg-valBlack hover:text-white transition-colors"
                                        >
                                            Confirmar
                                        </button>
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

export default Team;

