import { Button, Divider, Input, Radio } from "antd"
import OverPay from "../../../assets/Overpay.svg"
import Icon from "../../../assets/logo.svg"
import GoogleIcon from "../../../assets/google.svg"
import AppleIcon from "../../../assets/apple.svg"
import LeftViewStyle from "./LeftView.style"
import { Link } from "react-router-dom"
const LeftView = () => {
    return (
        <LeftViewStyle>
            <div className="container">
                <div className="logo-container">
                    <img src={Icon} alt="overpay Icon" />
                    <img src={OverPay} alt="OverPay Logo" />
                </div>
                <div className="signin-container">
                    <div className="sign-block">
                        <div className="header-container">
                            <h3>Sign in to Overpay</h3>
                            <div className="sub-heading">Send, spend and save smarter</div>
                        </div>
                        <div className="social">
                            <Button className="button-social">
                                <img src={GoogleIcon} alt="google-icon" />
                                <span className="m-hide">Sign In with</span> Google
                            </Button>

                            <Button className="button-social">
                                <img src={AppleIcon} alt="apple-icon" />
                                <span className="m-hide">Sign In with</span> Apple
                            </Button>
                        </div>

                        <Divider >Or with email</Divider>

                        <div className="input">
                            <Input placeholder="Username or email" className="label email" />
                            <Input.Password placeholder="Password" className="label password" />
                        </div>

                        <div className="frame">
                            <Radio defaultChecked={false}>
                                Remember me
                            </Radio>

                            <Link to="forgot-password">Forgot Password?</Link>
                        </div>
                        <Button className="signin-btn">
                            <span className="btn-text">Sign In</span>
                        </Button>
                        <div className="text"><span className="inner-text">Don’t have an account?</span> <span className="signup-text">Sign Up</span></div>
                    </div>
                </div>
                <div className="footer m-hide">
                    <div>Privacy Policy</div>
                    <div>Copyright 2022</div>
                </div>
            </div>
        </LeftViewStyle>
    )
}

export default LeftView