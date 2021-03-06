import React, { useState, useContext } from 'react';
import { Form, Modal, Button } from 'react-bootstrap'
import { createType, fetchTypes } from '../../http/deviceAPI';
import { Context } from '../../index';

const CreateType = ({ show, onHide }) => {
    const { device } = useContext(Context)

    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value })
            .then(fetchTypes)
            .then(data => device.setTypes(data))
            .catch(err => console.log(err))
            .finally(() => {
                setValue('')
                onHide()
            })
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
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        placeholder={"Введите название типа"}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
