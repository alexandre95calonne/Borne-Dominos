import { useForm } from "react-hook-form";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';



export default function AddProduct() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate()

    function addIngredient(data){

        let ingredientss = []
        ingredientss.push(data.ingredients)
        console.log(ingredientss)

        fetch('http://localhost:3002/api/ingredient', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          }, 
          body: JSON.stringify({
            name: data.name,
            url_image: data.url_image,
            price: data.price,
            ingredients: ingredientss
          })
        }).then((res) => {
          res.json().then((json) => {
            if (json.status === 200) {
              navigate('/admin/ingredients');
            }
          })

        })
      }
    

    const onSubmit = data => addIngredient(data);

    return (
        <>

            <Header/>

            <div className="h-full w-full flex justify-center items-center">
                <div className="h-4/6 w-3/12  flex-row">
                    


                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl mt-[20%]">

                        <h1 className="text-center text-xl font-bold mb-6">Adding a product</h1> 

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                        </label>
            
                        <input {...register("name", { required: true })} placeholder="Name..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.email && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Ingredients (must be an id)
                        </label>

                        <input {...register("ingredients", { required: true })} placeholder="Stock..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Price
                        </label>

                        <input {...register("price", { required: true })} placeholder="Price..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
                        {errors.password && <span>This field is required</span>}

                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        URL image (must be with a 463px width)
                        </label>

                        <input {...register("url_image", { required: true })} placeholder="URL..." className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight mb-5 focus:outline-none focus:bg-white focus:bg-red-600"/>
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