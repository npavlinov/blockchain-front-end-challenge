import axios from 'axios';

export const fetchAddress = async address => {
  const resp = await axios.get(`https://blockchain.info/rawaddr/${address}?cors=true`);
  return resp.data;
}

export const fetchPrice = () => {
  return axios.get(`https://blockchain.info/q/24hrprice`)
              .then(resp => resp.data)
}

export const fetchCap = () => {
  return axios.get(`https://blockchain.info/q/marketcap`)
              .then(resp => resp.data)
}
