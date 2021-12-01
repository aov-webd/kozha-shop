import Card from '../components/Card/Card';

function Favorites({items, updField}) {
    return (
        <div className="content p-40">
            <h1>Мои закладки</h1>
            <div>
                {items.filter((item) => item.fav === 'true').map((item, index) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                            onPlus={(id, field) => updField(id, field)}
                            onFav={(id, field) => updField(id, field)}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Favorites;
