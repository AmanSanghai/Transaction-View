export const createBeneficiaryDTO = (data) => {
  return data.map((beneficiary) => {
    return {
      beneficiaryId: beneficiary.id,
      beneficiaryName: beneficiary.name,
      beneficiaryUPI: beneficiary.upi,
    };
  });
};
