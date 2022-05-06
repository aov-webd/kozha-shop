import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import styles from './Pages.module.scss';

const Pages = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className={styles.wrapper}>
            {(pages.length > 1) && pages.map(page =>
                <p
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                    className={styles.paginationEntry}
                >
                    {page}
                </p>
            )}
        </div>
    );
});

export default Pages;
