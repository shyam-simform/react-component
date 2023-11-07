import { Button, Input } from "antd";
import ContentStyle from "./Content.style";

const Content = () => {
    return (
        <ContentStyle>
            <div className="container">
                <div >
                    <div className="title" >Need help with your<br />account?</div>
                    <div className="body">Enter the email address associated with your account and we will send you a link to reset your password.</div>
                </div>
                <div className="input">
                    <Input placeholder="Username or email" className="label email" />
                </div>
                <div >
                    <Button className="send-link-btn">
                        <span className="btn-text">Send Link</span>
                    </Button>
                    <div>Forgot your email?</div>
                </div>
            </div>
        </ContentStyle>
    );
};

export default Content;
