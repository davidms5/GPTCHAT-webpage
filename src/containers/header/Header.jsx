import React from "react";
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header =() =>{
    return(
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
            <h1 className="gradient__text"> let's create something amazing with GPT-3 OpenAI</h1>
            <p> a world of possibilities opens up for us. Come and experience what it has to offer
                 the vast and growing world of artificial intelligence
                </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="email"/>
                <button type="button"> inicio </button>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="personas" />
                    <p>1,600 people visited the site in the last 24 hours</p>
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