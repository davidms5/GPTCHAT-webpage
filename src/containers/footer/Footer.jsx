import React from "react";
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer =() =>{
    return(
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text"> quieres ingresar al futuro antes que nadie?</h1>
            </div>

            <div className="gpt3__footer-btn">
            <p>solicita acceso anticipado</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="logo" />
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Redes Sociales</p>
                    <p>Counters</p>
                    <p>Contactos</p>
                    
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Compañia</h4>
                    <p>Terminos y Condiciones</p>
                    <p>
                        Politica De Privacidad
                    </p>
                    <p>Contactos</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Contáctanos</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
            
        </div>
    )
}

export default Footer;