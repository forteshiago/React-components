import React from "react";

function Product( {name, bio, img, alt} ) {
  return(
    <div id="base-card">
      <div className="logo-card">
        <img src={img} alt={alt}/>
      </div>
      <div className="info-card">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default Product;
