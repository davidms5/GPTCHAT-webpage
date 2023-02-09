import React from "react";
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header =() =>{
    return(
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
            <h1 className="gradient__text"> vamos a crear algo increible con GPT-3 OpenAI</h1>
            <p> un mundo de posibilidades se abre abre nosotros. Ven y experimenta con lo que tiene que ofrecer
                el vasto y creciente mundo de la inteligencia artificial
                </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="email"/>
                <button type="button"> inicio </button>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="personas" />
                    <p>1,600 personas visitaron el sitio en las ultimas 24 horas</p>
                </div>
                <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;