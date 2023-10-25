import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
    const [cn,setCn]= useState('');
    const [dr,setDr]= useState('');
    const [fee,setFee]= useState('');
  
    const readcourse =(event) =>{
      console.log(event.target.value);
      setCn(event.target.value);
  }
  const readduration =(event) =>{
    console.log(event.target.value);
    setDr(event.target.value);
  }
  const readfee =(event) =>{
    console.log(event.target.value);
    setFee(event.target.value);
  }
  return (
    <div>
       <form>
        Course Name<input type="text" onChange={readcourse}/><br/>
        Duration<input type="number"  onChange={readduration}/><br/>
        Fee Amount<input type="number" onChange={readfee}/><br/>
        <button type="submit" ><Link to ='/Home'>SAVE</Link></button>
      </form>
    </div>
  )
}

export default Course
