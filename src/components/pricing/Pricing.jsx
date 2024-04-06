import React from "react";
import style from "./Pricing.module.css"

const Pricing = () => {
  return (
    <div className={style["pricing-page-container"]}>
      <h1 className={style["pricing-title"]}>I offer these packages: </h1>
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
           {/*    <p></p>*sharable with private link */}
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
            <p>This package is great if you need to build a model portfolio.</p>
      {/*   <p></p><p></p>*sharable with private link */}
          </div>
        </div>
        <div className={style["pricing-footer"]}>
        
<p></p>
After the session you will be sent a password protected online gallery with the images to select your favourites or to share  the link with your agent.
<br></br>The images of your choosing will be delivered to your email once they have been slightly retouched to enhance your own natural beauty.
<p></p>
You have the option to choose more images for £30 per image.
<p></p>

If you would require more time and several outfit changes there will be an extra fee.
<br></br>Makeup artist and stylist are available on requruest at an added charge.
<br></br><br></br>
The gallery will be saved for 6 months in case you choose to order more images in the future.

        </div>
      </div>
    </div>
  )
}

export default Pricing;