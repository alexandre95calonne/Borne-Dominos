export default function HomeClient() {

    return (
        <>
            <div className="h-screen w-screen flex">
                <div className="h-full w-10/12">

                <h1>Products</h1>

                </div>

                <div className="h-full w-2/12 bg-slate-300 flex flex-col items-center">

                    <div className="h-[10%] w-full mt-12 flex justify-center">
                        <img className="h-full w-[35%]" src="https://imgs.search.brave.com/B0xORaE4qCrw-xAIsVV4HC4177eT5uzWPpJqZFe91Vk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA4/L0RvbWlubyVFMiU4/MCU5OXMtTG9nby5w/bmc" alt="dominos-logo"/>
                    </div>

                    <div className="h-full w-full flex flex-col items-center ">

                        <h1 className="text-center mt-14 text-2xl font-bold">Your order</h1>

                        <div className="h-[70%] w-[85%] border mt-10">
                            
                        </div>

                        <div className="h-[10%] w-[80%] mt-10 flex justify-around">

                        <button className="h-[70%] bg-orange-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Details
                          </button>

                          <button className=" h-[70%] bg-green-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Validate
                          </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}