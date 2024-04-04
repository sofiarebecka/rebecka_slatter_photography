import React from "react";
import style from "./Pricing.module.css"

const Pricing = () => {
  return (
    <div className={style["pricing-page-container"]}>
      <h1 className={style["pricing-title"]}>Rates & Pricing</h1>
      <div className={style["pricing-list"]}>
        <div className={style["pricing-1-container"]}>
          <div className={style["pricing-1-image-container"]}>
            <img src="pricing-images/Alice-3-2.jpg"></img>
          </div>
          <div className={style["pricing-1"]}>
            <div className={style["pricing-1-title"]}>
              <h2>The Artist</h2>
              <h3>£300</h3>
            </div>
            <ul>
              <li>Basic styling with hair and makeup (if needed)</li>
              <li>4 different outfits</li>
              <li>2 different backdrops (in studio and/or outside)</li>
              <li>An online gallery with the jpegs from the shoot for you to select your chosen images</li>
              <li>10-15 of your favorite images retouched and ready for print and web</li>
            </ul>
            <p>I am happy to discuss the prices with you - if it's more than two models in one day <br/>I can do discounted rates. Retouched photos are usually delivered within 3 weeks.</p>
          </div>
        </div>
        <div className={style["pricing-2-container"]}>
          <div className={style["pricing-2"]}>
            <div className={style["pricing-2-title"]}>
              <h2>The Mentor</h2>
              <h3>£600</h3>
            </div>
            <p>blabla</p>
            <p>blabla</p>
            <p>blabla</p>
            <p>blabla</p>
          </div>
          <div className={style["pricing-2-image-container"]}>
            <img src="headshots-images/Benson-1.jpg"></img>
          </div>
        </div>
        <div className={style["pricing-footer"]}>

        </div>
      </div>
    </div>
  )
}

export default Pricing;