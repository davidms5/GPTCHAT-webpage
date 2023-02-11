import React from "react";
import './articulo.css'

const Articulo =({imgUrl, date, titulo}) =>{
    return(
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="imagen blog" />

            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{titulo}</h3>
                </div>
                <p>Leer artículo completo...</p>

            </div>
        </div>
    )
}

export default Articulo;