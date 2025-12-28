import { FaAnglesDown } from 'react-icons/fa6';
import LogoBarbearia from './LogoBarbearia.png';
import Imagemfundobarb from './Imagemfundobarb.png';

interface HeroProps {
    onOpenBooking: () => void;
}

const Hero = ({ onOpenBooking }: HeroProps) => {
    return (
        <header className="relative h-screen w-full overflow-hidden flex items-center justify-center clip-slant-bottom bg-valBlack">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 filter brightness-50 contrast-125"
                    poster={Imagemfundobarb}
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-barber-spraying-water-on-a-customers-hair-40173-large.mp4" type="video/mp4" />
                    {/* Fallback image if video fails or on load */}
                    <img src={Imagemfundobarb}
                        className="w-full h-full object-cover"
                        alt="Barbershop Background" />
                </video>
            </div>

            {/* Grid & Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-valDark via-valDark/40 to-valDark/80 z-10 bg-grid-pattern"></div>

            {/* Marquee Background Text */}
            <div className="absolute top-[10%] w-full overflow-hidden opacity-5 pointer-events-none z-0">
                <div className="flex w-[200%] animate-marquee">
                    <div className="font-val-heading text-[15rem] whitespace-nowrap padding-r-12 uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '2px #fff' }}>THE BARBER COMPANY // PRECISION STYLE // THE BARBER COMPANY //&nbsp;</div>
                    <div className="font-val-heading text-[15rem] whitespace-nowrap padding-r-12 uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '2px #fff' }}>THE BARBER COMPANY // PRECISION STYLE // THE BARBER COMPANY //&nbsp;</div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-4xl w-full pt-20 pb-12 md:py-0">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="h-px w-8 md:w-12 bg-valRed"></div>
                    <p className="font-bold tracking-[0.3em] text-xs md:text-sm text-valRed uppercase">Episódio 01: O Início</p>
                    <div className="h-px w-8 md:w-12 bg-valRed"></div>
                </div>

                <img
                    src={LogoBarbearia}
                    alt="The Barber Company Logo"
                    className="w-full max-w-xl md:max-w-3xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 mb-6 md:mb-8"
                />

                <p className="text-valWhite/80 text-base md:text-xl max-w-lg mb-8 md:mb-10 font-light tracking-wide border-l-2 border-valRed pl-4 text-left mx-auto md:mx-0">
                    Não é apenas um corte, é uma estratégia. Defina seu estilo com precisão cirúrgica e ambiente de alta performance.
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-xs md:max-w-none mx-auto justify-center">
                    <button
                        onClick={onOpenBooking}
                        className="bg-valRed text-white px-6 py-3 md:px-10 md:py-4 font-bold uppercase tracking-[0.2em] clip-button hover:bg-red-600 transition-colors shadow-[0_10px_30px_rgba(255,70,85,0.3)] w-full md:w-auto min-w-[200px] border-l-4 border-white/20 block text-sm md:text-base"
                    >
                        Iniciar Missão
                    </button>
                    <a
                        href="#services"
                        className="bg-transparent border border-white/30 text-white px-6 py-3 md:px-10 md:py-4 font-bold uppercase tracking-[0.2em] clip-button hover:bg-white hover:text-valBlack transition-colors w-full md:w-auto min-w-[200px] flex items-center justify-center text-sm md:text-base"
                    >
                        Ver Arsenal
                    </a>
                </div>
            </div>

            {/* Decorative Bottom Elements */}
            <div className="absolute bottom-12 w-full flex justify-between px-12 z-30 pointer-events-none">
                <div className="flex items-center gap-2">
                    <FaAnglesDown className="text-valRed animate-bounce" />
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">Scroll para navegar</span>
                </div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest text-right">
                    <span className="block text-valRed font-bold">Protocolo</span>
                    Barba // Cabelo // Bigode
                </div>
            </div>
        </header>
    );
};

export default Hero;
