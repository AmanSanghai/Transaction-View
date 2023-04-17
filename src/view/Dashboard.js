import { useEffect, useState } from "react";
import { USER_DETAILS } from "../constants/api";
import { createUserDTO } from "../dtos/userDTO";
import { getData } from "../services/axios";
import User from "./User";
import BalanceCard from "./BalanceCard";
import BeneficiaryList from "./BeneficiaryList";
import TransactionDetails from "./TransactionDetails";
import ActionButtons from "./ActionButtons";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    getData(USER_DETAILS)
      .then((response) => {
        setUserDetails(createUserDTO(response.data));
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  }, []);

  return (
    <>
      <User name={userDetails?.userName} />
      <BalanceCard balance={userDetails?.userBalance} />
      <ActionButtons />
      <BeneficiaryList />
      <TransactionDetails />
      {/*<NavigationPane />*/}
    </>
  );
};

export default Dashboard;
