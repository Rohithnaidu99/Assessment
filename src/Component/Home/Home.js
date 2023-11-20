import React from 'react';
import About from './About';
import Products from './Products';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:8800/products"


const Home = () => {
    let navigate = useNavigate();

    const Products = () => {
        console.log()
        fetch(url,{
            method: 'Get',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
        .then(navigate(`/Products`))
    }

    return(
        <>
            <div id="search">
               <About/>
               <button className='btn btn-success' onClick={About}>
                                About
                        </button>
               <Products/>
               <button className='btn btn-success' onClick={Products}>
                                Products
                        </button>
            </div>
            <div>
                <h1>
                    About: This Application Provides Information about the Products.
                </h1>
            </div>
        </>
    )
}

export default Home;