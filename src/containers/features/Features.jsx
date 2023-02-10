import React from "react";
import './features.css'
import {Feature} from '../../components'
const FeaturesData = [
    {
        titulo:'Improving end distrusts instantly ',
        texto: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        titulo:'Become the tended active',
        texto: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        titulo:'Message or am nothing',
        texto: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        titulo:'Really boy law county',
        texto: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    },
]
const Features =() =>{
    return(
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">el futuro el ahora y solo necesitas asimilarlo. Adentrate en el futuro hoy</h1>
                <p>solicita acceso anticipado para ingresar</p>
            </div>
            <div className="gpt3__features-container">
                {FeaturesData.map((item, index) => <Feature titulo={item.titulo} texto={item.texto} key={item.titulo+index}/>)}
            </div>
        </div>
    )
}

export default Features;