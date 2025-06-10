"use client"

import styles from "./rangeInput.module.css";

import { useState } from "react";

export default function RangeInput({label, id, onChange}){
    const [value, setValue] = useState(0)

    return (<div className={styles.divContain}>
        <label htmlFor={id}>{label}</label>
        <div className={styles.divInput}>
            <input id={id} type="range" min="0" max="5" className={styles.input} value={value} onChange={(e) => {setValue(e.target.value); onChange(e)}}/>
            <p>{value}</p>
        </div>
    </div>)
}