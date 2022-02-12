import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import styles from './TypeBar.module.scss'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup variant="flush">
            {device.types.map(type =>
                <ListGroup.Item
                    className={styles.item}
                    action variant="light"
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup>
    )
})

export default TypeBar
