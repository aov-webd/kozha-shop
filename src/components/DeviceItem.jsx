import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{ width: 150, cursor: 'pointer', }}
                border={'light'}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img[0]} />
                <div className='mt-1'>
                    <div>{device.name}</div>
                    <div>₽{device.price}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
