import React, { useState } from 'react';
import { Accordion, Container, Button, AccordionButton } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import { useContext, useEffect } from 'react';
import { Context } from '../index';
import { fetchDevices, fetchTypes } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const Admin = observer(() => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
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

    return (
        <Container>
            <h3>Панель администрирования</h3>
            <Container className='d-flex'>
                <Button
                    onClick={() => setTypeVisible(true)}
                    variant={'outline-dark'}
                    className='mt-4 mr-3'
                >
                    Добавить тип
                </Button>
                <Button
                    onClick={() => setDeviceVisible(true)}
                    variant={'outline-dark'}
                    className='mt-4 p-2'
                    disabled={device.types.length === 0}
                >
                    Добавить изделие
                </Button>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            </Container>
            <Accordion className='mt-4 p-2' alwaysOpen defaultActiveKey={['0']}>
                {device.types.map(type =>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{type.name}</Accordion.Header>
                        <Accordion.Body>
                            asdasd
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
    )
})

export default Admin
