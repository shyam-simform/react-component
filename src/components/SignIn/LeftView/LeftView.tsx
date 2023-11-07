import { Button, Divider, Input, Radio } from "antd"
import OverPay from "../../../assets/Overpay.svg"
import Icon from "../../../assets/logo.svg"
import GoogleIcon from "../../../assets/google.svg"
import AppleIcon from "../../../assets/apple.svg"
import LeftViewStyle from "./LeftView.style"
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
                            Sign In with Google
                        </Button>

                        <Button className="button-social">
                            <img src={AppleIcon} alt="apple-icon" />
                            Sign In with Apple
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

                        <div>Forgot Password?</div>
                    </div>
                    <Button className="signin-btn">
                        <span className="btn-text">Sign In</span>
                    </Button>
                    <div className="text"><span className="inner-text">Don’t have an account?</span> <span className="signup-text">Sign Up</span></div>
                    </div>
                </div>
                <div className="footer">
                    <div>Privacy Policy</div>
                    <div>Copyright 2022</div>
                </div>
            </div>
        </LeftViewStyle>
    )
}

export default LeftView