import { ActionButtonStyle, ActionCardStyle } from "../styles/styles";
import Download from "../assets/images/downloading.png";
import Upload from "../assets/images/upload.png";
import Transact from "../assets/images/transaction.png";
import Wallet from "../assets/images/wallet.png";
import Menu from "../assets/images/menu.png";

const ActionButtons = () => {
  return (
    <ActionCardStyle>
      <ActionButtonStyle>
        <img src={Download} style={{ height: "2em" }} alt="icon" />
      </ActionButtonStyle>
      <ActionButtonStyle>
        <img src={Upload} style={{ height: "2em" }} alt="icon" />
      </ActionButtonStyle>
      <ActionButtonStyle>
        <img src={Transact} style={{ height: "2em" }} alt="icon" />
      </ActionButtonStyle>
      <ActionButtonStyle>
        <img src={Wallet} style={{ height: "2em" }} alt="icon" />
      </ActionButtonStyle>
      <ActionButtonStyle>
        <img src={Menu} style={{ height: "2em" }} alt="icon" />
      </ActionButtonStyle>
    </ActionCardStyle>
  );
};

export default ActionButtons;
