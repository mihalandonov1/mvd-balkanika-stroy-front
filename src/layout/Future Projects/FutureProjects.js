import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FutureProjects.module.css'
import pic1 from '../../assets/images/1.jpg'
import pic2 from '../../assets/images/2.jpg'
import pic3 from '../../assets/images/3.jpg'

const FutureProjects = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles['future-projects-wrapper']}>
        <div className={styles['future-projects']}>
            <h1 className={styles['future-projects-headline']}>БЪДЕЩИ ПРОЕКТИ</h1>
            <div className={styles['future-projects-article']}>
               
                    <div className={styles['future-projects-name']}>
                        <h2 className={styles['future-projects-name-balkanika']}>БАЛКАНИКА</h2>
                        <h2 className={styles['future-projects-name-green-estates']}>"GREEN ESTATES"</h2>
                    </div>
                    
                    <div className={styles['future-projects-pics']}>
                        <img className={styles['images']} src={pic1} alt='pic1'/>
                        <img className={styles['images']} src={pic2} alt='pic2'/>
                        <img className={styles['images']} src={pic3} alt='pic3'/>
                    </div>
                    
                    <Link style={{textDecoration: 'none'}} to="/future-building" onClick={scrollToTop} className='button'>ВИЖ</Link>
                  
                    <span className={styles['future-projects-line']}></span>
               
            </div>
        </div>
    </div>
  )
}

export default FutureProjects