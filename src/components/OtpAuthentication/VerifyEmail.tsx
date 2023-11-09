import { Button } from "antd";
import VerifyEmailStyle from "./VerifyEmail.style";

const VerifyEmail = () => {
  return (
    <VerifyEmailStyle>
      <div className="container">
        <h3>Verify your email</h3>
        <div className="verify-email">
          <div className="code-send">We have sent code to your email</div>
          <span className="email-text"> alesiaka******@mail.com</span>
        </div>
        <div className="digit-container">
          <div className="digit">5</div>
          <span className="digit">5</span>
          <span className="digit">5</span>
          <span className="digit">5</span>
        </div>
        <div>
          <Button className="verify-account-btn">
            <span className="btn-text">Verify Account</span>
          </Button>
          <div>
            <span className="resend-text">Resend code in</span>
            <span className="minutes"> 59:00</span>
          </div>
        </div>
      </div>
    </VerifyEmailStyle>
  );
};

export default VerifyEmail;
