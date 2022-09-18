import React from 'react';
import "./styles.css"
const CustomButton = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      } 
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit" className='btn btn-custom btn-primary'>Capitulos </button>
      
    </form>
  )
}


  




export default CustomButton;