function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/leather.jpg" alt="item" />
                <div>
                    <h3 className="text-uppercase">KOZHA SHOP</h3>
                    <p className="opacity-5">Лавка кожевника</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} heigth={18} src="/img/cart.png" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} heigth={18} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header;
