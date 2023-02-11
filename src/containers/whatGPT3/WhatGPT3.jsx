import React from "react";
import './whatgpt3.css'
import { Feature } from '../../components'
const WhatGPT3 =() =>{
    return(
        <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
          <div className='gpt3__whatgpt3-feature'>
            <Feature titulo='Que es GPT-3' texto='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'> las posibilidades están mas allá de tu imaginación </h1>
      <p> explore la librería </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature titulo='Chatbots' texto='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
      <Feature titulo='Knowledgebase' texto='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '/>
      <Feature titulo='Education' texto='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'/>
      </div>
            
        </div>
    )
}

export default WhatGPT3;
