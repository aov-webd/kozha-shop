import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../index';
import DeviceItem from '../DeviceItem/DeviceItem';
import styles from './ItemsList.module.scss';


const ItemsList = observer(() => {
    const { device } = useContext(Context)
    return (
        <div className={styles.wrapper}>
            {device?.devices?.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                />
            )}
        </div>
    );
});

export default ItemsList;
