import React,{useState} from 'react';
import About from './About';

import { useNavigate } from 'react-router-dom';

const url = "http://localhost:8800/products"

const AddProducts = () => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
    const handleNameChange = (event) => {
        const newName = event.target.value;
    
        // Basic validation: Check if the name is not empty
        if (newName.trim() === '') {
          setError('Product Name is required');
        } else {
          setError('');
        }
    
        // Update the name in the state
        setName(newName);
      };
      const handlePriceChange = (event) => {
        const newPrice = event.target.value;
    
        // Basic validation: Check if the price is a valid number
        if (!isValidPrice(newPrice)) {
          setError('Please enter a valid price');
        } else {
          setError('');
        }
    
        // Update the price in the state
        setPrice(newPrice);
      };
    
      const isValidPrice = (value) => {
        // Use a regular expression to check if the value is a valid number
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(value);
      };
      const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
    
        // Basic validation: Check if the quantity is a valid positive number
        if (!isValidQuantity(newQuantity)) {
          setError('Please enter a valid quantity');
        } else {
          setError('');
        }
    
        // Update the quantity in the state
        setQuantity(newQuantity);
      };
    
      const isValidQuantity = (value) => {
        // Use a regular expression to check if the value is a valid positive number
        const regex = /^[1-9]\d*(\.\d+)?$/;
        return regex.test(value);
      };
    

    const initialValues = {
       
      product_name: "Epson Printer",
        quantity: "1",
        price: "9500",
       
        
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
    };
    const checkout = () => {
      console.log(values)
      fetch(url,{
          method: 'POST',
          headers:{
              'accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(values)
      })
      .then(navigate(`/Products`))
  }
    
    const Products = () => {
        console.log()
        fetch(url,{
            method: 'GET',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
        .then(navigate(`/Products`))
    }
    // const Products = () =>{
    //   console.log(Products)
    // }
   
   
    return(
        <>
        <br></br>
        <div id="search">
               
               <button className='btn btn-light' onClick={About}>
                                About 
                        </button>
                        
               <button className='btn btn-light' onClick={Products}>
                                Products
                        </button>
        </div>
        <div>
        <h1>Add Products</h1>
        </div>
           
         <div className="input-group mb-3">
                                <label for="fname" className="control-label"></label>
                                <input className="form-control" id="fname" placeholder='Enter Product Name'
                                name="product_name" value={values.product_name} onChange={(event) => {
                                    handleNameChange (event)   
                                    handleInputChange(event)
                                }}/>
                                 {error && <p style={{ color: 'red' }}>{error}</p>}
                              
        </div> 
        <br></br>
             
        <div className="input-group mb-3 ">
                                <label for="fname" className="control-label"></label>
                                <input className="form-control" id="fname" placeholder='Enter Quantity'
                                name="quantity"value={values.quantity} onChange={(event) => {
                                    handleInputChange(event)   
                                    handleQuantityChange(event)
                                }}/>
                                 {error && <p style={{ color: 'red' }}>{error}</p>}
         </div>
         <br></br>
        <div className="input-group mb-3">
                                <label for="fname" className="control-label"></label>
                                <input className="form-control" id="fname" placeholder='Enter Price'
                                 name="price"value={values.price}  onChange={(event) => {
                                    handleInputChange(event)   
                                    handlePriceChange(event)
                                }}/>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
        </div> 
        <br></br>
        <button className='btn btn-secondary' onClick={checkout}>
                                Submit
         </button>   
            
                                                                                                                                                              
        </>
    )
}

export default AddProducts;
