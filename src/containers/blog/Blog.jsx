import React from "react";
import './blog.css'
import {Articulo} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog =() =>{
    return(
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text"> Está pasando de todo, por lo que hacemos un blog sobre ello</h1>
            </div>
            <div className="gpt3__blog-container">

                <div className="gpt3__blog-container_groupA">
                    <Articulo imgUrl={blog01} date="Sep 26, 2021" titulo="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>

                <div className="gpt3__blog-container_groupB">
                    <Articulo imgUrl={blog02} date="Sep 26, 2021" titulo="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Articulo imgUrl={blog03} date="Sep 26, 2021" titulo="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Articulo imgUrl={blog04} date="Sep 26, 2021" titulo="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Articulo imgUrl={blog05} date="Sep 26, 2021" titulo="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    )
}

export default Blog;