import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts';
import styles from './DeviceItem.module.scss'
const DeviceItem = ({ device }) => {
    const history = useNavigate()
    return (
        <div onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
            className={styles.wrapper}
            border={'light'}
        >
            <img src={`${process.env.REACT_APP_API_URL + device.img[0]}`} />
            <div className={styles.name}>{device.name}</div>
            <div className={styles.price}>₽{device.price}</div>
        </div>
    );
};

export default DeviceItem;
