import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("There was an error when fetching data from the api", err);
      return err;
    });
};
