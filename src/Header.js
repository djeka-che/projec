function Header() {
    return <header>
        <div className='Logo'>
            <img src='my-img/LOGO.svg' alt='Logo-Intocode'/>
        </div>
        <div className='Menu'>
            <ul>
                <li>ОДЕЖДА</li>
                <li>ДЕТЯМ</li>
                <li>КНИГИ</li>
                <li>КОМПЬЮТЕРЫ</li>
                <li>КОНТАКТЫ</li>
            </ul>
        </div>
        <div className='Cart'>
            <img src='my-img/cart.svg'/>
            <p>выход</p>
        </div>

    </header>
}

export default Header