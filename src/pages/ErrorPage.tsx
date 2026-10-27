import { useRouteError } from "react-router-dom"

type Error = {
    status: number,
    data: string,
    statusText: string,
}

export default function ErrorPage() {
    const error = useRouteError() as Error;
    console.log(error);
    return (
        <div className="flex flex-col gap-2 justify-center md:items-center py-8 px-8 text-white font-montserrat">
            <div className="flex gap-4">
                <h2 className="font-cyberWay text-4xl md:text-5xl">Erro</h2>
                <h2 className="text-[#22D3EE] relative top-1 font-neon text-4xl md:text-5xl neonLogo animate-textPulsate">
                    4<span className="animate-textFlick safari-flick-fix">0</span>4
                </h2>
            </div>
            <div className="flex gap-1 font-bold mt-7">
                <h4>{error.status}</h4>
                <h4>{error.statusText}</h4>
            </div>
            <div className="flex flex-col gap-2">
                <p>Ocorreu um erro. Veja mais detalhes abaixo.</p>
                <p className="font-bold">{error.data}</p>
            </div>
        </div>
    )
}
