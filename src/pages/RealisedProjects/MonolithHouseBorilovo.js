import React from 'react'
import Phone from '../../components/Phone/Phone'
import Navbar from '../../layout/Navbar/Navbar'
import Foooter from '../../layout/Footer/Foooter'
import styles from './MonolithHouseBorilovo.module.css'
import firstImage from '../../assets/images/Къща Борилово/firstImage.jpg'

import gal1 from '../../assets/images/Къща Борилово/1.jpg'
import gal2 from '../../assets/images/Къща Борилово/2.jpg'
import gal3 from '../../assets/images/Къща Борилово/3.jpg'
import gal4 from '../../assets/images/Къща Борилово/4.jpg'
import gal5 from '../../assets/images/Къща Борилово/5.jpg'
import gal6 from '../../assets/images/Къща Борилово/6.jpg'
import gal7 from '../../assets/images/Къща Борилово/7.jpg'
import gal8 from '../../assets/images/Къща Борилово/8.jpg'
import gal9 from '../../assets/images/Къща Борилово/9.jpg'
import gal10 from '../../assets/images/Къща Борилово/10.jpg'
import gal11 from '../../assets/images/Къща Борилово/11.jpg'
import gal12 from '../../assets/images/Къща Борилово/12.jpg'


const RealisedProjects = () => {
  return (
    <div className="App">
        <Phone/>
        <Navbar/>
        
        <h1 className={styles['project-title']}>Monolith House</h1>
        <div className={styles['new-building']}>
            
                <div className={styles['project-description']}>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Проект:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>Монолитна къша в село Борилово.</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Местоположение:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>Село Борилово, област Стара Загора</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Площ:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>255кв м.</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Етажи:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>2</p>
                    </div>
                    <div className={styles['project-description-row']}>
                        <p style={{fontFamily: 'Roboto-bold'}}>Информация:</p>
                        <p style={{fontFamily: 'Roboto-thin'}}>Къщата е монолитна с естествен камък, залепена до борова гора с уникална панорама към Средна Гора. Има 3 спални, от които едната е мастър бедрум и хол с размери 50кв.м.</p>
                    </div>
                    
                </div>
         
            <div className={styles['new-building-header']}>
                <img className={styles['firstImage']} src={firstImage} alt='pic'/>
            </div>  
        </div>
        <div className={styles['project-description-text']}>
            <h2 style={{fontFamily: 'Roboto-bold'}}>Монолитна къща построента по най-новите стандарти отличаваща се със стил и качество</h2>
            <div className={styles['project-description-box']}>
            <p>Къщата се отличава със стил, качество и отговаря на най-високите стандарти в строителството.</p>
            <p>Използвани са материали с най-високо качество. Къщата е изцяло тухла и съобразена с най-новите стандарти за качество</p>
            <p>Намира се в село Борилово сред красивата природа на селцето</p>
            <p>Живот сред природата!</p>
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
            <img className={styles['gal-pic']} src={gal9} alt='9'/>
            <img className={styles['gal-pic']} src={gal10} alt='10'/>
            <img className={styles['gal-pic']} src={gal11} alt='11'/>
            <img className={styles['gal-pic']} src={gal12} alt='12'/>
        </div>
    </div>

        <Foooter/>
    </div>
  )
}

export default RealisedProjects