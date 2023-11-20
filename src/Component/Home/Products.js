import React,{useState,useEffect} from 'react';
import axios from 'axios';
import About from './About';
import DisplayProducts from "./DisplayProducts";
import { useNavigate } from 'react-router-dom';




const url = "http://localhost:8800/products"

const Products = () => {

    let navigate = useNavigate();
    
    const [Products,setProducts] = useState();


   useEffect(() => {
        axios.get(url).then((res) => {setProducts(res.data)})
    },[])
    

    
     const AddProducts = () => {
        console.log()
        fetch(url,{
            method: 'GET',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
        .then(navigate(`/AddProducts`))
    }
    const sumbit = () => {
        console.log ()
    }

    return(
        <>
         <div id="search">
               <About/>
               <button className='btn btn-success' onClick={About}>
                                About
                        </button> &nbsp;&nbsp;
               {/* <Products/> */}
               <button className='btn btn-success' onClick={sumbit}>
                                Products
                        </button>
            </div>
        {/* <div>
        <link to={`/Products`}></link>
        
        </div> */}

        
        <button className='btn btn-success' onClick={AddProducts}>
                                Add Products
        </button>
        
        <div>
         
          <DisplayProducts productdata={Products}/> 
        </div>



        
                        
        </>
 
    )
    
}

export default Products;