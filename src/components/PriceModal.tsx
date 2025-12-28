import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaScissors } from 'react-icons/fa6';

interface PriceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PriceModal = ({ isOpen, onClose }: PriceModalProps) => {
    const prices = [
        { name: "Corte na Tesoura", price: "R$ 60,00", detail: "Lavagem + Finalização" },
        { name: "Corte na Máquina", price: "R$ 45,00", detail: "Acabamento Navalhado" },
        { name: "Barba Terapia", price: "R$ 55,00", detail: "Toalha Quente + Hidratação" },
        { name: "Sobrancelha", price: "R$ 25,00", detail: "Design + Alinhamento" },
        { name: "Combo Tático (Cabelo + Barba)", price: "R$ 100,00", detail: "Serviço Completo Premium" },
        { name: "Platinado Global", price: "R$ 180,00", detail: "Descoloração + Matização" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-valBlack border-2 border-valRed/50 w-full max-w-lg relative clip-path-polygon shadow-[0_0_50px_rgba(255,70,85,0.2)]"
                    >
                        {/* Header */}
                        <div className="bg-valRed p-6 flex justify-between items-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            <h2 className="text-2xl font-val-heading text-white uppercase tracking-widest relative z-10 flex items-center gap-3">
                                <FaScissors className="-rotate-90" /> Tabela de Preços
                            </h2>
                            <button onClick={onClose} className="text-white hover:rotate-90 transition-transform relative z-10">
                                <FaXmark size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <ul className="space-y-6">
                                {prices.map((item, index) => (
                                    <li key={index} className="flex justify-between items-end border-b border-white/10 pb-2 group hover:border-valRed/50 transition-colors">
                                        <div>
                                            <span className="font-val-heading text-xl text-white uppercase tracking-wide block group-hover:text-valRed transition-colors">{item.name}</span>
                                            <span className="text-xs text-white/40 uppercase tracking-widest">{item.detail}</span>
                                        </div>
                                        <span className="font-bold text-valRed text-lg">{item.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 text-center bg-white/5 p-4 rounded-sm border border-white/10">
                                <p className="text-white/60 text-xs font-light">
                                    * Valores sujeitos a alteração sem aviso prévio.<br />
                                    Aceitamos Cartão, PIX e Dinheiro.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PriceModal;
