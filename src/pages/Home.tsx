import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();

    return (
        <div className=" flex-1 bg-customBg flex justify-center items-center">
            <div className="flex flex-col justify-center gap-10 lg:gap-14 xl:gap-16 p-8 -mt-40">
                <h1 className="font-neon text-5xl md:text-6xl xl:text-7xl p-4 flex items-center justify-center gap-2">
                    <span className="neonLogo inline-block -mb-2 home-margin-fix h-16 animate-textPulsate">
                        O<span className="animate-textFlick safari-flick-fix">n</span>e
                    </span>
                    <span className="font-cyberWay text-white inline-block h-16">Games</span>
                </h1>
                <button 
                    className="font-neon flex items-center justify-center text-white text-center text-2xl xl:text-3xl w-40 xl:w-44 self-center py-2 home-btn-fix xl:py-3 px-6 pt-4 xl:pt-5 neonLogo neonBorder animate-borderPulse"
                    onClick={() => navigate("/shop")}>
                    <div className="animate-textPulsate">
                        L<span className="animate-textFlick safari-flick-fix">O</span>JA
                    </div>
                </button>
            </div>
        </div>
    )
}
