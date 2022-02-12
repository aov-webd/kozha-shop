import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row, Card, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../../http/deviceAPI';
import styles from './DevicePage.module.scss';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: {} })
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    let [imageOverlay, setImageOverlay] = useState(false)
    let [imageToShow, setimageToShow] = useState(``)

    useEffect(() => {
        fetchOneDevice(id)
            .then(data => {
                setDevice(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <Container className='mt-3' >
            <div
                className={styles.bigImageContainer + (imageOverlay === true ? (' ' + styles.visible) : '')}
            >
                <div
                    className={styles.bigImageBackground}
                    onClick={() => setImageOverlay(false)}
                ></div>
                <img className={styles.bigImage} src={imageToShow} alt="" />
            </div>
            <Row>
                <Col className={styles.imageSection}>
                    {device.img.map((image, index) =>
                        <Image
                            onClick={() => {
                                setImageOverlay(true);
                                setimageToShow(`${process.env.REACT_APP_API_URL + image}`)
                            }}
                            key={index}
                            className={index === 0 ? styles.mainImage : styles.restImages}
                            src={process.env.REACT_APP_API_URL + image} />
                    )}
                </Col>
                <Col>
                    <Row>
                        <h2 className={styles.title}>{device.name}</h2>
                        <h3 className={styles.price}>₽ {device.price}</h3>
                        <h6 className={styles.description}>Описание:</h6>
                        <p className={styles.description}>{device.description}</p>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

export default DevicePage
