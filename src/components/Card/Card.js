import React from 'react';
import styles from './Card.module.scss';

function Card({
    item,
    onPlus,
    onFav,
}) {
    const [isAdded, setIsAdded] = React.useState(item.cart === "true"? true: false);
    const [isFav, setIsFav] = React.useState(item.fav === "true"? true: false);

    const onClickPlus = () => {
        // console.log('onClickPlus')
        const cart = isAdded? 'false': 'true';
        onPlus(item.id, {'cart': cart});
        setIsAdded(!isAdded);
    }

    const onClickFav = () => {
        // console.log('onClickFav')
        const fav = isFav? 'false': 'true';
        onFav(item.id, {'fav': fav});
        setIsFav(!isFav);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    onClick={onClickFav}
                    src={isFav? "/img/heart-liked.svg": "/img/heart-unliked.svg"}
                    alt="liked" />
            </div>
            <div className="justify-center">
                <img className="justify-center" width={133} height={112} src={item.imgUrl} alt="item"/>
            </div>

            <h5>{item.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{item.price} руб.</b>
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
