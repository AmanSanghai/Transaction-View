import { useEffect, useState } from "react";
import { getData } from "../services/axios";
import { Beneficiary_List } from "../constants/api";
import { createBeneficiaryDTO } from "../dtos/beneficiaryDTO";
import {
  BeneficiaryCardStyles,
  BeneficiaryListHeader,
  BeneficiaryListStyles,
  BeneficiaryStyle,
} from "../styles/styles";

import UserImage from "../assets/images/man.png";
const BeneficiaryList = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  useEffect(() => {
    getData(Beneficiary_List)
      .then((res) => {
        setBeneficiaries(createBeneficiaryDTO(res.data));
      })
      .catch((err) => console.log("Error Occurred", err));
  }, []);

  return (
    <BeneficiaryCardStyles>
      <BeneficiaryListHeader>
        <span>Beneficiary</span>
        <span>See All</span>
      </BeneficiaryListHeader>
      <BeneficiaryListStyles>
        {beneficiaries?.map(({ beneficiaryName }) => {
          return (
            <BeneficiaryStyle>
              <img src={UserImage} style={{ height: "2em" }} alt="icon" />
              <div>{beneficiaryName}</div>
            </BeneficiaryStyle>
          );
        })}
      </BeneficiaryListStyles>
    </BeneficiaryCardStyles>
  );
};

export default BeneficiaryList;
