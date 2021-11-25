import React from 'react';
import styles from './Card.module.scss';

function Card({title,
    price,
    imgUrl,
    onFavorite,
    onPlus}) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({title, imgUrl, price});
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <div className="justify-center">
                <img className="justify-center" width={133} height={112} src={imgUrl} alt="item"/>
            </div>

            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    width={32}
                    height={32}
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded? "/img/btn-checked.svg": "/img/btn-unchecked.svg"}
                    alt="added"
                />
            </div>
        </div>
    );
}

export default Card;
