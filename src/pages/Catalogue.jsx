import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Catalogue = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data)).catch(err => console.log(err))
        fetchDevices({ limit: 8, page: device.page })
            .then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetchDevices({
            limit: 8,
            page: device.page,
            typeId: device.selectedType.id
        })
            .then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
            .catch(err => console.log(err))
    }, [device.page, device.selectedType])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <DeviceList />
                </Col>
            </Row>
            <Pages />
        </Container>
    )
})

export default Catalogue
