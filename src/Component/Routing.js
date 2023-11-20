import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home';
import About from './Home/About';
import Products from './Home/Products';
import AddProducts from './Home/AddProducts';
import ViewProducts from './Home/ViewProducts';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
              <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>  
                    <Route path="About" element={<About/>}/>
                    <Route path="Products" element={<Products/>}/>  
                    <Route path="AddProducts" element={<AddProducts/>}/> 
                    <Route Path="ViewProducts" element={<ViewProducts/>}/>
                    </Route>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}

export default Routing

