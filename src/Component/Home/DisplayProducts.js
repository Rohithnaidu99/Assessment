import React from 'react';
import { useNavigate } from 'react-router-dom';

 
const url = "http://localhost:8800/products"
const Display = (props) => {

    let navigate = useNavigate()
    
    const checkout = () => {      
        (navigate(`/ViewProducts`))
    }
    function showAlert() {
        alert('Are you sure want to view the details?');
      }
    

    const renderData = ({productdata}) => {
        if(productdata){
            return productdata.map((item) => {
                
                return(
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td onClick={() => {
                          showAlert();
                          checkout();
                           }}>{item.product_name} </td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })
        }
    }

    return(
       

<div style={{ position: 'absolute', top: '140px', left: '30px', right: '1100px', bottom: '350px',padding:'10px',borderRadius: '5px',border: '1px solid ' }}>
            
<table className="table table-striped">
    <thead>
        <tr>
        {/* <th>ID</th> */}
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        </tr>
    </thead>
    <tbody>
     
        
        {renderData(props)}
        
    </tbody>
</table>


</div>

    )

}

export default Display;