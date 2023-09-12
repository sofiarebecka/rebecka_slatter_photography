import Navbar from '../navbar/Navbar';
import style from './AboutPage.module.css'

const AboutPage = () => {
  return (
      <div className={style["about-page-main-container"]}>
        <div className={style["typewriter"]}>
          <span className={style["about-text"]}>I am Rebecka Slatter, a London-based photographer who finds joy in the subtle beauty of minimalism.</span><br/>
          <span className={style["about-text"]}>Maybe my Scandinavian roots have something to do with that?</span><br/> 
          <span className={style["about-text"]}>Working alongside a talented team, through my lens I capture a vision turning into reality.</span><br/> 
          <span className={style["about-text"]}>Fashion photography provides me with an opportunity to express myself as an artist.</span><br/> 
          <span className={style["about-text"]}>With my headshot and portrait work I am drawn to the intimacy and the real connections that form between individuals.</span><br/> 
          <span className={style["about-text"]}>It is a profound experience when someone trusts me with their raw, honest self,</span><br/> 
          <span className={style["about-text"]}>and I strive to reciprocate that trust in every photograph I take.</span><br/> 
          <span className={style["about-text"]}>Perhaps that's why my portraits have a unique beauty to them — I invest a little piece of myself into each piece of work.</span><br/><br/>
          <span className={style["about-text"]}>It is this synergy that makes my portraits special I suppose.</span><br/><br/>
          <span className={style["about-text"]}>My versatility as a photographer extends beyond fashion and portraits.</span><br/> 
          <span className={style["about-text"]}>I am skilled in capturing love stories, immortalising events, offering behind-the-scenes glimpses of music videos</span><br/> 
          <span className={style["about-text"]}>and other cinematic productions, and I also do product photography.</span><br/> 
          <span className={style["about-text"]}>I am looking forward to the opportunity to collaborate with you and make your vision come through.</span><br/> 
          <span className={style["about-text"]}>Please don't hesitate to reach out and connect.</span><br/><br/>
          <span className={style["about-text"]}>Best regards,</span><br/><br/>
          <span className={style["about-text"]}>Rebecka x</span><br/><br/>
        </div>
        <a className={style["arrow-back"]} href="/">&#171;</a>
      </div>
  )
}

export default AboutPage;