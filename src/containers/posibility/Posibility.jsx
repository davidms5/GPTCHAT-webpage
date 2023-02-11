import React from "react";
import './posibility.css'
import possibilityImage from '../../assets/possibility.png';
const Posibility =() =>{
    return(
        <div className="gpt3__possibility section__padding" id="posibility">
            <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
            <h4>solicita acceso anticipado para ingresar</h4>
            <h1 className="gradient__text"> Las posibilidades estan mas allá de tu imaginación</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus pariatur error, accusamus dolores optio voluptate ut culpa quasi quae eveniet, adipisci laboriosam cupiditate asperiores perspiciatis facilis, harum suscipit sit!</p>
            <h4> solicita acceso anticipado para ingresar</h4>
            </div>
           
        </div>
    )
}

export default Posibility;