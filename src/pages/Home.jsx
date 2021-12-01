import Card from '../components/Card/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    updField
}) {
    return (
        <div className="content p-40">
            <div className="mb-40  d-flex align-center justify-between">
                <h1 className="">{searchValue? `Поиск по запросу: ${searchValue}`: "Все изделия"}</h1>
                <div className="search-block d-flex">
                    <div className="ml-10 d-flex align-center">
                        <img width={12} height={12} src="/img/search.png" alt="Search" />
                    </div>

                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="CloseSearch"
                        />
                    )}
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items
                        .filter((item) => item.name.toLowerCase().includes(searchValue))
                        .map((item, index) => (
                            <Card
                                key={index}
                                item={item}
                                onPlus={(id, field) => updField(id, field)}
                                onFav={(id, field) => updField(id, field)}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Home;
