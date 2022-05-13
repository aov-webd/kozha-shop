import React, { useContext, useEffect } from 'react';
import TypeBar from '../../components/TypeBar/TypeBar';
import ItemsList from '../../components/ItemsList/ItemsList';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchDevices, fetchTypes } from '../../http/deviceAPI';
import Pages from '../../components/Pages';
import styles from './Catalogue.module.scss';

const Catalogue = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchTypes()
            .then(data => device.setTypes(data))
            .catch(err => console.log(err))

        fetchDevices({ limit: 8, page: device.page })
            .then(data => {
                device.setDevices(data?.rows)
                device.setTotalCount(data?.count)
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
                device.setDevices(data?.rows)
                device.setTotalCount(data?.count)
            })
            .catch(err => console.log(err))
    }, [device.page, device.selectedType])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <TypeBar />
                <ItemsList />
            </div>
            <Pages />
        </div>
    )
})

export default Catalogue
