import { useForm } from "react-hook-form";
//import { useNavigate } from "react-router-dom"

export default function Home() {

    //let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    /*function connexion(data){
        fetch('http://edu.project.etherial.fr/auth', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          }, 
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          })
        }).then((res) => {
          console.log('Le statut de la réponse est : ' + res.status);
        })
      }*/
    

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="h-4/6 w-3/12  flex-row">
                    


                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl mt-[20%]">

                    <div className="h-[20%] w-full pt-2 flex justify-center">
                        <img className="h-full w-[30%]" src="https://imgs.search.brave.com/B0xORaE4qCrw-xAIsVV4HC4177eT5uzWPpJqZFe91Vk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA4/L0RvbWlubyVFMiU4/MCU5OXMtTG9nby5w/bmc" alt="dominos-logo"/>
                    </div>

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                        </label>
            
                        <input {...register("email", { required: true })} placeholder="Name..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.email && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Password
                        </label>

                        <input {...register("password", { required: true })} placeholder="Password..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}
                        
                        <div className="flex justify-center mt-[5%]">
                            <input className="bg-red-600 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded" type="submit" />    
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}