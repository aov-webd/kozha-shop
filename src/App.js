import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
        <Drawer />
        <Header />
        <div className="content p-40">
            <div className="mb-40  d-flex align-center justify-between">
                <h1 className="">Все изделия</h1>
                <div className="search-block d-flex">
                    <div className="ml-10 d-flex align-center">
                        <img width={12} height={12} src="/img/search.png" alt="Search" />
                    </div>

                    <input placeholder="Поиск ..." />
                </div>
            </div>
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  );
}

export default App;
