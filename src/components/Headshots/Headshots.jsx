import style from './Headshots.module.css';
import React from 'react'

const Headshots = ({showMenu}) => {
  return (
    <div className={style["page-container"]}>
      <h1 className={style["headshots-title"]}>HEADSHOTS</h1>
      <div className={`${style["masonry-container"]} ${showMenu? style["show-menu"] : ""}`}>
        <div className={style["masonry-column"]}>
          <img className={style["masonry-image"]} src="headshots-images/Philip-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Alice-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Alice-2.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Connor-1.jpg" />
        </div>
        <div className={style["masonry-column"]}>
          <img className={style["masonry-image"]} src="headshots-images/Sophie-3.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Jonathan-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Leanne-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Michel-1.jpg" />
        </div>
        <div className={style["masonry-column"]}>
          <img className={style["masonry-image"]} src="headshots-images/Kat-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Michelle-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Patrick-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Sebastian-1.jpg" />
        </div>
        <div className={style["masonry-column"]}>
          <img className={style["masonry-image"]} src="headshots-images/Sophie-2.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Ali-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Trevor-1.jpg" />
          <img className={style["masonry-image"]} src="headshots-images/Benson-1.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Headshots;