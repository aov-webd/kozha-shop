import React from 'react'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import styles from './TypeBar.module.scss'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ul>
            {device?.types?.map(type =>
                <li
                    className={styles.item}
                    action variant="light"
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </li>)}
        </ul>
    )
})

export default TypeBar
