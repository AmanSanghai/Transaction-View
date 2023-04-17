export const createUserDTO = (data) => {
  return {
    userID: data.userId,
    userName: data.name,
    userAddress: data.address,
    userBalance: data.balance,
  };
};
