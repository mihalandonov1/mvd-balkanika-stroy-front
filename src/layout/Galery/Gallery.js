import React from 'react'
import styles from './Gallery.module.css'
import gal1 from '../../assets/images/1.jpg'
import gal2 from '../../assets/images/2.jpg'
import gal3 from '../../assets/images/3.jpg'
import gal4 from '../../assets/images/balkanika-park-2.jpeg'
import gal5 from '../../assets/images/balkanika-park-3.jpeg'
import gal6 from '../../assets/images/balkanika-park-4.jpeg'
import gal7 from '../../assets/images/balkanika-park-tabela.jpeg'
import gal8 from '../../assets/images/balkanika-park1.jpeg'

const Gallery = () => {
  return (
    <div className={styles['gallery']}>
        <h1>Галерия</h1>
        <div className={styles['gallery-wrapper']}>
            <img className={styles['gal-pic']} src={gal1} alt='1'/>
            <img className={styles['gal-pic']} src={gal2} alt='2'/>
            <img className={styles['gal-pic']} src={gal3} alt='3'/>
            <img className={styles['gal-pic']} src={gal4} alt='4'/>
            <img className={styles['gal-pic']} src={gal5} alt='5'/>
            <img className={styles['gal-pic']} src={gal6} alt='6'/>
            <img className={styles['gal-pic']} src={gal7} alt='7'/>
            <img className={styles['gal-pic']} src={gal8} alt='8'/>
        </div>
    </div>
  )
}

export default Gallery