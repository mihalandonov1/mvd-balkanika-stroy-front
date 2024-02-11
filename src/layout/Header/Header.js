import React from 'react'
import styles from './Header.module.css'
import pic1 from '../../assets/images/3.jpg'


const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-wrapper"]}>
        <img src={pic1} alt='pic1' className={styles["header-img"]}/>
        <div className={styles["header-hero"]}>
          <div className={styles["header-hero-wrapper"]}>
            <div className={styles["header-hero-body"]}>
              <p className={styles["header-hero-title"]}>МВД БАЛКАНИКА СТРОЙ</p>
            </div>
            <div className={styles["header-hero-text"]}>
              <p>сигурност</p>
              <p>качество</p>
              <p>професионализъм</p>
            </div>
          </div>
         
        </div>
        
        </div>
    </div>
  )
}

export default Header