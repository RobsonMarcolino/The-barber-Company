import { useState, createContext, useContext, useCallback } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Toast {
    id: string;
    message: string;
    agent: string;
}

interface ToastContextType {
    showToast: (message: string, agent: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, agent: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, agent }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000); // 4 seconds duration
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-24 right-6 flex flex-col gap-2 z-[9999] pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                            className="bg-valDark/90 backdrop-blur-md border border-l-4 border-valRed p-4 rounded-sm shadow-xl flex items-center gap-4 min-w-[300px]"
                        >
                            <div className="w-10 h-10 bg-valRed rounded-full flex items-center justify-center shrink-0">
                                <span className="font-val-heading text-white text-xl">{toast.agent[0]}</span>
                            </div>
                            <div>
                                <span className="text-valRed text-[10px] font-bold uppercase tracking-widest block">{toast.agent} disse:</span>
                                <p className="text-white text-sm font-medium italic">"{toast.message}"</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
