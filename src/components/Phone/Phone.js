import React from 'react'
import styles from './Phone.module.css'
import { FaPhoneVolume } from "react-icons/fa6";

const Phone = () => {
  return (
    <div className={styles["phone-component"]}>
        
        <a className={styles["phone-text"]} href="tel:+0879060793">
        <FaPhoneVolume className={styles["phone-icon"]}/>
          <p>Обади се</p>
        </a>
    </div>
  )
}

export default Phone