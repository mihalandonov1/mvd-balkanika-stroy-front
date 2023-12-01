import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/icons/logo.png'
import { BsFacebook } from "react-icons/bs"
import { PiInstagramLogoFill } from "react-icons/pi"
import { AiFillLinkedin } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

import { FaHome } from "react-icons/fa";  


const Foooter = () => {
  return (
    <div className={styles['footer']}>
        <div className={styles['footer-wrapper']}>
            <div className={styles['footer-contacts']}>
                <h2>ЗА КОНТАКТИ</h2>
                <div className={styles['footer-contacts-col']}>
                    <div className={styles['footer-contacts-left']}>
                        <div className={styles['footer-contacts-left-icons']}>
                            <FaHome className={styles['footer-icons-home']}/>
                        <p>Адрес: Стара Загора, бул. Митрополит Методий  Кусев 7 вх.Б ет.3 ап.12</p>
                        </div>
                        <div className={styles['footer-contacts-left-icons']}>
                            <BsTelephoneFill className={styles['footer-icons-phone']}/>
                            <p>тел: 0876119192</p>
                        </div>
                        <div className={styles['footer-contacts-left-icons']}>
                            <MdOutlineMail className={styles['footer-icons-mail']}/>
                            <p>e-mail: mariyan.zhelev@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles['footer-contacts-right']}>
                        <img className={styles['footer-logo']} src={logo}/>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foooter