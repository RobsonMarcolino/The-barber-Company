const Location = () => {
    return (
        <section id="location" className="py-20 bg-valWhite text-valDark clip-slant-top -mt-10 z-20 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 pt-12">
                    <span className="text-valRed font-bold tracking-[0.3em] text-sm mb-4">SELEÇÃO DE MAPA</span>
                    <h2 className="font-val-heading text-6xl uppercase mb-6">Nossas Bases</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Location 1 */}
                    <div className="h-[300px] md:h-[400px] relative group overflow-hidden cursor-pointer clip-card bg-gray-200 border-2 border-transparent hover:border-valRed transition-colors">
                        <img src="https://images.unsplash.com/photo-1512690459411-b9245aed8ad5?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Unidade Centro" />
                        <div className="absolute top-6 left-6 z-10">
                            <h3 className="font-val-heading text-5xl uppercase text-white drop-shadow-md">Centro</h3>
                            <p className="text-white font-bold tracking-widest text-xs uppercase bg-valRed inline-block px-2">Site A</p>
                        </div>
                        {/* Hover Info */}
                        <div className="absolute inset-0 bg-valDark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                            <span className="text-4xl font-val-heading uppercase">CONFIRMAR LOCAL</span>
                            <span className="text-xs tracking-[0.3em] text-valRed mt-2">COORDENADAS RECEBIDAS</span>
                        </div>
                    </div>
                    {/* Location 2 */}
                    <div className="h-[300px] md:h-[400px] relative group overflow-hidden cursor-pointer clip-card bg-gray-200 border-2 border-transparent hover:border-valRed transition-colors">
                        <img src="https://images.unsplash.com/photo-1596522354195-e84e9c0a5d7e?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Unidade Shopping" />
                        <div className="absolute top-6 left-6 z-10">
                            <h3 className="font-val-heading text-5xl uppercase text-white drop-shadow-md">Shopping</h3>
                            <p className="text-white font-bold tracking-widest text-xs uppercase bg-valRed inline-block px-2">Site B</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Location;
