import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PriceModal from "./PriceModal";
import ScrollReveal from "./ScrollReveal";

const Services = () => {
    const [isPriceOpen, setIsPriceOpen] = useState(false);

    const services = [
        {
            title: "Corte na Tesoura",
            subtitle: "Clássico",
            img: "https://i.pinimg.com/736x/74/1c/4e/741c4e622fd2a781e0aa291b26be31c6.jpg",
            badge: "MVP"
        },
        {
            title: "Barba Terapia",
            subtitle: "Hot Towel",
            img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
            className: "md:-mt-8",
            badge: "Mais Pedido"
        },
        {
            title: "Produtos",
            subtitle: "Supply Drop",
            img: "https://i.pinimg.com/1200x/b1/93/a0/b193a03b45a76e8384ffb2bfe4a9f17b.jpg",
        }
    ];

    return (
        <section id="services" className="py-24 bg-valWhite relative overflow-hidden">
            <PriceModal isOpen={isPriceOpen} onClose={() => setIsPriceOpen(false)} />

            {/* Floating Numbers Background */}
            <div className="absolute top-20 right-10 text-9xl font-val-heading text-valGray/10 select-none z-0">01</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-valDark/10 pb-4 gap-4">
                    <div>
                        <span className="text-valRed font-bold tracking-widest text-xs uppercase mb-2 block">Arsenal de Estilo</span>
                        <h2 className="font-val-heading text-6xl text-valDark uppercase">Serviços</h2>
                    </div>
                    <button
                        onClick={() => setIsPriceOpen(true)}
                        className="text-valRed font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2 group mb-2 md:mb-0"
                    >
                        Ver Tabela Completa <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.2} width="100%">
                            <article className={`group cursor-pointer relative ${service.className || ''}`}>
                                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-valRed opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                                {service.badge && (
                                    <div className="absolute top-4 right-4 z-30 bg-valRed text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider clip-button shadow-lg">
                                        {service.badge}
                                    </div>
                                )}
                                <div className="overflow-hidden rounded-sm mb-4 relative clip-card shadow-lg h-80 bg-gray-900">
                                    <img src={service.img}
                                        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        alt={service.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-valDark/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="text-valRed font-bold text-xs uppercase tracking-widest mb-1 block">{service.subtitle}</span>
                                        <h3 className="font-val-heading text-3xl text-white uppercase leading-none group-hover:text-valRed transition-colors">{service.title}</h3>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
