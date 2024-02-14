/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'; 

function Menu() {
  return (
    <div className='container'>
        <nav className='navbar d-flex justify-content-center'> 
            <ul className='navbar-nav' style={{padding:'0px 10px'}}>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                </li>
            </ul>
            <ul className='navbar-nav' style={{padding:'0px 10px'}}>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/episodios'>
                        Episodios
                    </Link>
                </li>
            </ul>
            <ul className='navbar-nav' style={{padding:'0px 10px'}}>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/actores'>
                        Actores
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu