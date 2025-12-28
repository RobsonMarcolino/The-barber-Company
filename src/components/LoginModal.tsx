import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaGoogle, FaFacebook } from 'react-icons/fa6';
import { useState } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-valDark/90 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="w-full max-w-[400px] bg-[#f9f9f9] relative shadow-2xl overflow-hidden rounded-sm"
                    >
                        {/* Riot Client Header Style */}
                        <div className="flex justify-end p-4 absolute top-0 right-0 w-full z-10">
                            <button onClick={onClose} className="text-gray-400 hover:text-valRed transition-colors">
                                <FaXmark className="text-xl" />
                            </button>
                        </div>

                        <div className="p-12 pt-16 flex flex-col items-center">
                            {/* Logo Area */}
                            <div className="mb-8 text-center">
                                <div className="w-12 h-12 bg-valRed rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                    <span className="text-white font-val-heading text-2xl">V</span>
                                </div>
                                <h2 className="font-bold text-2xl text-valDark">Fazer login</h2>
                            </div>

                            {/* Form */}
                            <div className="w-full space-y-4">
                                <div className="relative group">
                                    <input type="text" placeholder=" " className="w-full h-12 bg-white border-2 border-gray-200 rounded-lg px-4 pt-2 font-bold text-gray-700 outline-none focus:border-valRed transition-colors peer" />
                                    <label className="absolute left-4 top-3 text-gray-400 text-xs font-bold uppercase transition-all peer-focus:text-[9px] peer-focus:top-1 peer-focus:text-valRed peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:top-1">
                                        Nome de Usuário
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input type="password" placeholder=" " className="w-full h-12 bg-white border-2 border-gray-200 rounded-lg px-4 pt-2 font-bold text-gray-700 outline-none focus:border-valRed transition-colors peer" />
                                    <label className="absolute left-4 top-3 text-gray-400 text-xs font-bold uppercase transition-all peer-focus:text-[9px] peer-focus:top-1 peer-focus:text-valRed peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:top-1">
                                        Senha
                                    </label>
                                </div>

                                <div className="flex items-center gap-4 mt-6">
                                    <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                        <FaFacebook className="text-[#1877F2] text-xl" />
                                    </button>
                                    <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                        <FaGoogle className="text-xl" />
                                    </button>
                                    <div className="flex-1"></div>
                                    <button className="bg-[#bc002d] hover:bg-valRed text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <i className="fa-solid fa-arrow-right text-xl"></i>
                                        ➔
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setIsSignUp(!isSignUp)}
                                    className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-valRed transition-colors"
                                >
                                    {isSignUp ? "Já tem uma conta? Entrar" : "Criar uma conta Riot"}
                                </button>
                            </div>

                            <div className="mt-12 text-[10px] text-center text-gray-400 font-mono">
                                V.65.0.1 // CLIENT
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
