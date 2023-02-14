import Header from './Header';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Ingredients() {

    const [ingredients, setIngredients] = useState([])

    function getIngredients() {

      fetch('http://localhost:3002/api/ingredients').then((res) => {
    res.json().then((json) =>{
        setIngredients(json)
    })
  })

  }

  function deleteIngredient(id) {
    fetch(`http://localhost:3002/api/ingredient/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      console.log('Le statut de la réponse est : ' + res.status);
      // faire autre chose ici, si nécessaire
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de l\'ingrédient : ', error);
    });
  }



  useEffect(() => {
  
      getIngredients()
  
  }, [])

    return (
        <>

          <Header/>

          <div className="w-full flex justify-end">
            <Link to="/admin/add-ingredient">
              <button className="mt-12 mr-14 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add ingredient
              </button>
            </Link>
          </div>
          
          <div className="w-full flex justify-center">

              <table className="table-auto w-8/12 text-left mt-12">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Prix</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2 w-12"></th>
                    <th className="px-4 py-2 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients && ingredients.length > 0 && ingredients.map(ingredient => ( 
                    <tr className="bg-white text-gray-800">
                      <td className="border px-4 py-2 flex justify-center">
                        <img src={ingredient.url_image} alt="ingredient-image"/>
                      </td>
                      <td className="border px-4 py-2">{ingredient.name}</td>
                      <td className="border px-4 py-2">{ingredient.price}</td>
                      <td className="border px-4 py-2">{ingredient.stock}</td>
                      <td className="border px-4 py-2">
                        <Link to={`/admin/update-ingredient/${ingredient._id}`}>
                          <button className="bg-orange-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Update
                          </button>
                        </Link> 
                      </td>
                      <td className="border px-4 py-2">
                          <button className="bg-red-600 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded" onClick={() => deleteIngredient(ingredient._id)}>
                            Delete
                          </button>
                      </td>
                    </tr>
                   ))} 
                </tbody>
              </table>

          </div>

              
        </>
    )

}