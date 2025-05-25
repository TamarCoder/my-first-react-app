"use client"
import { useState } from 'react'
import styles from './Acounts.module.css';
 


export default ({onClick}: any) => {

    return (
        <div className={styles.accounts}>
            <button className= {styles.accountBtn} onClick={onClick}>Sing in</button>
            <button className= {styles.accountBtn}>Sing un</button>
        </div>
    )
}