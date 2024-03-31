import React from 'react';
import style from './WorkPage.module.css';
import WorkCentralSection from './WorkCentralSection.jsx';

const WorkPage = () => {

  return (
    <div className={style["work-page-container"]}>
      <WorkCentralSection/>
    </div>
  );
}

export default WorkPage;