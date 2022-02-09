import React, { useState } from 'react';
import { Accordion, Container, Button, AccordionButton, Image, Row, ListGroup } from 'react-bootstrap';
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
        fetchTypes().then(data => device.setTypes(data)).catch(err => console.log(err))
        fetchDevices({
            limit: 8, page: device.page
        })
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
        <Container>
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
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header className='d-flex'>

                            <h3 className='ms-3 align-me'>{type.name}</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => {
                                        removeType(type)
                                        updateCat()
                                    }}
                                >
                                    Удалить тип
                                </Button>
                                <Button
                                    variant='success'
                                    onClick={() => {
                                        setModalDeviceType(type)
                                        setDeviceVisible(true)
                                    }}
                                    disabled={device.types.length === 0}
                                >
                                    Добавить изделие
                                </Button>
                                {device.devices.filter((device) => device.typeId === type.id).map((device =>
                                    <ListGroup.Item>
                                        <Button
                                            className='mb-3'
                                            onClick={() => {
                                                removeDevice(device.id)
                                                updateCat()
                                            }}
                                            variant={'outline-danger'}
                                        >
                                            Удалить
                                        </Button>                                        <Button
                                            className='mb-3'
                                            onClick={() => {
                                                removeDevice(device.id)
                                                updateCat()
                                            }}
                                            variant={'outline-dark'}
                                        >
                                            Изменить
                                        </Button>
                                        {device.name}
                                        {device.img.map((image =>
                                            <Image width={50} height={50} src={process.env.REACT_APP_API_URL + image} />
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
