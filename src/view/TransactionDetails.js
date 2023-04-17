import { useEffect, useState } from "react";
import { getData } from "../services/axios";
import { TRANSACTIONS_DETAILS } from "../constants/api";
import { createTransactionDTO } from "../dtos/transactionDTO";
import Download from "../assets/images/down-arrow.png";
import Upload from "../assets/images/up-arrow.png";

import {
  Expander,
  Transaction,
  TransactionCardStyles,
  TransactionHeader,
  TransactionsStyle,
} from "../styles/styles";

const TransactionDetails = () => {
  const [transactions, setTransactions] = useState(null);
  useEffect(() => {
    getData(TRANSACTIONS_DETAILS)
      .then((res) => {
        setTransactions(createTransactionDTO(res.data));
      })
      .catch((err) => console.log("Error occurred", err));
  }, []);

  return (
    <TransactionCardStyles>
      <TransactionHeader>Transactions</TransactionHeader>
      <TransactionsStyle>
        {transactions?.map((transaction) => {
          return (
            <Transaction>
              <img
                src={
                  transaction?.transactionType === "Received"
                    ? Download
                    : Upload
                }
                alt={"icon"}
                style={{ height: "2em" }}
              />
              <div
                style={{
                  padding: "0 1em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>{transaction?.transactionType}</span>
                <span>{transaction?.transactionDate}</span>
              </div>
              <Expander />
              <div>{`Rs. ${transaction?.transactionAmount}`}</div>
            </Transaction>
          );
        })}
      </TransactionsStyle>
    </TransactionCardStyles>
  );
};

export default TransactionDetails;
