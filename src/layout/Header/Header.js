import React from 'react'
import styles from './Header.module.css'
import pic1 from '../../assets/images/3.jpg'


const Header = () => {
  return (
    <div className={styles["header-container"]}>
        <img src={pic1} alt='pic1' className={styles["header-img"]}/>
    </div>
  )
}

export default Header