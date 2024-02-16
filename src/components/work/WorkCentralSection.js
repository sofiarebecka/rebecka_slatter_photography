import style from "./WorkCentralSection.module.css";

const WorkCentralSection = () => {

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
    "glasses_leo2_s.jpg",
    "glasses_leo2_f.jpg",
    "glasses_redsquareshade_side.jpg",
    "glasses_redsquareshade_front.jpg",
    "STYLAND_AW1200222.jpg",
    "STYLAND_AW1200227.jpg",
    "STYLAND_AW1201052D.jpg",
    "STYLAND_AW1201239.jpg",
    "STYLAND_AW1201417.jpg",
    "STYLAND_AW1201542.jpg",
  ];

  return (
    <div className={style["image-gallery"]}>
      <div className={style["image-grid"]}>
        {imageFiles.map((fileName, index) => (
          <div key={index} className={`img ${style["image-spacing"]}`}>
            <img
              src={fileName}
              alt={`Img ${index + 1}`}
              className={style["image-size"]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkCentralSection;