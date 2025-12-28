import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaCheck, FaCalendarCheck } from 'react-icons/fa6';
import { useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [selectedAgent, setSelectedAgent] = useState('');

    const services = [
        { name: 'Corte na Tesoura', price: 'R$ 60', icon: '✂️' },
        { name: 'Corte na Máquina', price: 'R$ 45', icon: '🪒' },
        { name: 'Barba Terapia', price: 'R$ 55', icon: '🧔' },
        { name: 'Sobrancelha', price: 'R$ 25', icon: '🤨' },
        { name: 'Combo Tático (Cabelo + Barba)', price: 'R$ 100', icon: '🔥' },
        { name: 'Platinado Global', price: 'R$ 180', icon: '✨' },
    ];

    const agents = ['Phoenix', 'Sova', 'Jett']; // Updated to match Team agents

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="w-full max-w-4xl bg-valBlack border-2 border-valRed/50 relative flex flex-col md:flex-row h-[90vh] md:h-[600px] shadow-[0_0_50px_rgba(255,70,85,0.2)] clip-path-polygon overflow-y-auto md:overflow-visible"
                    >
                        {/* Header Mobile / Close Button - Fixed Position relative to modal */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-[60] text-white bg-black/50 p-2 rounded-full backdrop-blur-sm hover:text-valRed transition-colors md:hidden sticky float-right margin-4"
                            style={{ position: 'absolute' }}
                        >
                            <FaXmark size={24} />
                        </button>

                        {/* Left Panel - Image/Info */}
                        <div className="w-full md:w-1/3 bg-valRed/90 p-6 md:p-8 relative flex flex-col justify-between overflow-hidden shrink-0">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-valDark font-bold tracking-widest text-xs uppercase mb-2">Protocolo de Agendamento</h3>
                                <h2 className="font-val-heading text-4xl md:text-5xl text-white uppercase leading-none mb-6 flex items-center gap-2">
                                    Missão <br /> Start
                                </h2>
                                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed hidden md:block">
                                    Selecione seu arsenal de estilo e o agente responsável. A precisão é nossa prioridade.
                                </p>
                            </div>

                            <div className="flex md:flex-col gap-4 relative z-10 mt-4 md:mt-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                                <div className={`flex items-center gap-2 md:gap-4 transition-all min-w-max ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-sm border-2 border-white flex items-center justify-center font-bold text-white text-xs md:text-base ${step >= 1 ? 'bg-valDark border-valDark' : ''}`}>1</div>
                                    <span className="uppercase font-bold text-xs md:text-sm tracking-wider text-white">Serviço</span>
                                </div>
                                <div className={`flex items-center gap-2 md:gap-4 transition-all min-w-max ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-sm border-2 border-white flex items-center justify-center font-bold text-white text-xs md:text-base ${step >= 2 ? 'bg-valDark border-valDark' : ''}`}>2</div>
                                    <span className="uppercase font-bold text-xs md:text-sm tracking-wider text-white">Agente</span>
                                </div>
                                <div className={`flex items-center gap-2 md:gap-4 transition-all min-w-max ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-sm border-2 border-white flex items-center justify-center font-bold text-white text-xs md:text-base ${step >= 3 ? 'bg-valDark border-valDark' : ''}`}>3</div>
                                    <span className="uppercase font-bold text-xs md:text-sm tracking-wider text-white">Fim</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="w-full md:w-2/3 p-4 md:p-12 relative flex flex-col bg-valBlack">
                            {/* Desktop Close Button */}
                            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-valRed transition-colors hidden md:block z-50">
                                <FaXmark className="text-2xl" />
                            </button>

                            {step === 1 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1 flex flex-col justify-center">
                                    <h3 className="font-val-heading text-3xl text-white uppercase mb-8 border-b border-white/10 pb-4">Selecione o Serviço</h3>
                                    <div className="grid gap-4">
                                        {services.map((s) => (
                                            <button
                                                key={s.name}
                                                onClick={() => setSelectedService(s.name)}
                                                className={`p-4 border-l-4 ${selectedService === s.name ? 'border-valRed bg-white/5' : 'border-white/10 hover:border-white/30'} flex justify-between items-center transition-all group text-left hover:bg-white/5`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-2xl">{s.icon}</span>
                                                    <div>
                                                        <div className="font-val-heading uppercase text-xl text-white group-hover:text-valRed transition-colors">{s.name}</div>
                                                    </div>
                                                </div>
                                                <span className="font-bold text-valRed">{s.price}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <button
                                            onClick={() => selectedService && setStep(2)}
                                            disabled={!selectedService}
                                            className="bg-white text-valDark px-8 py-3 font-bold uppercase tracking-widest hover:bg-valRed hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed clip-button relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">Confirmar</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1 flex flex-col justify-center">
                                    <h3 className="font-val-heading text-3xl text-white uppercase mb-8 border-b border-white/10 pb-4">Dados da Missão</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-valGray text-xs uppercase tracking-widest mb-2 font-bold">Agente (Barbeiro)</label>
                                            <div className="flex gap-4">
                                                {agents.map((agent) => (
                                                    <button
                                                        key={agent}
                                                        onClick={() => setSelectedAgent(agent)}
                                                        className={`flex-1 p-3 border ${selectedAgent === agent ? 'border-valRed bg-valRed/10 text-white' : 'border-white/10 text-white/50 hover:border-white hover:text-white'} transition-all uppercase font-bold text-sm clip-card`}
                                                    >
                                                        {agent}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-valGray text-xs uppercase tracking-widest mb-2 font-bold">Data</label>
                                                <input type="date" className="w-full bg-valBlack border border-white/10 p-3 text-white focus:border-valRed outline-none focus:ring-1 focus:ring-valRed transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-valGray text-xs uppercase tracking-widest mb-2 font-bold">Horário</label>
                                                <select className="w-full bg-valBlack border border-white/10 p-3 text-white focus:border-valRed outline-none focus:ring-1 focus:ring-valRed transition-all">
                                                    <option>09:00 - Round 1</option>
                                                    <option>10:00 - Round 2</option>
                                                    <option>14:00 - Round 3</option>
                                                    <option>18:00 - Clutch Time</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-between">
                                        <button onClick={() => setStep(1)} className="text-white/50 hover:text-white uppercase text-xs tracking-widest font-bold">Voltar</button>
                                        <button
                                            onClick={() => selectedAgent && setStep(3)}
                                            disabled={!selectedAgent}
                                            className="bg-valRed text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-valBlack transition-colors disabled:opacity-50 clip-button"
                                        >
                                            Avançar
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1 flex flex-col justify-center items-center text-center">
                                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                        <FaCheck className="text-5xl text-green-500" />
                                    </div>
                                    <h2 className="font-val-heading text-4xl text-white uppercase mb-4 tracking-wide">Confirmado</h2>
                                    <p className="text-white/60 mb-8 max-w-sm text-sm">
                                        Sua missão foi agendada com sucesso. Esteja na base no horário marcado. A tolerância de atraso é zero.
                                    </p>
                                    <div className="text-left w-full max-w-sm bg-white/5 p-6 border-l-4 border-green-500 mb-8 relative">
                                        <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                                            <span className="text-white/40 uppercase text-xs tracking-widest">Serviço</span>
                                            <span className="text-white font-bold uppercase text-sm">{selectedService}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-white/40 uppercase text-xs tracking-widest">Agente</span>
                                            <span className="text-white font-bold uppercase text-sm text-valRed">{selectedAgent}</span>
                                        </div>
                                        {/* Decode Graphic */}
                                        <div className="absolute right-2 bottom-2 text-[10px] text-white/10 font-mono">
                                            SECURE_CONNECTION_ESTABLISHED
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="text-valRed hover:text-white uppercase tracking-[0.2em] text-sm font-bold transition-colors flex items-center gap-2 group">
                                        <FaCalendarCheck /> Fechar Protocolo
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
