import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"

function Card({
    item,
    updField,
    isLoading = false
}) {
    // const [isAdded, setIsAdded] = React.useState(item.cart === "true"? true: false);
    // const [isFav, setIsFav] = React.useState(item.fav === "true"? true: false);

    const onClickPlus = () => {
        updField(item.id, { 'cart': (item.cart === "true") ? 'false' : 'true' });
        // setIsAdded(!isAdded);
    }

    const onClickFav = () => {
        updField(item.id, { 'fav': (item.fav === "true") ? 'false' : 'true' });
        // setIsFav(!isFav);
    }

    return (
        <div className={styles.card}>
            {
                isLoading ? (
                    <>
                        <ContentLoader
                            speed={0.8}
                            width={600}
                            height={275}
                            viewBox="0 0 600 265"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
                            <rect x="0" y="170" rx="5" ry="5" width="150" height="15" />
                            <rect x="0" y="200" rx="5" ry="5" width="105" height="15" />
                            <rect x="0" y="239" rx="5" ry="5" width="80" height="25" />
                            <rect x="118" y="234" rx="10" ry="10" width="32" height="32" />
                        </ContentLoader>
                    </>
                ) : (
                    <>

                        <img className={styles.itemImage} height={160} src={item.imgUrl} alt="item" />

                        <h5>{item.name}</h5>

                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>{item.price} руб.</b>
                            </div>

                            <img
                                className={styles.favorite}
                                onClick={onClickFav}
                                src={(item.fav === "true") ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                                alt="liked"
                            />
                            <img
                                className={styles.plus}
                                width={32}
                                height={32}
                                onClick={onClickPlus}
                                src={(item.cart === "true") ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"}
                                alt="added"
                            />
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Card;
