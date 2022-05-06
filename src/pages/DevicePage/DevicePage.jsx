import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../../http/deviceAPI';
import styles from './DevicePage.module.scss';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: {} })
    const { id } = useParams()

    let [imageOverlay, setImageOverlay] = useState(false)
    let [imageToShow, setimageToShow] = useState(``)

    useEffect(() => {
        fetchOneDevice(id)
            .then(data => {
                setDevice(data)
            })
    }, [])

    return (
        <div className={styles.wrapper} >
            <div className={styles.bigImageContainer + (imageOverlay === true ? (' ' + styles.visible) : '')}>
                <div
                    className={styles.bigImageBackground}
                    onClick={() => setImageOverlay(false)}
                ></div>
                <img className={styles.bigImage} src={imageToShow} alt="" />
            </div>
            <div className={styles.imageSection}>
                {device?.img?.map((image, index) =>
                    <img
                        onClick={() => {
                            setImageOverlay(true);
                            setimageToShow(`${process.env.REACT_APP_API_URL + image}`)
                        }}
                        key={index}
                        className={index === 0 ? styles.mainImage : styles.restImages}
                        src={process.env.REACT_APP_API_URL + image} />
                )}
            </div>
            <div className={styles.description}>
                <h2 className={styles.title}>{device.name}</h2>
                <h3 className={styles.price}>₽ {device.price}</h3>
                <h3 className={styles.description}>Описание:</h3>
                <p className={styles.description}>{device.description}</p>
            </div>
        </div >
    )
}

export default DevicePage
