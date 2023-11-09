import NavbarStyle from "./Navbar.style";
import OverPay from "../../assets/Overpay-White.svg";
import Icon from "../../assets/logo.svg";
import { Button, Layout, Menu } from "antd";

const Navbar = () => {
    return (
        <NavbarStyle>

            <div className="menu">
                <div className="menu-icon">
                    <img src={Icon} alt="icon" />
                    <img src={OverPay} alt="OverPay" />
                </div>
                <div className="menu-btn">
                    <div >
                        <Button className="btn">Sign In</Button>
                    </div>
                </div>
            </div>
        </NavbarStyle>
    );
};

export default Navbar;
