import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: {} })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id)
            .then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img[0]} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <h3>{device.price + ' рублей'}</h3>
                        <h6>{device.description}</h6>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

export default DevicePage
