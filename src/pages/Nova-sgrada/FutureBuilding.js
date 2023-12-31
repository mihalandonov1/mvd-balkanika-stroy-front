import React from 'react'
import '../../App.css';
import Navbar from '../../layout/Navbar/Navbar'
import Phone from '../../components/Phone/Phone'
import Footer from '../../layout/Footer/Foooter'
import styles from './FutureBuilding.module.css'
import picnew from '../../assets/images/1.jpg'
import picnew1 from '../../assets/images/2.jpg'
import kompleks from '../../assets/images/kompleks/kompleks.jpg'

import gal1 from '../../assets/images/kompleks/project/1.jpg'
import gal2 from '../../assets/images/kompleks/project/2.jpg'
import gal3 from '../../assets/images/kompleks/project/3.jpg'
import gal4 from '../../assets/images/kompleks/project/4.jpg'
import gal5 from '../../assets/images/kompleks/project/5.jpg'
import gal6 from '../../assets/images/kompleks/project/6.jpg'




const FutureBuilding = () => {
  return (
    <div className={styles['future-building']}>
        <Phone/>
        <Navbar/>
        <h1 className={styles['project-title']}>Green Estates</h1>
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
                <img className={styles['firstImage']} src={picnew} alt='pic'/>
                <img className={styles['secondImage']} src={picnew1} alt='pic'/>
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

        <div>
            <h2 style={{fontFamily: 'Roboto-bold'}}>Тук може да видите проекта и разположението на комплекса</h2>
        </div>
        <div>
            <img className={styles['project-structure']} src={kompleks} alt='kompleks'/>
        </div>


        <div className={styles['project-building-1']}>
            <div className={styles['project-buildig-1-wrapper']}>
                <h2 style={{fontFamily: 'Roboto-bold'}}>СГРАДА 1</h2>
                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 1</h4>

                <table>
                    <thead >
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>1</td>
                        <td>68,31 м2</td>
                        <td>8,40 м2</td>
                        <td>76,71 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>2</td>
                        <td>109,58 м2</td>
                        <td>13,48 м2</td>
                        <td>123,06 м2</td>
                        <td>Виж скица</td>
                        <td>147,670 €</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>1</td>
                        <td>21,46 м2</td>
                        <td>2,64 м2</td>
                        <td>24,10 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>2</td>
                        <td>20,24 м2</td>
                        <td>2,49 м2</td>
                        <td>22,73 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>3</td>
                        <td>20,24 м2</td>
                        <td>2,49 м2</td>
                        <td>22,73 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>4</td>
                        <td>22,55 м2</td>
                        <td>2,77 м2</td>
                        <td>25,32 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 2</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>3</td>
                        <td>118,03 м2</td>
                        <td>14,52 м2</td>
                        <td>132,55 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>4</td>
                        <td>65,78 м2</td>
                        <td>8,09 м2</td>
                        <td>73,87 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>5</td>
                        <td>109,50 м2</td>
                        <td>13,47 м2</td>
                        <td>122,97 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 3</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>6</td>
                        <td>118,03 м2</td>
                        <td>14,52 м2</td>
                        <td>132,55 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>7</td>
                        <td>65,78 м2</td>
                        <td>8,09 м2</td>
                        <td>73,87 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>8</td>
                        <td>109,50 м2</td>
                        <td>13,47 м2</td>
                        <td>122,97 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 4</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>9</td>
                        <td>172,88 м2</td>
                        <td>21,26 м2</td>
                        <td>194,14 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                   
                </table>
            </div>


            <div className={styles['project-buildig-2-wrapper']}>
                <h2 style={{fontFamily: 'Roboto-bold'}}>СГРАДА 2</h2>
                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 1</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Офис</td>
                        <td>1</td>
                        <td>46,15 м2</td>
                        <td>6,26 м2</td>
                        <td>52,41 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Офис</td>
                        <td>2</td>
                        <td>64,26 м2</td>
                        <td>8,72 м2</td>
                        <td>72,98 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>1</td>
                        <td>71,42 м2</td>
                        <td>9,69 м2</td>
                        <td>81,11 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>1</td>
                        <td>22,58 м2</td>
                        <td>3,07 м2</td>
                        <td>25,65 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>2</td>
                        <td>21,75 м2</td>
                        <td>2,95 м2</td>
                        <td>24,70 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 2</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>2</td>
                        <td>118,03 м2</td>
                        <td>16,02 м2</td>
                        <td>134,05 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>3</td>
                        <td>65,78 м2</td>
                        <td>8,93 м2</td>
                        <td>74,71 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>4</td>
                        <td>102,31 м2</td>
                        <td>13,89 м2</td>
                        <td>116,20 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 3</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>5</td>
                        <td>118,03 м2</td>
                        <td>16,02 м2</td>
                        <td>134,05 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>6</td>
                        <td>65,78 м2</td>
                        <td>8,93 м2</td>
                        <td>74,71 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>7</td>
                        <td>102,31 м2</td>
                        <td>13,89 м2</td>
                        <td>116,20 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 4</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>8</td>
                        <td>152,94 м2</td>
                        <td>20,76 м2</td>
                        <td>173,70 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                   
                </table>
            </div>

            <div className={styles['project-buildig-3-wrapper']}>
                <h2 style={{fontFamily: 'Roboto-bold'}}>СГРАДА 3</h2>
                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 1</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>1</td>
                        <td>92,77 м2</td>
                        <td>11,57 м2</td>
                        <td>104,34 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>2</td>
                        <td>66,93 м2</td>
                        <td>8,35 м2</td>
                        <td>75,28 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>1</td>
                        <td>22,55 м2</td>
                        <td>2,81 м2</td>
                        <td>25,36 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>2</td>
                        <td>20,24 м2</td>
                        <td>2,52 м2</td>
                        <td>22,76 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>3</td>
                        <td>20,24 м2</td>
                        <td>2,52 м2</td>
                        <td>22,76 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>ГАРАЖ</td>
                        <td>4</td>
                        <td>21,46 м2</td>
                        <td>2,68 м2</td>
                        <td>24,14 м2</td>
                        <td>Виж скица</td>
                        <td>25,000 €</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 2</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>3</td>
                        <td>106,93 м2</td>
                        <td>13,33 м2</td>
                        <td>120,26 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>4</td>
                        <td>66,93 м2</td>
                        <td>8,35 м2</td>
                        <td>75,28 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>5</td>
                        <td>119,74 м2</td>
                        <td>14,93 м2</td>
                        <td>134,67 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 3</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>6</td>
                        <td>106,93 м2</td>
                        <td>13,33 м2</td>
                        <td>120,26 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>7</td>
                        <td>66,93 м2</td>
                        <td>8,35 м2</td>
                        <td>75,28 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                    <tr>
                        <td>Апартамент</td>
                        <td>8</td>
                        <td>119,74 м2</td>
                        <td>14,93 м2</td>
                        <td>134,67 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-free']}>Свободен</td>
                    </tr>
                </table>

                <h4 style={{fontFamily: 'Roboto-bold'}}>ЕТАЖ 4</h4>

                <table>
                    <thead>
                        <td>Вид на Имота</td>
                        <td>Номер</td>
                        <td>Чиста Площ</td>
                        <td>Общи части</td>
                        <td>Обща Площ</td>
                        <td>Разположение</td>
                        <td>Цена</td>
                        <td>Статус</td>
                    </thead>
                    <tr>
                        <td>Апартамент</td>
                        <td>9</td>
                        <td>165,06 м2</td>
                        <td>20,58 м2</td>
                        <td>185,64 м2</td>
                        <td>Виж скица</td>
                        <td>цена</td>
                        <td className={styles['project-buildig-sold']}>Продаден</td>
                    </tr>
                   
                </table>
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
            </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default FutureBuilding