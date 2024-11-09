import { Link } from "react-router-dom";



const Header = () =>{
    return(
        <>
        <header>
        <div className="container">
            <div className="header-main">
                <div className="header-logo">
                    <img src="/imges/logo.png" alt="" />
                </div>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                        <Link to="/order">
                            <li>Order</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
                <div className="btn">
                    <button className="btn1"><a href="Login">Login</a></button>
                    <button className="btn2"> <a href="Singup">Sing up</a></button>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}
export default Header;