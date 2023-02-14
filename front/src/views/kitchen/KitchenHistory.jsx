import Header from "./Header";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function KitchenHistory() {

  const [orders, setOrders] = useState([])

  function getOrders() {

    fetch('http://localhost:3002/api/orders').then((res) => {
        res.json().then((json) =>{
            setOrders(json)
            console.log(orders)
        })
      })

    }

    useEffect(() => {
  
      getOrders()
  
  }, [])

    return (
        <>
          <Header />

          <div className="w-full mt-12 flex flex-col items-center">
              <h1 className="text-4xl font-bold">History</h1>

              <div className="w-8/12 h-4 mt-14 text-center text-white font-bold text-xl">
                  {orders && orders.length === 0 ? (

                    <p>There are no orders for the moment !</p>

                  ) : (
                    <ul>
                        {orders
                        .filter((order) => order.status === "Served")
                        .map((order) => (
                          <div className="bg-white p-6 rounded-lg shadow-lg mt-14">
                            <div className="text-gray-700 font-bold">Status : {order.status}</div>
                            <div className="text-gray-700 font-bold">Price : {order.price}</div>
                            <div className="text-gray-700 font-bold">Created at : {order.created_at}</div>
                            <ul className="mt-4">
                            </ul>
                            <div className="mt-4 flex justify-center">
                            <Link to={`/kitchen/order-detail/${order._id}`}>
                              <button className="bg-orange-500 ml-10 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                                See details
                              </button>
                            </Link>
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
