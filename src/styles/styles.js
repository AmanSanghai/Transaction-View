import styled from "styled-components";

export const Container = styled.section`
  width: 30em;
  height: 60em;
  background-color: darkcyan;
  border-radius: 3em;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const UserStyles = styled.section`
  margin: 1em 1em;
  display: flex;
  justify-content: space-between;
`;

export const BalanceCardStyle = styled.section`
  margin: 1em 1em;
  background-color: green;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
`;

export const BalanceCardButtonStyles = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonStyle = styled.button`
  border-radius: 1.5em;
  align-items: center;
  display: flex;
`;
export const BeneficiaryCardStyles = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em 1em;
`;

export const ActionCardStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1em 1em;
`;

export const ActionButtonStyle = styled.section`
  padding: 0 0.5em;
`;

export const BeneficiaryListHeader = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;
`;

export const BeneficiaryListStyles = styled.section`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

export const BeneficiaryStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

export const Expander = styled.section`
  flex-grow: 1;
`;

export const TransactionHeader = styled.h3``;

export const TransactionCardStyles = styled.section`
  margin: 1em 1em;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
export const Transaction = styled.section`
  display: flex;
  flex-direction: row;
  padding: 1em 0;
`;
export const TransactionsStyle = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
