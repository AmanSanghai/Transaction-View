export const createTransactionDTO = (data) => {
  return data.map((transaction) => {
    return {
      transactionDate: transaction.date,
      transactionType: transaction.type === "received" ? "Received" : "Paid",
      transactionAmount: transaction.amount,
      beneficiary: transaction.beneID,
    };
  });
};
