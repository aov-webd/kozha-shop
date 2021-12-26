import React from 'react';
import Card from '../components/Card/Card';
import { AppContext } from '../App'

function Catalogue() {

    const {
        items,
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        isLoading,
        updField
    } = React.useContext(AppContext);

    const renderItems = function () {
        return (
            (isLoading ? [...Array(10)] : items.filter((item) => item.name.toLowerCase().includes(searchValue)))
                .map((item, index) => (
                    <Card
                        key={index}
                        isLoading={isLoading}
                        item={item}
                        updField={(id, field) => updField(id, field)}
                    />
                )
                )
        )
    }

    return (
        <div className="content p-40">
            <div className="mb-40  d-flex align-center justify-between">
                <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : "Все изделия"}</h1>
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
                    renderItems()
                }
            </div>
        </div>
    )
}

export default Catalogue;
