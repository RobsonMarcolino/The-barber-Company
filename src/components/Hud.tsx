const Hud = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-40">
            {/* HUD Corners */}
            <div className="absolute top-[20px] left-[20px] w-10 h-10 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute top-[20px] right-[20px] w-10 h-10 border-t-2 border-r-2 border-white/20"></div>
            <div className="absolute bottom-[20px] left-[20px] w-10 h-10 border-b-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-[20px] right-[20px] w-10 h-10 border-b-2 border-r-2 border-white/20"></div>

            {/* Linha Central HUD */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20 hidden md:block"></div>
            <div className="fixed right-6 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20 hidden md:block"></div>

            {/* Coordenadas HUD */}
            <div className="fixed bottom-6 left-24 text-[10px] text-white/40 font-mono hidden md:block">
                SYS_READY // V.1.0.4 <br />
                COORD: 45.923, -12.002
            </div>
        </div>
    );
};

export default Hud;
