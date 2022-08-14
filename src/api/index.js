import queryString from 'qs';
import axios from 'axios'; 

import * as config from '../../config.json';


// 获取CPU数据
export const getCpuData = (param) => {
  console.log(`${config.url.cpu}?${queryString.stringify(param)}`);

  return axios({
    url: `${config.url.cpu}?${queryString.stringify(param)}`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
};

export const getMemData = (param) => {
  console.log(`${config.url.mem}?${queryString.stringify(param)}`);

  return axios({
    url: `${config.url.mem}?${queryString.stringify(param)}`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
};