import style from './AboutPage.module.css'
const AboutPage = () => {
  return (
      <div className={style["about-page-main-container"]}>
        <div className={style["typewriter"]}>
          <span className={style["about-text"]}>I am a London based photographer who finds joy in the subtle beauty of minimalism.</span><br/>
          <span className={style["about-text"]}>Maybe my Scandinavian roots have something to do with that?</span><br/><br/>
          <span className={style["about-text"]}>Working alongside a talented team, through my lens I capture a vision turning into reality.</span><br/> 
          <span className={style["about-text"]}>Fashion photography provides me with an opportunity to express myself as an artist.</span><br/> 
          <span className={style["about-text"]}>I am drawn to the intimacy and the real connections that form between individuals.</span><br/> 
          <span className={style["about-text"]}>It is a profound experience when someone trusts me with their raw, honest self,</span><br/> 
          <span className={style["about-text"]}>and I strive to reciprocate that trust in every photograph I take.</span><br/> <br/> 
          <span className={style["about-text"]}>Perhaps that's why my portraits have a unique beauty to them?</span><br/>
          <span className={style["about-text"]}>I invest a little piece of myself into each piece of work.</span><br/>
          <span className={style["about-text"]}>It is this synergy that makes my portraits special I suppose.</span><br/><br/>
          <span className={style["about-text"]}>My versatility as a photographer extends beyond fashion and portraits.</span><br/> 
          <span className={style["about-text"]}>I also capture love stories, immortalise events, offer behind-the-scenes glimpses </span><br/> 
          <span className={style["about-text"]}>of music videos and other productions. </span><br/><br/> 
          <span className={style["about-text"]}>I look forward to the opportunity to collaborate with you and make your vision come through.</span><br/> 
          <span className={style["about-text"]}>Please don't hesitate to reach out and connect.</span><br/><br/>
          <span className={style["about-text"]}>Rebecka x</span><br/><br/>
        </div>
      {/* <div class="button-container">
        <a href="mailto:rebecka@rebeckaslatter.com" class="contact-button">
          <img src="email-icon.png" alt="Email" class="email" />

        </a>
      </div> */}
    </div>
  )
}
export default AboutPage;
