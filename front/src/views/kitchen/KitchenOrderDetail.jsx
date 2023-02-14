import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function KitchenOrderDetail() {

    const { id } = useParams();
    const [order, setOrder] = useState({ products: [] });
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    function getProducts() {
    fetch('http://localhost:3002/api/products').then((res) => {
        res.json().then((json) => {
        setProducts(json);
        });
    });
    }

    function getIngredients() {
    fetch('http://localhost:3002/api/ingredients').then((res) => {
        res.json().then((json) => {
        setIngredients(json);
        });
    });
    }

    useEffect(() => {
    getIngredients();
    getProducts();

    fetch(`http://localhost:3002/api/order/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setOrder(data);
        });
    }, [id]);


    if (order.products.length > 0) {
    console.log(
        order.products.map((product) => {
        return product;
        })
    );
    }
    

    return (
        <>
            <Header/>
        
            <div className="w-full mt-12 flex flex-col items-center">

            <h1 className="text-4xl font-bold">Order details</h1>

                <div className="w-6/12 h-4 mt-14 text-center text-white font-bold text-xl">

                    <div className="bg-white p-6 rounded-lg shadow-lg mt-14">
                                <div className="text-gray-700 font-bold">Status : {order.status}</div>
                                    <div className="text-gray-700 font-bold">Price : {order.price}</div>
                                    <div className="text-gray-700 font-bold">Created at : {order.created_at}</div>
                                    
                                    <ul>
                                    {order.products.map((product) => (
                                        <li key={product} className="text-black flex justify-center flex-col mt-20">
                                          {(products.find((i) => i._id === product)?.name || "error")}
                                          <img className="width-[50%] mt-12" src={(products.find((i) => i._id === product)?.url_image || "error")} alt=""/>
                                        </li>
                                    ))}
                                    </ul>
                    </div>

                </div>

            </div>            
        </>
    )
}