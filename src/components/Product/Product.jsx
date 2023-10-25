import React, { useState } from 'react'
import './product.css'

const Product = () => {
    const [id,setId] =useState('');
    const [name,setName] =useState('');
    const [pr,setPrize] =useState('');
    const [dr,setDescription] =useState('');
    const [qty,setQty] =useState('');

    const readproductid =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setId(event.target.value);
      }
      const readproductname =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setId(event.target.value);
      }
      const readproductprize =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setId(event.target.value);
      }
      const readdescription =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setId(event.target.value);
      }
      const readpquantity =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setId(event.target.value);
      }
  return (
    <div>
        <h1>PRODUCT PAGE</h1>
        <form className='pt'>
        PRODUCT ID<input type="text" onChange={readproductid}/><br/>
        PRODUCT NAME<input type="text" onChange={readproductname}/><br/>
        PRODUCT PRIZE<input type="text" onChange={readproductprize}/><br/>
        PRODUCT DESCRIPTION<input type="text" onChange={readdescription}/><br/>
        PRODUCT QUANTITY<input type="text" onChange={readpquantity}/><br/>
       <button type="submit">SUBMIT</button><br/> 
        </form>
       
      
    </div>
  )
}

export default Product
