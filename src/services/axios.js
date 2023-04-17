import axios from "axios";

export const getData = (URL, query = "") => {
  console.log("In axios");
  return axios.get(URL + query, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
