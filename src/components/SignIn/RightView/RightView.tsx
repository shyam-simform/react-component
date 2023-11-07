import RightViewStyle from "./RightVIew.style";
import VectorImg from "../../../assets/Vector.svg";
import SendMoneyImg from "../../../assets/SignInImg/modal - send money 1.png";
import GroupImg from "../../../assets/SignInImg/Group.svg";
import GroupSquareImg from "../../../assets/SignInImg/Group-square.svg";
import FrameImg from "../../../assets/SignInImg/Frame 50 (2).png";
import BalanceImg from "../../../assets/SignInImg/balance 1.png";
import VectorEnd from "../../../assets/SignInImg/Vector-End.svg"
const RightView = () => {
  return (
    <RightViewStyle>
      <div className="vector-start">
        <img src={GroupImg} alt="vertical start" />
      </div>
      <div className="middle-frame">
        <img className="horizontal-group" src={GroupSquareImg} alt="horizontal group" />
        <img className="cashback-frame" src={FrameImg} alt="frame image" />
        <img src={SendMoneyImg} alt="Send Money" />
        <img className="balance-info" src={BalanceImg} alt="Balance Info" />
        <img  className="horizontal-group-end" src={VectorEnd} alt="horizontal-group-end" />
      </div>
      <div className="get-title">Get better with money</div>
      <div className="get-body">
        Overpay help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a <span className="dollar">$20</span> bonus when you receive qualifying direct deposits
      </div>
      <div className="vector-end">
        <img src={VectorImg} alt="vector-end" />
      </div>
    </RightViewStyle>
  );
};

export default RightView;
