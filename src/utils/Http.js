import axios from "axios";
// import { setUserBalance } from "../modules/user/actions";
//const base_url = `http://localhost/PhpCode/Sixpro_client_api/MatchApi/`;
const base_url = ` https://client-rest-api.vercel.app/v1`;
const casinoUrl = base_url;

const token = localStorage.getItem("access-token");
const userData = JSON.parse(localStorage.getItem("user-data") || "{}") || {};

const httpGet = async (url, params, isCasino = false) => {
  try {
    params = { ...params };

    const apiUrl = isCasino ? casinoUrl : base_url;
    const result = await axios({
      method: "GET",
      url: apiUrl + url,
      data: { ...params },
      headers: {
        withCredentials: false,
        token,
        user: userData?.data?.username,
      },
    });

    invalidToken(result.msg);

    return result;
  } catch (err) {
    console.error(err);
  }
};

const httpPost = async (url, params) => {
  try {
    // const apiUrl = isCasino ? casinoUrl : base_url;

    const result = await axios({
      method: "POST",
      url: base_url + url,
      data: { ...params },
      // headers: {

      //   user: userData?.data?.username,
      // },
    });

    console.log(result);

    invalidToken(result.data.msg);

    return result.data;
  } catch (err) {
    console.error(err);
  }
};

const invalidToken = (msg) => {
  if (msg === "invalid token") {
    localStorage.removeItem("user-data");
    localStorage.removeItem("access-token");

    window.location.href = "/login";
  }
};

export { httpGet, httpPost };
