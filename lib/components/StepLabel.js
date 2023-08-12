import React from 'react';
import style from "../styles/style.module.css";

export default function StepLabel({ icon, title }) {
   
    return (<>
        <div className={style.label}>
            <span className={style.label_icon}>
                {icon}
            </span>
            <span className={style.label_title}>
                {title}
            </span>
        </div>
    </>)
}