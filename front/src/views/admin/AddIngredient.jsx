import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import Header from "./Header";

export default function AddIngredient() {

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    function addIngredient(data){
        fetch('http://localhost:3002/api/ingredient', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          }, 
          body: JSON.stringify({
            name: data.name,
            url_image: data.url_image,
            price: data.price,
            stock: data.stock,
            type: data.type
          })
        }).then((res) => {
          if (res.status === 200) {
            navigate('/admin/ingredients');
          }
        })
      }
    

    const onSubmit = data => addIngredient(data);

    return (
        <>

            <Header/>

            <div className="h-full w-full flex justify-center items-center">
                <div className="h-4/6 w-3/12  flex-row">
                    


                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl mt-[20%]">

                        <h1 className="text-center text-xl font-bold mb-6">Adding an ingredient</h1> 

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                        </label>
            
                        <input {...register("name", { required: true })} placeholder="Name..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.email && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Type ("food" or "sauce")
                        </label>

                        <input {...register("type", { required: true })} placeholder="Stock..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        URL image (must be with a 200px width)
                        </label>

                        <input {...register("url_image", { required: true })} placeholder="URL..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Price
                        </label>

                        <input {...register("price", { required: true })} placeholder="Price..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Stock
                        </label>

                        <input {...register("stock", { required: true })} placeholder="Stock..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
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