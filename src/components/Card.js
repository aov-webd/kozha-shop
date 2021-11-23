function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <div className="justify-center">
                <img className="justify-center" width={133} height={112} src="/img/items/1.jpg" alt="item"/>
            </div>

            <h5>Кожаная сумка ручной работы</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <div className="button">
                    <img width={32} height={32} src="/img/btn-unchecked.svg" />
                </div>
            </div>
        </div>
    );
}

export default Card;
