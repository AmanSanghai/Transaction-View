import { UserStyles } from "../styles/styles";
import UserImage from "../assets/images/profile.png";
import Bell from "../assets/images/bell.png";

const User = (props) => {
  return (
    <UserStyles>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={UserImage}
          style={{ padding: "0 1em", height: "2em" }}
          alt="icon"
        />
        <span>{`Hey, ${props?.name}!`}</span>
      </div>
      <img src={Bell} style={{ padding: "0 1em", height: "2em" }} alt="icon" />
    </UserStyles>
  );
};

export default User;
