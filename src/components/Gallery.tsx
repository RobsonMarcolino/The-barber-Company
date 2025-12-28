import { motion } from 'framer-motion';

const Gallery = () => {
    // Duplicating images to create seamless infinite scroll effect
    const images = [
        "https://i.pinimg.com/736x/e7/58/c0/e758c0cbcce0c0ae9f89b2771132e148.jpg",
        "https://i.pinimg.com/1200x/1c/22/e4/1c22e4da7c76c54fc7e9e5fa49504680.jpg",
        "https://i.pinimg.com/736x/ec/29/55/ec29559efb13061dddecbf8e338efbb7.jpg",
        "https://i.pinimg.com/736x/49/f9/dc/49f9dc16023b554214025a05771c8855.jpg",
        "https://i.pinimg.com/736x/24/ff/16/24ff16b5b2936960391442cbc6b2901c.jpg",
        "https://i.pinimg.com/736x/4e/c2/86/4ec28603c722b0fc6725933c7e3ab11f.jpg",
        "https://i.pinimg.com/736x/79/1d/0d/791d0d7c2545fdb4e839541fc6598b57.jpg",
        "https://i.pinimg.com/1200x/46/a9/3b/46a93bb55f02442f80d63fd10d016e09.jpg",
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593702295094-aea8c5c13d73?q=80&w=600&auto=format&fit=crop",
    ];

    return (
        <section className="py-24 bg-valDark relative text-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="text-valRed font-bold tracking-[0.3em] uppercase text-xs">Portfólio</span>
                        <h2 className="font-val-heading text-5xl md:text-6xl uppercase mt-2">Tactical Gallery</h2>
                    </div>
                    <div className="hidden md:block w-32 h-1 bg-white/20"></div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-valDark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-valDark to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20 // Adjust speed here
                    }}
                >
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="w-[300px] h-[400px] flex-shrink-0 clip-card overflow-hidden group relative cursor-pointer border border-white/5 hover:border-valRed transition-colors">
                            <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={`Corte Tático ${index}`} />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-valRed font-bold uppercase tracking-wider text-xs">Visual Confirmado</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
