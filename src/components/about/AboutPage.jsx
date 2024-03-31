import React from 'react'
import style from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={style["about-page-main-container"]}>
      <div className={style["about-text-container"]} data-testid="text-container" >
        <div className={style["typewriter-text"]}><p style={{animationDelay: "0"}}>I am a London based photographer who finds joy in the subtle beauty of minimalism.</p></div>
        <div className={style["typewriter-text"]}><p style={{animationDelay: "2s"}}>Maybe my Scandinavian roots have something to do with that?</p></div><br/>
        <div className={style["shift-text-right"]} style={{animationDelay: "5s"}}><p>Working alongside a talented team, through my lens I capture a vision turning into reality.</p></div> 
        <div className={style["shift-text-left"]} style={{animationDelay: "5s"}}><p>Fashion photography provides me with an opportunity to express myself as an artist.</p></div> 
        <div className={style["shift-text-right"]} style={{animationDelay: "5s"}}><p>I am drawn to the intimacy and the real connections that form between individuals.</p></div> 
        <div className={style["shift-text-left"]} style={{animationDelay: "5s"}}><p>It is a profound experience when someone trusts me with their raw, honest self,</p></div>
        <div className={style["shift-text-right"]} style={{animationDelay: "5s"}}><p>and I strive to reciprocate that trust in every photograph I take.</p></div><br/>
        <div className={style["shift-text-left"]} style={{animationDelay: "12s"}}><p>Perhaps that's why my portraits have a unique beauty to them?</p></div>
        <div className={style["shift-text-right"]} style={{animationDelay: "12s"}}><p>I invest a little piece of myself into each piece of work.</p></div>
        <div className={style["shift-text-left"]} style={{animationDelay: "12s"}}><p>It is this synergy that makes my portraits special I suppose.</p></div><br/>
        <div className={style["shift-text-right"]} style={{animationDelay: "17s"}}><p>My versatility as a photographer extends beyond fashion and portraits.</p></div>
        <div className={style["shift-text-left"]} style={{animationDelay: "17s"}}><p>I also capture love stories, immortalise events, offer behind-the-scenes glimpses </p></div>
        <div className={style["shift-text-right"]} style={{animationDelay: "17s"}}><p>of music videos and other productions. </p></div><br/>
        <div className={style["typewriter-text"]}><p style={{animationDelay: "20s"}}>Please don't hesitate to reach out and connect.</p></div><br/>
        <div className={style["typewriter-text"]}><p style={{animationDelay: "22s"}}>Rebecka x</p></div><br/>
      </div>
    </div>
  )
}
export default AboutPage;
