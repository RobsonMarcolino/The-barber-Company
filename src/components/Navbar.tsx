import { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import LogoBarb from './LogoBarb.png';

interface NavbarProps {
    onOpenBooking: () => void;
    onOpenLogin: () => void;
}

const Navbar = ({ onOpenBooking, onOpenLogin }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const navItems = ['Sobre', 'Serviços', 'Agentes', 'Base'];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 bg-[#0f1923]/95 backdrop-blur-md ${scrolled ? 'h-16' : 'h-20'}`}>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-valRed to-transparent opacity-50"></div>

                <div className="px-6 md:px-12 h-full flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group relative">
                            <img
                                src={LogoBarb}
                                alt="The Barber Company"
                                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                            <div className="flex flex-col z-10">
                                <span className="font-val-heading text-lg md:text-xl tracking-wider text-white leading-none">THE BARBER COMPANY</span>
                                <span className="text-[8px] md:text-[9px] text-valGray tracking-[0.3em] uppercase">Tactical Style</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden text-white text-2xl p-2 hover:text-valRed transition-colors"
                    >
                        <FaBars />
                    </button>

                    {/* Links Centrais Estilizados - Desktop */}
                    <div className="hidden lg:flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white">
                        {navItems.map((item) => {
                            const targetId = item.toLowerCase() === 'base' ? 'location' :
                                item.toLowerCase() === 'agentes' ? 'team' :
                                    item.toLowerCase() === 'sobre' ? 'about' :
                                        item.toLowerCase() === 'serviços' ? 'services' :
                                            item.toLowerCase().replace('ç', 'c').replace('õ', 'o');

                            return (
                                <a
                                    key={item}
                                    href={`#${targetId}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(targetId);
                                    }}
                                    className="relative px-4 py-2 transition-colors nav-link group flex items-center cursor-pointer"
                                >
                                    <span className="inline-block w-1 h-1 bg-valRed mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                    {item}
                                    <div className="absolute top-0 left-0 w-full h-full bg-valRed/10 transform scale-x-0 origin-right transition-transform duration-300 ease-out z-[-1] group-hover:scale-x-100 group-hover:origin-left"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-valRed transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Botão de Ação - Desktop */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button onClick={onOpenLogin} className="text-white/70 hover:text-white uppercase text-xs font-bold tracking-widest">
                            Login
                        </button>

                        <button
                            onClick={onOpenBooking}
                            className="bg-valRed text-white font-bold px-8 py-3 uppercase tracking-wider text-sm clip-button hover:bg-white hover:text-valBlack transition-all hover:shadow-[0_0_20px_rgba(255,70,85,0.6)] border border-transparent hover:border-valRed relative group overflow-hidden"
                        >
                            <span className="relative z-10">Agendar</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full Screen Separate Component */}
            <div className={`fixed inset-0 bg-[#0f1923] z-[60] transition-transform duration-300 lg:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header do Menu */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div className="flex flex-col">
                        <span className="font-val-heading text-xl text-white">MENU TÁTICO</span>
                        <span className="text-xs text-valRed tracking-widest uppercase">Select Option</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/50 hover:text-valRed transition-colors p-2"
                    >
                        <FaXmark size={28} />
                    </button>
                </div>

                {/* Lista de Links */}
                <div className="flex flex-col flex-1 overflow-y-auto p-6 gap-2">
                    {navItems.map((item, index) => {
                        const targetId = item.toLowerCase() === 'base' ? 'location' :
                            item.toLowerCase() === 'agentes' ? 'team' :
                                item.toLowerCase() === 'sobre' ? 'about' :
                                    item.toLowerCase() === 'serviços' ? 'services' :
                                        item.toLowerCase().replace('ç', 'c').replace('õ', 'o');
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(targetId)}
                                className="text-left py-4 border-b border-white/5 hover:bg-white/5 hover:pl-4 transition-all group"
                            >
                                <span className="text-valRed/40 text-xs font-bold mr-3">0{index + 1}</span>
                                <span className="font-val-heading text-2xl uppercase text-white group-hover:text-valRed tracking-wide">{item}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Footer do Menu */}
                <div className="p-6 bg-black/20 border-t border-white/10 space-y-4">
                    <button
                        onClick={() => { setIsMenuOpen(false); onOpenLogin(); }}
                        className="w-full py-4 text-center text-white/70 hover:text-white uppercase text-sm font-bold tracking-widest border border-white/10 hover:bg-white/5 transition-colors"
                    >
                        Login Sistema
                    </button>

                    <button
                        onClick={() => { setIsMenuOpen(false); onOpenBooking(); }}
                        className="w-full bg-valRed text-white font-bold py-4 uppercase tracking-wider text-lg clip-button shadow-[0_5px_20px_rgba(255,70,85,0.4)] active:scale-95 transition-transform"
                    >
                        Iniciar Missão
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
