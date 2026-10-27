import { NavLink } from "react-router-dom"
import navigationInfo from "../data/navigations";


export default function ShopNavigation() {

    return (
        <aside className="text-black md:text-white sticky z-[11] md:static top-0 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-[300px] sm:w-full md:w-[250px] xl:w-[350px] font-montserrat gap-y-10 xl:gap-y-12 py-8 px-6 xl:px-12">
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Explorar</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(0, 2).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#22D3EE] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Lançamentos</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(2, 5).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#22D3EE] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Tops</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(5, 8).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#22D3EE] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Plataformas</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(8, 12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#22D3EE] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Gêneros</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#22D3EE] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )}