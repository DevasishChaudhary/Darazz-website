import React from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";


const Darazz = () => {
  return (
    <div>
        <div id='navbar'>
            <div className='firstNavi'>
                <ul>
                <li><a href="Save More on App">Save More on App</a></li>
                <li><a href="Become a Seller">Become a Seller</a></li>
                <li><a href="Help & Support">Help & Support</a></li>
                <li><a href="Login">Login</a></li>
                <li><a href="Sign Up">Sign Up</a></li>
                <li><a href="भाषा परिवर्तन">भाषा परिवर्तन</a></li>
            </ul>
            </div>

            <div className='secondNavi'>
                <div className='logo pointer'>
                <img src="./img/darazlogo.png" alt="logo"/>
            </div>
            <search className='searchBar'>
                <input placeholder="Search in Daraz" />
                <i className='searchIcon pointer'>
                    <CiSearch className='searchColor' />
                    
                    </i>
                    <i className='cartIcon pointer'>
                        <CiShoppingCart className='cartColor'/>
                    </i>
            </search>
            
            </div>
        </div>

        <div id='photo'>
            <img src="" alt="" />

        </div>
     </div>
    
  )
}

export default Darazz