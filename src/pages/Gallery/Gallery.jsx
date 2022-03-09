import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';

function Gallery() {
    const gallerySections = [
        { title: 'Ремень мужской', eng: 'belt-male', quantity: 12 },
        { title: 'Кардхолдер', eng: 'cardholder', quantity: 14 },
        { title: 'Брелок', eng: 'charm', quantity: 9 },
        { title: 'Паспорт', eng: 'passport', quantity: 13 },
        { title: 'Кошелек женский', eng: 'wallet-f', quantity: 9 }
    ]

    let [imageOverlay, setImageOverlay] = useState(false)
    let [imageToShow, setimageToShow] = useState(``)

    return (
        <div
            style={{
                maxWidth: '1440px',
                flex: '1 1 auto'
            }}
            className='content gallery'>
            <div
                className={styles.bigImageContainer + (imageOverlay === true ? (' ' + styles.visible) : '')}
            >
                <div
                    className={styles.bigImageBackground}
                    onClick={() => setImageOverlay(false)}
                ></div>
                <img className={styles.bigImage} src={imageToShow} alt="" />
            </div>
            {
                gallerySections.map((section, index) => {
                    return (
                        <section key={index}>
                            <h3>{section.title}</h3>
                            <div className={styles.sectionGrid}>
                                {[...Array(section.quantity)].map((item, index) => {
                                    return (
                                        <div key={index} className={styles.imgContiner}
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundImage: `url(/img/gallery/${section.eng}/${index}.png)`
                                            }}
                                            onClick={() => { setImageOverlay(true); setimageToShow(`/img/gallery/${section.eng}/${index}.png`) }}
                                        >
                                        </div>
                                    )
                                })}
                            </div>
                        </section>)
                })
            }
        </div>
    )
}

export default Gallery;
