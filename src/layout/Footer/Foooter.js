import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/icons/logo.png'
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

import { FaHome } from "react-icons/fa";  


const Foooter = () => {
  return (
    <div className={styles['footer']}>
        <div className={styles['footer-wrapper']}>
        <h2>ЗА КОНТАКТИ</h2>
            <div className={styles['footer-contacts']}>
                <div className={styles['footer-contacts-left']}>

                    <div className={styles['footer-contacts-row']}>
                        <div className={styles['footer-contacts-left-icons']}>
                            <FaHome className={styles['footer-icons-home']}/>
                        </div>
                        <div className={styles['footer-contacts-right']}>
                            <p>Адрес: Стара Загора, България</p>
                        </div>
                    </div>

                    <div className={styles['footer-contacts-row']}>
                        <div className={styles['footer-contacts-left-icons']}>
                        <BsTelephoneFill className={styles['footer-icons-phone']}/>
                        </div>
                        <div className={styles['footer-contacts-right']}>
                        <p>Телефон: 0876668867, 0893682022</p>
                        </div>
                    </div>

                    
                    <div className={styles['footer-contacts-row']}>
                        <div className={styles['footer-contacts-left-icons']}>
                        <MdOutlineMail className={styles['footer-icons-mail']}/>
                        </div>
                        <div className={styles['footer-contacts-right']}>
                        <p>E-mail: mariyan.zhelev@gmail.com</p>
                        </div>
                    </div>

                       
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Foooter