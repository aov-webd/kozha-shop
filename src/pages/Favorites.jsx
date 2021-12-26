import React from 'react';
import Card from '../components/Card/Card';
import { AppContext } from '../App'

function Favorites() {
    const {
        items,
        updField
    } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <h1>Мои закладки</h1>
            <div className="d-flex flex-wrap">
                {items.filter((item) => item.fav === 'true').map((item, index) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                            updField={(id, field) => updField(id, field)}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Favorites;
