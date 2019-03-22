import axios from 'axios';

export const fetchAddress = address => {
  return axios.get(`https://blockchain.info/rawaddr/${address}`)
              .then(resp => resp.data);
}

export const fetchTransaction = transaction => {
  return axios.get(`https://blockchain.info/rawtx/${transaction}`)
              .then(resp => resp.data);
}
