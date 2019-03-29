import axios from 'axios';

// Fetch BTC address from Blockchain API
export const fetchAddress = async address => {
  const resp = await axios.get(`https://blockchain.info/rawaddr/${address}?cors=true`);
  return resp.data;
}

// Fetch BTC price from Blockchain API
export const fetchPrice = () => {
  return axios.get(`https://blockchain.info/q/24hrprice`)
              .then(resp => resp.data)
}

// Fetch BTC Market cap from Blockchain API
export const fetchCap = () => {
  return axios.get(`https://blockchain.info/q/marketcap`)
              .then(resp => resp.data)
}
