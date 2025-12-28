import { useEffect, useState } from 'react';
import { FaScissors } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed inset-0 z-[9999] bg-valDark flex justify-center items-center"
                >
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1920&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Loading Background" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center loader-content text-center">
                        <FaScissors className="text-9xl text-valRed animate-pulse-red mb-8 -rotate-90" />
                        <h2 className="font-val-heading text-3xl uppercase tracking-widest text-white mb-2">The Barber Company</h2>
                        <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-8">Barbearia Premium</p>
                        <div className="w-[300px] h-1 bg-white/10 mt-5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-valRed animate-load-progress"></div>
                        </div>
                        <p className="text-white/30 text-[10px] uppercase tracking-widest mt-2 animate-pulse">Afiando Lâminas...</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
