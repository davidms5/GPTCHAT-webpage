import React, {useState} from "react";
import './Navbar.css';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const NewMenu = () =>(
  <>
   <p><a href="#home"> inicio </a></p>
   <p><a href="#wgpt3"> que es GPT3?</a></p>
   <p><a href="#posibility"> Open AI </a></p>
   <p><a href="#features"> casos de estudio </a></p>
   <p><a href="#blog"> librería </a></p>
  </>
)

const Navbar =() =>{
  const [menu, setMenu] = useState(false);

    return(
      
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                  <NewMenu/>
                </div>
            </div>
                <div className="gpt3__navbar-sign">
               <p> ingresar </p> 
                <button type='button'> registrarse </button>
              </div>
              <div className='gpt3__navbar-menu'>
                {menu ? <RiCloseLine color='#fff' size={27} onClick={() => setMenu(false)}/>
                : <RiMenu3Line color='#fff' size={27} onClick={()=> setMenu(true)}/>}

                {menu && (
                  <div className='gpt3__navbar-menu_container scale-up-center'> 
                  <div className='gpt3__navbar-menu_container-links'>
                  <NewMenu/>
                  <div className="gpt3__navbar-menu_container-links-sign">
               <p> ingresar </p> 
                <button type='button'> registrarse </button>
                  </div>
                  </div>
                  </div>
                )}
               </div>
        </div>
    )
}

export default Navbar;
