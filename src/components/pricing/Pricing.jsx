import React from "react";
import style from "./Pricing.module.css"

const Pricing = () => {
  document.querySelector('html').style.setProperty("background-color", "rgb(3, 0, 23)");

  return (
    <div className={style["pricing-page-container"]}>
      <h1 className={style["pricing-title"]}>Choose your experience: </h1>
      <div className={style["pricing-list"]}>
        <div className={style["pricing-1-container"]}>
          <div className={style["pricing-1-image-container"]}>
            <img src="pricing-images/Alice-3-2.jpg"></img>
          </div>
          <div className={style["pricing-1"]}>
            <div className={style["pricing-1-title"]}>
              <h2>THE ONE</h2>
              <h3>£300</h3>
            </div>
            <ul>
              <li>One hour session</li>
              <li>Two different backdrops</li>
              <li>Three retouched images</li>
              <li>Online gallery available within 48 hours</li>
            </ul>
           {/* <p></p>*sharable with private link */}
          </div>
        </div>
        <div className={style["pricing-2-container"]}>
          <div className={style["pricing-2"]}>
            <div className={style["pricing-2-title"]}>
              <h2>THE TWO</h2>
              <h3>£450</h3>
            </div>
            <ul>
              <li>Two hour session</li>
              <li>Three different setups, lighting or backdrops <br></br>(in studio/outside)</li>
              <li>Five retouched images</li>
              <li>Online gallery available within 48 hours</li>
            </ul>
          {/* <p></p>*sharable with private link  */}  
          </div>
          <div className={style["pricing-3-image-container"]}>
            <img src="headshots-images/Rose-7.jpg"></img>
          </div>
        </div>
        
        <div className={style["pricing-3-container"]}>
        <div className={style["pricing-3-image-container"]}>
            <img src="headshots-images/Benson-1.jpg"></img>
          </div>
          <div className={style["pricing-3"]}>
            <div className={style["pricing-3-title"]}>
              <h2>THE THREE</h2>
              <h3>£650</h3>
            </div>
            <ul>
              <li>Half day session</li>
              <li>Freedom to choose any backdrop or colorama <br></br>(in studio/outside)</li>
              <li>Ten retouched images</li>
              <li>Online gallery available within 48 hours</li>
            </ul>
            {/* <p></p><p></p>*sharable with private link */}
          </div>
        </div>
        <div className={style["pricing-footer"]}>
          <h4>Additional information</h4>
          <p>After our session, you will receive access to a password-protected online gallery containing the images.</p>
          <p>You can use this gallery to select your favorite images or share the link with your agent.</p>
          <br></br>
          <p>The images you choose will be delivered to your email after they have been lightly retouched to enhance your natural beauty.</p>
          <p>You also have the option to select additional images at a cost of £30 per image.</p>
          <br></br>
          <p>If you require more time or want to incorporate several outfit changes, there will be an extra fee.</p>
          <p>Additionally, a makeup artist and stylist are available upon request for an added charge.</p>
          <br></br>
          <p>The gallery will be saved for 6 months in case you decide to order more images in the future.</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing;