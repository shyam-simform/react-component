import RightViewStyle from "./RightVIew.style";
import VectorImg from "../../../assets/Vector.svg";
import GroupImg from "../../../assets/SignInImg/Group.svg";
import GroupSquareImg from "../../../assets/SignInImg/img.svg";

const RightView = () => {
  return (
    <RightViewStyle>
      
      <div className="vector-start">
        <img src={GroupImg} alt="vertical start" />
      </div>
      <div className="middle-frame">
        <img className="horizontal-group" src={GroupSquareImg} alt="horizontal group" />
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
