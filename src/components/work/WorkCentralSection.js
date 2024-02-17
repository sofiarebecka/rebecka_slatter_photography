import style from "./WorkCentralSection.module.css";
import { useState } from "react";

const WorkCentralSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState(null);

  const imageFiles = [
    "AMELIA_286.jpg",
    "AMELIA_350.jpg",
    "AMELIA_233.jpg",
    "AMELIA_477.jpg",
    "AMELIA_625.jpg",
    "AMELIA_668.jpg",
    "AMELIA_805.jpg",
    "AMELIA_999.jpg",
    "AMELIA_1045.jpg",
    "AMELIA08031.jpg", 
    "AMELIA07985.jpg",
    "DSC_4260web.jpg",
    "Stephen_Sanchez_4_146a30488795a0a62e41f68340c5291f.jpg",
    "Stephen_Sanchez_19_146a30488795a0a62e41f68340c5291f.jpg",
    "Stephen_Sanchez_24_146a30488795a0a62e41f68340c5291f.jpg",
    "DSC_0973-Edit.jpg",
    "Percelle-x-BBG-22-(11)web.jpg",
    "DSC_7049.jpg",
    "DSC_7135new2.jpg",
    "DSC_7646darker.jpg",
    "KRISTIE_111.jpg",
    "KRISTIE_711.jpg",
    "DUINA_FEB_1533 copy_.jpg",
    "DUINA_FEB_1600_lighter.jpg",   
    "STYLAND_AW1200222.jpg",
    "STYLAND_AW1200227.jpg",
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
      setImageToDisplay(imageFiles.length - 1)
      return
    }
    setImageToDisplay(imageToDisplay - 1)
  }

  function handleArrowForwardClick(event) {
    event.stopPropagation()
    if (imageToDisplay >= imageFiles.length - 1) {
      setImageToDisplay(0)
      return
    }
    setImageToDisplay(imageToDisplay + 1)
  }

  return (
    <div className={style["image-gallery"]}>
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
              <img src={imageFiles[imageToDisplay]} alt={imageFiles[imageToDisplay]}></img>
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
    </div>
  )
}

export default WorkCentralSection;