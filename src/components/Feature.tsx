import { FaCrosshairs } from "react-icons/fa6";

const Feature = () => {
    return (
        <>
            {/* 3D Divider */}
            <div className="relative h-[80px] -mt-[40px] -mb-[40px] z-20 pointer-events-none">
                <div className="absolute w-full h-full bg-valRed opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 60%, 0 100%)' }}></div>
            </div>

            <section className="py-24 bg-valDark relative clip-slant-bottom overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 grayscale"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 border-2 border-valRed/30 transform translate-x-4 translate-y-4 clip-card hidden md:block"></div>
                        <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            className="w-3/4 md:w-full max-h-[600px] object-cover clip-card drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] grayscale hover:grayscale-0 transition duration-700 relative z-10"
                            alt="Barbeiro Master" />
                    </div>
                    <div className="md:w-1/2 text-white">
                        <div className="inline-block border border-valRed text-valRed px-2 py-1 text-xs font-bold tracking-widest mb-4 bg-valRed/10">LEAD BARBER</div>
                        <h2 className="font-val-heading text-6xl md:text-8xl uppercase leading-none mb-6">Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-valRed to-white">Barber</span></h2>
                        <p className="text-xl text-gray-400 mb-8 font-light border-l-4 border-valRed pl-6">
                            "Precisão não é uma escolha, é um requisito."<br />
                            <span className="text-sm text-valGray mt-2 block">- Especialista em Texturização</span>
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 hover:border-valRed transition-colors group cursor-default">
                                <div className="w-12 h-12 bg-valRed/20 flex items-center justify-center rounded-sm">
                                    <FaCrosshairs className="text-valRed group-hover:animate-spin" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-wider text-sm">Habilidade: Visagismo</h4>
                                    <p className="text-xs text-gray-400">Análise tática do formato do rosto.</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 bg-white text-valDark px-8 py-3 font-bold uppercase tracking-widest clip-button hover:bg-valRed hover:text-white transition-colors relative overflow-hidden group">
                            <span className="relative z-10">Ver Destaques</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
