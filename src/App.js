import React from "react";
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HeaderModule from "./components/header/header.module";
import FooterModule from "./components/footer/footer.module";

import Admin from "./pages/admin/admin";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Goods from "./pages/admin/goods/goods";
import News from "./pages/admin/news/news";
import Users from "./pages/admin/users/users";

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <HeaderModule/>
                <main className='main'>
                    <Routes>
                        <Route exact path='/login' element={<Login />}/>
                        <Route exact path='/register' element={<Register/>}/>
                        <Route exact path='/profile' element={<Profile/>}/>
                        <Route exact path='/shop' element={<Shop/>}/>
                        <Route exact path='/cart' element={<Cart/>}/>
                        <Route exact path='/admin' element={<Admin/>}/>
                        <Route exact path='/admin/goods' element={<Goods/>}/>
                        <Route exact path='/admin/news' element={<News/>}/>
                        <Route exact path='/admin/users' element={<Users/>}/>
                    </Routes>
                </main>
                <FooterModule/>
            </div>
        </BrowserRouter>
    );
};

export default App;