import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
  return (
    <><br/><br/><br/><br/>
      <div className={style["flex-container"]}>
        <a className={style["instagram"]} href="https://www.instagram.com/rebeckaslatter/?hl=en"><img className={style["logo"]} src="instagram_icon.png" alt="instagram logo" /></a>
        <a className={style["linkedin"]}href="https://www.linkedin.com/in/rebecka-slatter-b28103136/"><img className={style["logo"]} src="linkedin-icon.png" alt="linkedin logo" /></a>
        <a className={style["email"]}href={`mailto:${"rebecka@rebeckaslatter.com"}`}><img className={style["logo"]} src="email-icon.png" alt="email logo" /></a>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default Contacts;