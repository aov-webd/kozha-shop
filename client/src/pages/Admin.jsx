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
        fetchTypes()
            .then(data => device.setTypes(data))
            .catch(err => console.log(err))

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
                    <Accordion.Item key={type.id} eventKey={index}>
                        <Accordion.Header className='d-flex'>
                            <h3 className='me-3'>{type.name}</h3>
                            <Button
                                variant={'outline-danger'}
                                onClick={() => {
                                    if (window.confirm(`Удалить тип '${type.name}'?`)) {
                                        removeType(type).then(updateCat)
                                    }
                                }}
                            >
                                Удалить тип
                            </Button>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <Button
                                    variant='success'
                                    onClick={() => {
                                        setModalDeviceType(type)
                                        setDeviceVisible(true)
                                    }}
                                >
                                    Добавить изделие
                                </Button>
                            </div>
                            <ListGroup>
                                {device.devices.filter((device) => device.typeId === type.id).map((device =>
                                    <ListGroup.Item className='display-flex'>
                                        <Button
                                            className='me-3'
                                            onClick={() => {
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
                                        <Button
                                            className='me-3'
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
                                            <Image className='ms-3' width={50} height={50} src={process.env.REACT_APP_API_URL + image} />
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
