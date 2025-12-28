import { motion } from 'framer-motion';
import { FaLocationDot, FaMapLocationDot } from 'react-icons/fa6';
import ScrollReveal from './ScrollReveal';

const TacticalMap = () => {
    return (
        <section id="location" className="py-24 bg-valDark relative clip-path-polygon overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal direction="down">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-valRed font-bold tracking-widest uppercase text-sm mb-2">Deploy Zones</span>
                        <h2 className="font-val-heading text-6xl text-white uppercase">Bases Operacionais</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-valRed to-transparent mt-4"></div>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Map Visualizer (Styled as Valorant Minimap) */}
                    <ScrollReveal width="100%" className="lg:w-2/3" direction="right">
                        <div className="bg-[#0f1923] border-2 border-white/10 relative h-[500px] overflow-hidden group shadow-2xl rounded-sm">
                            {/* Map Image Layer */}
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                {/* Using a stylized map background instead of Google Maps */}
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale mix-blend-luminosity"></div>
                            </div>

                            {/* SVG Map Overlay (Minimap Style) */}
                            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 800 500">
                                {/* Site A Marker */}
                                <motion.g
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="cursor-pointer pointer-events-auto"
                                >
                                    <circle cx="200" cy="250" r="15" fill="#ff4655" fillOpacity="0.2" className="animate-pulse" />
                                    <circle cx="200" cy="250" r="6" fill="#ff4655" />
                                    <text x="220" y="255" fill="white" fontFamily="Anton" fontSize="20" className="uppercase tracking-widest">Site A: Centro</text>
                                    <line x1="200" y1="250" x2="200" y2="350" stroke="white" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
                                </motion.g>

                                {/* Site B Marker */}
                                <motion.g
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="cursor-pointer pointer-events-auto"
                                >
                                    <circle cx="600" cy="150" r="15" fill="#0f1923" stroke="#ff4655" strokeWidth="2" fillOpacity="0.5" className="animate-pulse" />
                                    <circle cx="600" cy="150" r="6" fill="white" />
                                    <text x="620" y="155" fill="white" fontFamily="Anton" fontSize="20" className="uppercase tracking-widest">Site B: Shopping</text>
                                    <line x1="600" y1="150" x2="600" y2="250" stroke="white" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
                                </motion.g>
                            </svg>

                            {/* HUD Elements */}
                            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm p-2 border border-white/20">
                                <span className="text-[10px] text-white/70 uppercase tracking-widest flex items-center gap-2">
                                    <FaMapLocationDot className="text-valRed" /> Live Satellite Feed
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Location Details (Side Panel) */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        <ScrollReveal direction="left" delay={0.2} width="100%" className='flex-1 flex flex-col'>
                            {/* Card A */}
                            <div className="bg-valBlack border-l-4 border-valRed flex-1 hover:bg-[#1f2b35] transition-colors group cursor-pointer relative overflow-hidden flex flex-col">
                                {/* Image Header */}
                                <div className="h-32 w-full relative overflow-hidden">
                                    <img src="https://i.pinimg.com/1200x/0d/5d/b7/0d5db796d1cbcd25f5fa098d2b2ff6c8.jpg"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        alt="Unidade Centro" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-valBlack to-transparent"></div>
                                </div>

                                <div className="p-6 pt-2 relative">
                                    <div className="absolute right-4 top-4 text-[60px] font-val-heading text-white/5 group-hover:text-white/10 transition-colors leading-none">A</div>
                                    <h3 className="font-val-heading text-3xl text-white uppercase mb-2 relative z-10">Unidade Centro</h3>
                                    <p className="text-white/60 text-sm mb-4 font-light relative z-10">
                                        Rua das Operações Especiais, 123<br />
                                        Setor Alpha - Centro
                                    </p>
                                    <div className="flex items-center justify-between mt-auto relative z-10">
                                        <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded-sm uppercase tracking-wide">Aberto</span>
                                        <button className="text-valRed uppercase text-xs font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                            Traçar Rota <FaLocationDot />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Card B */}
                        <ScrollReveal direction="left" delay={0.4} width="100%" className='flex-1 flex flex-col'>
                            <div className="bg-valBlack border-l-4 border-white/50 flex-1 hover:border-valRed hover:bg-[#1f2b35] transition-all group cursor-pointer relative overflow-hidden flex flex-col">
                                {/* Image Header */}
                                <div className="h-32 w-full relative overflow-hidden">
                                    <img src="https://i.pinimg.com/736x/aa/ea/6c/aaea6c67f965c59e8515b75f57beb263.jpg"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        alt="Unidade Shopping" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-valBlack to-transparent"></div>
                                </div>

                                <div className="p-6 pt-2 relative">
                                    <div className="absolute right-4 top-4 text-[60px] font-val-heading text-white/5 group-hover:text-white/10 transition-colors leading-none">B</div>
                                    <h3 className="font-val-heading text-3xl text-white uppercase mb-2 relative z-10">Unidade Shopping</h3>
                                    <p className="text-white/60 text-sm mb-4 font-light relative z-10">
                                        Av. Tática, 4500 - Piso L2<br />
                                        Setor Bravo - Shopping Center
                                    </p>
                                    <div className="flex items-center justify-between mt-auto relative z-10">
                                        <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded-sm uppercase tracking-wide">Aberto</span>
                                        <button className="text-valRed uppercase text-xs font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                            Traçar Rota <FaLocationDot />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TacticalMap;
