
import style from './WorkPage.module.css'

const WorkPage = () => {
  return (
    <>
      <div className={style["work-page-grid"]}>
        <img src="Ak1.png" alt="work model 1"/>
        <img src="Duina1.png" alt="work model 3"/>
        <img src="Duina2.png" alt="work model 6"/>
        <img src="Duina3.png" alt="work model 7"/>
      </div>
      <div className={style["flex-container"]}>
        <a className={style["arrow-back"]} href="/">&#171;</a>
      </div>
    </>
  )
}

export default WorkPage;