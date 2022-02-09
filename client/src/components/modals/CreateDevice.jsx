import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { Context } from '../../index';

const CreateDevice = ({ show, onHide, type }) => {
    const { device } = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [file, setFile] = useState(null)
    // const [type, setType] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data)).catch(err => console.log(err))
        // fetchDevices().then(data => device.setDevices(data.rows)).catch(err => console.log(err))
    }, [])

    const addDevice = () => {
        try {
            if (name === '' || price === null || file === null) {
                alert('Заполните все поля')
                return
            }
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', name)
            formData.append('price', `${price}`)
            for (let f of file) {
                formData.append('img', f)
                console.log(f)
            }
            console.log(formData.img)
            formData.append('typeId', type.id)
            createDevice(formData).then(() => onHide())
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {`Добавить изделие '${type.name}'`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название изделия'
                    />
                    <Form.Control
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость изделия'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file' multiple
                        onChange={(e) => {
                            setFile(e.target.files)
                        }}
                    />
                    <Form.Control
                        className='mt-3'
                        as='textarea'
                        rows={5}
                        placeholder='Введите описание'
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
