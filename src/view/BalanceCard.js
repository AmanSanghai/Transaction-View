import {
  BalanceCardButtonStyles,
  BalanceCardStyle,
  ButtonStyle,
} from "../styles/styles";
import Withdraw from "../assets/images/up-arrow.png";
import Deposit from "../assets/images/down-arrow.png";

const BalanceCard = (props) => {
  return (
    <BalanceCardStyle>
      <span>Balance</span>
      <span
        style={{ fontSize: "2.5em", fontWeight: "bold" }}
      >{`Rs. ${props?.balance}`}</span>
      <BalanceCardButtonStyles>
        <ButtonStyle
          image
          style={{ borderRadius: "1.5em", textAlign: "center" }}
          onClick={() => {}}
          labelPosition="left"
        >
          <img src={Withdraw} style={{ height: "2em" }} alt={"icon"} />
          <span>Withdraw</span>
        </ButtonStyle>
        <ButtonStyle>
          <img src={Deposit} style={{ height: "2em" }} alt={"icon"} />
          <span>Deposit</span>
        </ButtonStyle>
      </BalanceCardButtonStyles>
    </BalanceCardStyle>
  );
};

export default BalanceCard;
