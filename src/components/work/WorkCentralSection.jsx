import React from 'react'
import style from "./WorkCentralSection.module.css";
import { useState } from "react";

const WorkCentralSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState(null);
  const [visible, setVisible] = useState('visible');

  const imageFiles = [
    "AMELIA_286.jpg",
    "AMELIA_350.jpg",
    "AMELIA_233.jpg",
    "AMELIA_477.jpg",
    
    "Duina-1.jpg",
    "Duina-3.jpg",
    "Duina-2.jpg",   
    "Barbara-1.jpg",

    "Rose-1.jpg",
    "Rose-4.jpg",
    "PRM-guy1-2.jpg",
    "PRM-guy1-3.jpg",
   
    "Shaun-2.jpg",
    "Shaun-1.jpg",
    "Edward-1.jpg",
    "Edward-5.jpg",

    "Stephen-Sanchez-2.jpg",
    "Stephen_Sanchez_19_146a30488795a0a62e41f68340c5291f.jpg",
    "Stephen_Sanchez_24_146a30488795a0a62e41f68340c5291f.jpg",
    "DSC_0973-Edit.jpg",

    "Giorgios-1.jpg",
    "Giorgios-2.jpg",
    "DSC_7646darker.jpg",
    "Lydia-2.jpg",

    "Luther-6.jpg",
    "Luther-7.jpg",
    "Luther-3.jpg",
    "Luther-4.jpg",
 
    "Sainte-2.jpg",
    "Sainte-1.jpg",
    "Arturo-1.jpg",
    "Toby-1.jpg",

    "STYLAND_AW1201052D.jpg",
    "STYLAND_AW1201239.jpg",
    "STYLAND_AW1201417.jpg",
    "STYLAND_AW1201542.jpg",
  ];
  

  function handleImageClick(index) {
    setIsModalOpen(!isModalOpen);
    setImageToDisplay(index);
  }

  function handleArrowBackClick(event) {
    event.stopPropagation()
    if (imageToDisplay <= 0) {
      setVisible("")
      setTimeout(() => {
        setImageToDisplay(imageFiles.length - 1)
        setVisible("visible")
      }, 400);
      return
    }
    setVisible("")
    setTimeout(() => {
      setImageToDisplay(imageToDisplay - 1)
      setVisible("visible")
    }, 400);
  }

  function handleArrowForwardClick(event) {
    event.stopPropagation()
    if (imageToDisplay >= imageFiles.length - 1) {
      setVisible("")
      setTimeout(() => {
        setVisible("visible")
        setImageToDisplay(0)
      }, 400);
      return
    }
    setVisible("")
    setTimeout(() => {
      setVisible("visible")
      setImageToDisplay(imageToDisplay + 1)
    }, 400);
  }

  return (
    <div className={style["image-grid"]}>
      {imageFiles.map((fileName, index) => (
        <div key={index} className={`img ${style["image-spacing"]}`} onClick={() => handleImageClick(index)}>
          <img
            src={fileName}
            alt={`Img ${index + 1}`}
            className={style["image-size"]}
          />
        </div>
      ))}
      {isModalOpen &&
        <div className={style['overlay']} onClick={() => handleImageClick()}>
          <div className={style['work-page-carousel-container']}>
            <div className={style['carousel-image-container']}>
              <img id="carousel-image" className={style[visible]} src={imageFiles[imageToDisplay]} alt={imageFiles[imageToDisplay]}></img>
            </div>
            <button className={style['arrow-back']} onClick={(event) => handleArrowBackClick(event)}>
              <svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 330 330">
                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </button>
            <button className={style['arrow-forward']} onClick={(event) => handleArrowForwardClick(event)}>
              <svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 330 330">
                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default WorkCentralSection;