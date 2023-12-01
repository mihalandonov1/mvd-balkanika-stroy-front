import React from 'react'
import styles from './BalkanikaPark.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import Phone from '../../components/Phone/Phone'
import Footer from '../../layout/Footer/Foooter'

import firstImage from '../../assets/images/Балканика Парк/firstImage.jpg'
import secondImage from '../../assets/images/Балканика Парк/secondImage.jpg'
import gal1 from '../../assets/images/Балканика Парк/1.jpg'
import gal2 from '../../assets/images/Балканика Парк/2.jpg'
import gal3 from '../../assets/images/Балканика Парк/3.jpg'
import gal4 from '../../assets/images/Балканика Парк/4.jpg'
import gal5 from '../../assets/images/Балканика Парк/5.jpg'
import gal6 from '../../assets/images/Балканика Парк/6.jpg'
import gal7 from '../../assets/images/Балканика Парк/7.jpg'
import gal8 from '../../assets/images/Балканика Парк/8.jpg'

const BallkanikaPark = () => {
  return (
    <div className={styles['future-building']}>
        <Phone/>
        <Navbar/>
        <h1 className={styles['project-title']}>Balkanika Park</h1>
        <div className={styles['new-building']}>
            <div>
                <div className={styles['project-description']}>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Проект:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>Жилищна сграда с гаражи, офиси и детска площадка тип затворен комплекс с контролиран достъп и зона за отдих.</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Местоположение:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>гр. Стара Загора зад Кауфланд, в зоната на Техникумите</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Апартаменти:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>26 бр.</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Офиси:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>2 бр.</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Гаражи и паркоместа:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>10 гаражи и 18 паркоместа</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Развлечения и удобства:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>В двора на комплекса са предвидени, тревни площи детска площадка, място за отдих и зелени площи.</p>
                    </div>
                </div>
            </div>

            <div className={styles['new-building-header']}>
                <img className={styles['firstImage']} src={firstImage} alt='pic'/>
                <img className={styles['secondImage']} src={secondImage} alt='pic'/>
            </div> 

        </div>
        <div className={styles['project-description-text']}>
            <h2 style={{fontFamily: 'Roboto-bold'}}>Балканика Строй представя жилищен комплекс, хармонично вписан в средата, в която е разположен – гората и града.</h2>
            <div className={styles['project-description-box']}>
            <p>Kомплексa се отличава със стил, качество и отговаря на най-високите стандарти в строителството.</p>
            <p>Жилищата са просторни, носят усещане за удобство и топлина на бъдещите обитатели на сградата. Френските прозорци засилват усещането за живот сред природата, осигурявайки много естествена светлина и гледки.</p>
            <p>Намира се в близост до кафенета, фитнеси, аптеки, училища, детски градини, супермаркети, автобусни спирки, улеснявайки предвижването до всяка точка на града. В близост до известното езеро "Загорка"</p>
            <p>Живот сред природата в сърцето на града!</p>
            </div>
        </div>

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
        
        <Footer/>
    </div>
  )
}

export default BallkanikaPark