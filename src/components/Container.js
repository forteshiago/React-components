import React from "react";

import Product from "./Product";
import "../assets/global.css";

import img01 from "../assets/images/lang01.png"
import img02 from "../assets/images/lang02.png"

function Container() {

    const name0 = "C";
    const biography0 = `A linguagem foi chamada "C", porque suas características foram obtidas a partir de uma linguagem anteriormente chamada de "B", que de acordo com Ken Thompson era a versão reduzida da linguagem de programação BCPL.`
    const alt0 = "Logo linguagem C"

    const name1 = "C Sharp"
    const biography1 = `Janeiro de 1999, uma equipe de desenvolvimento foi formada por Anders Hejlsberg, que fora escolhido pela Microsoft para desenvolver a linguagem. Dá-se início à criação da linguagem chamada Cool, renomeada e apresentada como C#.`
    const alt1 = "Logo linguagem C Sharp"

    return(
        <div id="container">
            <Product name={name0} bio={biography0} img={img01} alt={alt0}/>
            <Product name={name1} bio={biography1} img={img02} alt={alt1}/>
            <Product name={name}/>
            <Product name={name}/>
            <Product name={name}/>
        </div>
    )
}

export default Container;
