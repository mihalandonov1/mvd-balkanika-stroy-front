import React from 'react'
import { useState } from 'react'
import styles from './FinalizedProjects.module.css'
import house1 from '../../assets/images/kyshta.jpeg'
import balkanikapark from '../../assets/images/balkanika-park1.jpeg'
import { Link } from 'react-router-dom'

const FinalizedProjects = () => {



    

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles['finalized-projects-wrapper']}>
        <div className={styles['finalized-projects']}>
            <h1>РЕАЛИЗИРАНИ ПРОЕКТИ</h1>
            <div className={styles['project-showcase']}>
                <Link style={{textDecoration: 'none'}} to="/realised-buildings/MonolithHouse" onClick={scrollToTop}>
                <div className={styles['card']}>
                    <div className={styles['project']}>
                        <img className={styles['finalized-image']} src={house1} alt='house'/>
                    </div>
                    <div className={styles['card-text']}>
                        <p className={styles['card-name']}>Монолитна къща</p>
                        <p className={styles['card-city']}>с. Борилово</p>
                    </div>
                </div>
                </Link>

                <Link style={{textDecoration: 'none'}} to="/realised-buildings/BalkanikaPark" onClick={scrollToTop}>
                <div className={styles['card']}>
                    <div className={styles['project']}>
                        <img className={styles['finalized-image']} src={balkanikapark} alt='house'/>
                    </div>
                    <div className={styles['card-text']}>
                    <p className={styles['card-name']}>Балканика Парк</p>
                        <p className={styles['card-city']}>Стара Загора</p>
                    </div>
                </div>
                </Link>
           
            </div>
        </div>
    </div>
  )
}

export default FinalizedProjects