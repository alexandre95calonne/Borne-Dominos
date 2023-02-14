import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home'

import Products from './views/admin/Products'
import Ingredients from './views/admin/Ingredients'
import AddProduct from './views/admin/AddProduct';
import AddIngredient from './views/admin/AddIngredient';
import AdminHistory from './views/admin/AdminHistory';
import UpdateIngredient from './views/admin/UpdateIngredient';
import UpdateProduct from './views/admin/UpdateProduct';
import OrderDetail from './views/admin/OrderDetail';

import KitchenOrders from './views/kitchen/KitchenOrders';
import KitchenHistory from './views/kitchen/KitchenHistory';
import KitchenOrderDetail from './views/kitchen/KitchenOrderDetail';

import HomeClient from './views/client/HomeClient';
import ValidateOrder from './views/client/ValidateOrder';
import ClientOrderDetail from './views/client/DetailOrder';
import OwnProduct from './views/client/OwnProduct';
import ClientUpdateProduct from './views/client/ClientUpdateProduct';

import Card from './views/Test';



function App() {
  return (
    <BrowserRouter>
                
                <Routes>

                <Route path='/' element={<Home />}></Route>                  
                  
                  {/* Admin */}

                  <Route path='/admin' element={<Products/>}></Route>
                  <Route path='/admin/add-product' element={<AddProduct />}></Route>
                  <Route path='/admin/ingredients' element={<Ingredients />}></Route>
                  <Route path='/admin/add-ingredient' element={<AddIngredient />}></Route>
                  <Route path='/admin/history' element={<AdminHistory />}></Route>
                  <Route path='/admin/update-ingredient/:id' element={<UpdateIngredient />}></Route>
                  <Route path='/admin/update-product/:id' element={<UpdateProduct />}></Route>
                  <Route path='/admin/order-detail/:id' element={<OrderDetail />}></Route>


                  {/* Kitchen */}

                  <Route path='/kitchen' element={<KitchenOrders />}></Route>
                  <Route path='/kitchen/history' element={<KitchenHistory />}></Route>
                  <Route path='/kitchen/order-detail/:id' element={<KitchenOrderDetail />}></Route>

                  {/* Client */}

                  <Route path='/client' element={<HomeClient />}></Route>
                  <Route path='/client/order-detail' element={<ClientOrderDetail/>}></Route>
                  <Route path='/client/validate' element={<ValidateOrder />}></Route>
                  <Route path='/client/own-product' element={<OwnProduct />}></Route>
                  <Route path='/client/update-product/:id' element={<ClientUpdateProduct />}></Route>
                  


                  <Route path='/test' element={<Card />}></Route>

                </Routes>

    </BrowserRouter>
  );
}

export default App;
