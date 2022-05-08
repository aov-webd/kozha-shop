import React, { useState } from 'react';
import { Accordion, Container, Button, Image, ListGroup } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import { useContext, useEffect } from 'react';
import { Context } from '../index';
import { fetchDevices, fetchTypes, removeDevice, removeType } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const Admin = observer(() => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [modalDeviceType, setModalDeviceType] = useState({})
    const { device } = useContext(Context)

    const updateCat = () => {
        fetchTypes()
            .then(data => device.setTypes(data))
            .catch(err => console.log(err))

        fetchDevices()
            .then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        updateCat()
    }, [])

    return (
        <Container className='content'>
            <h3>Панель администрирования</h3>
            <Container className='display-flex'>
                <Button
                    onClick={() => setTypeVisible(true)}
                    variant={'outline-dark'}
                    className='mt-4 mr-3'
                >
                    Добавить тип
                </Button>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreateDevice type={modalDeviceType} show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            </Container>
            <Accordion className='mt-4 p-2' alwaysOpen defaultActiveKey={['0']}>
                {device.types.map((type, index) =>
                    <Accordion.Item key={type.id} eventKey={index}>
                        <Accordion.Header className='d-flex'>
                            <h3 className='me-3'>{type.name}</h3>

                        </Accordion.Header>
                        <Accordion.Body>
                            <Button
                                variant={'danger'}
                                onClick={() => {
                                    if (window.confirm(`Удалить тип '${type.name}' и все относящиеся к нему изделия?`)) {
                                        removeType(type).then(updateCat)
                                    }
                                }}
                            >
                                Удалить тип
                            </Button>
                            <Button
                                className='ms-3'
                                variant='success'
                                onClick={() => {
                                    setModalDeviceType(type)
                                    setDeviceVisible(true)
                                }}
                            >
                                Добавить изделие
                            </Button>
                            <ListGroup>
                                {device.devices.filter((device) => device.typeId === type.id).map((device =>
                                    <ListGroup.Item className='display-flex mt-3' key={device.id}>
                                        <Button
                                            className='me-3'
                                            onClick={
                                                () => {
                                                    if (window.confirm('Удалить?')) {
                                                        removeDevice(device.id)
                                                            .then(updateCat)
                                                    }
                                                }
                                            }
                                            variant={'outline-danger'}
                                        >
                                            Удалить
                                        </Button>
                                        {/* <Button
                                            className='me-3'
                                            variant={'outline-dark'}
                                        >
                                            Изменить
                                        </Button> */}
                                        {device.name}
                                        {device.img.map(((image, index) =>
                                            <Image className='ms-3' key={index} width={30} height={30} src={process.env.REACT_APP_API_URL + image} />
                                        ))}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container >
    )
})

export default Admin
