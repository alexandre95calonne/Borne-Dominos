import Header from './Header';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Products() {

    const [products, setProducts] = useState([])
    const [ingredients, setIngredients] = useState([])

    function getProducts() {

      fetch('http://localhost:3002/api/products').then((res) => {
        res.json().then((json) =>{
            setProducts(json)
        })
      })
    }

    function getIngredients() {

      fetch('http://localhost:3002/api/ingredients').then((res) => {
        res.json().then((json) =>{
            setIngredients(json)
            console.log(json)
        })
      })
    }

    function deleteProduct(id) {
      fetch(`http://localhost:3002/api/product/${id}`, {
        method: 'DELETE',
      })
      .then((res) => {
        console.log('Status : ' + res.status);
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
    }
  

  useEffect(() => {
  
      getProducts()
      getIngredients()
  
  }, [])

    return (
        <>

          <Header/>

          <div className="w-full flex justify-end">
            <Link to="/admin/add-product">
              <button className="mt-12 mr-14 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add product
              </button>
            </Link>
          </div>
          
          <div className="w-full flex justify-center">

              <table className="table-auto w-8/12 text-left mt-12">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Ingrédients</th>
                    <th className="px-4 py-2">Prix</th>
                    <th className="px-4 py-2 w-12"></th>
                    <th className="px-4 py-2 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.length > 0 && products.map(product => ( 
                    <tr className="bg-white text-gray-800" key={product._id}>
                      <td className="border px-4 py-2 flex justify-center">
                        <img src={product.url_image} alt="product-image"/>
                      </td>
                      <td className="border px-4 py-2">{product.name}</td>
                      <td className="border px-4 py-2">
                        <ul>
                          {product.ingredients.map((ingredient) => (
                              <li key={ingredient}>
                                  {(ingredients.find((i) => i._id === ingredient)?.name || "error")}
                              </li>
                          ))}
                        </ul>
                      </td>
                      <td className="border px-4 py-2">{product.price}€</td>
                      <td className="border px-4 py-2">
                      <Link to={`/admin/update-product/${product._id}`}>
                          <button className="bg-orange-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Update
                          </button>
                        </Link> 
                      </td>
                      <td className="border px-4 py-2">
                        <button className="bg-red-600 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded" onClick={() => deleteProduct(product._id)}>
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