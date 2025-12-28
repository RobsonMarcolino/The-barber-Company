import { FaWhatsapp, FaInstagram, FaFacebook, FaScissors } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-500 pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute -left-20 top-0 text-[15rem] text-white/5 font-val-heading pointer-events-none">GG WP</div>

            <div className="container mx-auto px-6 text-center relative z-10">

                <div className="flex justify-center items-center gap-8 mb-8">
                    <a href="#" className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm hover:bg-valRed hover:text-white transition clip-button"><FaWhatsapp className="text-xl" /></a>
                    <a href="#" className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm hover:bg-valRed hover:text-white transition clip-button"><FaInstagram className="text-xl" /></a>
                    <a href="#" className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm hover:bg-valRed hover:text-white transition clip-button"><FaFacebook className="text-xl" /></a>
                </div>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Localização</h4>
                        <p className="text-xs">Rua das Operações Especiais, 123<br />Setor Alpha - Centro</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Horário de Operação</h4>
                        <p className="text-xs">Seg - Sex: 09:00 - 20:00<br />Sáb: 09:00 - 18:00</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-4">Links Rápidos</h4>
                        <div className="flex flex-col gap-2 text-xs">
                            <a href="#" className="hover:text-valRed transition-colors">Agendar Missão</a>
                            <a href="#" className="hover:text-valRed transition-colors">Trabalhe Conosco</a>
                            <a href="#" className="hover:text-valRed transition-colors flex items-center gap-2">Abrir no Maps <FaScissors className="rotate-45" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
                    <p className="max-w-2xl mb-4 leading-relaxed text-xs">
                        © 2025 The Barber Company. Todos os direitos reservados.
                    </p>
                    <div className="text-[10px] uppercase tracking-widest text-valRed">
                        Riot Games Style Fan Project
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
