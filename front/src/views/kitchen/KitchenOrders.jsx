import Header from "./Header";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function KitchenOrders() {

  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])

  function getOrders() {

    fetch('http://localhost:3002/api/orders').then((res) => {
        res.json().then((json) =>{
            setOrders(json)
        })
      })
  }

  function getProducts() {

      fetch('http://localhost:3002/api/products').then((res) => {
        res.json().then((json) =>{
            setProducts(json)
        })
      })
    }

  function getProductName(id) {

    fetch(`http://localhost:3002/api/product/${id}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(error => console.error(error));
  }

  function changeStatus(id) {
  
    fetch(`http://localhost:3002/api/order/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: "Served" }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

    useEffect(() => {
  
      getOrders()
      getProducts()

  }, [])

    return (
        <>
          <Header />

          <div className="w-full mt-12 flex flex-col items-center">
              <h1 className="text-4xl font-bold">Orders</h1>

              <div className="w-8/12 h-4 mt-14 text-center text-white font-bold text-xl">
                  {orders && orders.length === 0 ? (

                    <p>There are no orders for the moment !</p>

                  ) : (
                    <ul>
                        {orders
                        .filter((order) => order.status === "In progress")
                        .map((order) => (
                          <div className="bg-white p-6 rounded-lg shadow-lg mt-14">
                            <div className="text-gray-700 font-bold">Status : {order.status}</div>
                            <div className="text-gray-700 font-bold">Price : {order.price}</div>
                            <div className="text-gray-700 font-bold">Created at : {order.created_at}</div>
                            <ul className="mt-4">
                              {/*order.products.map((productId, index) => (
                              <li className="text-gray-700" key={index}>
                                {getProductName(productId) || "error"}
                              </li>
                            ))*/}
                            </ul>
                            <div className="mt-4 flex justify-center">
                            <Link to={`/kitchen/order-detail/${order._id}`}>
                            <button className="bg-orange-500 ml-10 text-white px-4 py-2 rounded-lg hover:bg-sky-600" onClick={() => console.log('hello')}>
                                See order details
                              </button>
                            </Link>
                              <button className="bg-green-500 ml-10 text-white px-4 py-2 rounded-lg hover:bg-sky-600" onClick={() => changeStatus(order._id)}>
                                Change status to "Served"
                              </button>
                            </div>
                          </div>
                        ))}
                    </ul>
                  )}
              </div>
          </div>
        </>
    )

}