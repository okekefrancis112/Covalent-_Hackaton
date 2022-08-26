// Here all the communications need to be done with Covalent API would be carried out here

import axios from "axios";

// Declaration of some base data
const APIKEY = "ckey_734f1d56d86f424cad81af0241d";
const baseURL = "https://api.covalenthq.com/v1";
const chainId = "1";
const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

// here comes the functions

const Fetches = {
  // function to get all chains
  get_all_chain: async () => {
    let r_responds = null;
    await axios
      .get(
        `${baseURL}/chains/?quote-currency=USD&format=JSON&key=ckey_734f1d56d86f424cad81af0241d`
      )
      .then((data) => {
        // console.log(data.data.data.items);
        r_responds = data.data.data.items;
      })
      .catch((err) => console.log(err));

    return r_responds;
  },

  // fetching the balances of the token owned buythe addess passed to the function
  get_doa_balance: async (chainId, address) => {
    let r_responds = null;
    await axios
      .get(
        `${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`
      )
      .then((data) => {
        // console.log(data.data.data.items);
        r_responds = data.data.data.items;
      })
      .catch((err) => console.log(err));

    return r_responds;
  },

  // get historial porfolio value over time
  get_historical_data: async (chainId, address) => {
    let r_responds = null;
    await axios
      .get(
        `${baseURL}/${chainId}/address/${address}/portfolio_v2/?key=${APIKEY}`
      )
      .then((data) => {
        // console.log(data.data.data.items);
        r_responds = data.data.data.items;
      })
      .catch((err) => console.log(err.message));

    return r_responds;
  },

  // Get token holders as of any block height
  get_doa_token_holders: async (chainId, address) => {
    let r_responds = null;
    await axios
      .get(
        `${baseURL}/${chainId}/tokens/${address}/token_holders/?key=${APIKEY}`
      )
      .then((data) => {
        // console.log(data.data.data.items);
        r_responds = data.data;
      })
      .catch((err) => console.log(err));

    return r_responds;
  },

  // Get the last 25 transactions of the DAO {Last Hundred Transactions}
  get_doa_latest_trans: async (chainId, address) => {
    let r_responds = null;
    await axios
      .get(
        `${baseURL}/${chainId}/address/${address}/transactions_v2/?key=${APIKEY}`
      )
      .then((data) => {
        // console.log(data.data.data.items);
        r_responds = data.data.data.items;
      })
      .catch((err) => console.log(err));

    return r_responds;
  },
};

export default Fetches;
