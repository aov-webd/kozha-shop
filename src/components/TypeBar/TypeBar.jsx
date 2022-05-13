import React from 'react'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import styles from './TypeBar.module.scss'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    console.log(device)
    return (
        <ul>
            {device?.types && device?.types?.map(type =>
                <li
                    className={styles.item + (type.id === device.selectedType.id ? (' ' + styles.active) : '')}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </li>)}
        </ul>
    )
})

export default TypeBar
