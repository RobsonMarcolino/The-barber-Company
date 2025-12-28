import { FaScissors } from 'react-icons/fa6';

interface MobileFloatingButtonProps {
    onOpenBooking: () => void;
}

const MobileFloatingButton = ({ onOpenBooking }: MobileFloatingButtonProps) => {
    return (
        <div className="fixed bottom-4 left-0 w-full px-4 z-40 md:hidden pointer-events-none">
            <button
                onClick={onOpenBooking}
                className="w-full bg-valRed text-white font-bold py-4 uppercase tracking-widest clip-button shadow-[0_10px_20px_rgba(255,70,85,0.4)] pointer-events-auto flex items-center justify-center gap-2 animate-pulse-gentle"
            >
                <FaScissors className="rotate-180" /> Iniciar Missão (Agendar)
            </button>
        </div>
    );
};

export default MobileFloatingButton;
