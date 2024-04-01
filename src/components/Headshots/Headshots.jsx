import style from './Headshots.module.css';
import React from 'react'

const Headshots = () => {
  return (
    <div className={style["page-container"]}>
      <h1>HEADSHOTS</h1>
      <div className={style["masonry-container"]}>
        <div className={style["masonry-column"]}>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
        </div>
        <div className={style["masonry-column"]}>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
        </div>
        <div className={style["masonry-column"]}>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
        </div>
        <div className={style["masonry-column"]}>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
          <div className={style["masonry-image"]}></div>
        </div>
      </div>
    </div>
  )
}

export default Headshots;