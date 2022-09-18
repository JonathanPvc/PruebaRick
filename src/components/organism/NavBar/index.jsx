import React from 'react';

import CustomButton from '../../atom/CustomButton';

export const NavBar = ({ title }) => {

   
    return (

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase " href="/">{title}</a>
          <CustomButton />
        
        </div>
      
      </nav>

    )
  };


