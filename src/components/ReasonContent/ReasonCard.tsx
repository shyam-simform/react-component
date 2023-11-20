import DrivingImg from "../../assets/Reason/driving.svg"
import WalletImg from "../../assets/Reason/empty-wallet-change.svg"
import MoneySendImg from "../../assets/Reason/money-send.svg"
import statusImg from "../../assets/Reason/status-up.svg"
import ReasonCardStyle from "./ReasonCard.style"

const CardData = [
  {
    image: WalletImg,
    textOne: "Spend or save",
    textTwo: "daily"
  },
  {
    image: DrivingImg,
    textOne: "Spend while",
    textTwo: "traveling"
  },
  {
    image: MoneySendImg,
    textOne: "Send money",
    textTwo: "worldwide"
  },
  {
    image: statusImg,
    textOne: "Gain exposure to",
    textTwo: "financial assets"
  }
]
const ReasonCard = () => {
  return (
    <ReasonCardStyle>
      {CardData.map((items) => {
        return <div className="container">
          <div className= "reason-icon">
            <img  src={items.image} alt="" />
          </div>
          <span>{items.textOne}<br></br>{items.textTwo}</span>
        </div>
      })}
    </ReasonCardStyle>
  )
}

export default ReasonCard