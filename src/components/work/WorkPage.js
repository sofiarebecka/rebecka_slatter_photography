import React from 'react';
import style from './WorkPage.module.css';
import WorkCentralSection from './WorkCentralSection';

const WorkPage = () => {

  return (
    <div className={style["body"]}>
      <WorkCentralSection/>
    </div>
  );
}

export default WorkPage;