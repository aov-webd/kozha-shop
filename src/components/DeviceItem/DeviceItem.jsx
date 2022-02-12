import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts';
import styles from './DeviceItem.module.scss'
const DeviceItem = ({ device }) => {
    const history = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{ width: 150, cursor: 'pointer', }}
                border={'light'}
            >
                <div
                    style={{
                        borderRadius: '5%',
                        boxShadow: '0px 0 4px rgb(150, 150, 150)',
                        width: '150px',
                        height: '150px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${process.env.REACT_APP_API_URL + device.img[0]})`
                    }}
                ></div>

                <div className='mt-1'>
                    <div className={styles.name}>{device.name}</div>
                    <div className={styles.price}>₽{device.price}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
