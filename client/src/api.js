import axios from 'axios';

export const fetchAddress = async address => {
  const resp = await axios.get(`https://blockchain.info/rawaddr/${address}?cors=true`);
  return resp.data;
}

export const fetchTransaction = async transaction => {
  const resp = await axios.get(`https://blockchain.info/rawtx/${transaction}`);
  return resp.data;
}