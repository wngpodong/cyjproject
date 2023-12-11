import { Link, useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {

    return (

        <div className="header">
            <div className="header-inner">
                <div className="header-left">
                    <div className="logo">
                        <Link to="/">
                            <img src="../img/cozy_house_logo.png" />
                        </Link>
                    </div>
                </div>
                <div className="header-right">
                    <div className="menu-wrap">
                        <Link to="/">
                            <div className="first-menu">HOME</div>
                        </Link>
                    </div>
                    <div className="menu-wrap">
                        <Link to="/reserve">
                            <div className="second-menu">RESERVE</div>
                        </Link>
                    </div>
                    <div className="menu-wrap">
                        <Link to="/board">
                            <div className="third-menu">BOARD</div>
                        </Link>
                    </div>
                    <div className="menu-wrap">
                        <Link to="/login">
                            <div className="fourth-menu">LOGIN</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header;