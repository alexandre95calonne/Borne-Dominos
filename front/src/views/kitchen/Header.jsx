import { Link } from "react-router-dom"

export default function Header() {

    return (

        <>
            <div className="h-32 bg-slate-800 flex ">
                <img className="h-[90%] w-32 pt-2 ml-3" src="https://imgs.search.brave.com/B0xORaE4qCrw-xAIsVV4HC4177eT5uzWPpJqZFe91Vk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA4/L0RvbWlubyVFMiU4/MCU5OXMtTG9nby5w/bmc" alt="dominos-logo"/>

                <div className="text-white text-lg flex justify-between ml-10 items-center">
                    <Link to="/kitchen"><p className="pl-4">Orders</p></Link>
                    <Link to="/kitchen/history"><p className="pl-6">History</p></Link>
                </div>
            </div>
        </>

    )
}