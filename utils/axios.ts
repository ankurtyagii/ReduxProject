import axios from 'axios';

const createInstance = async ({
    method = 'GET', data, params, url, responseType,
  }: any) => {
    return axios({
      // url: `https://api.sampleapis.com/baseball/${url}`,
      url: "https://api.sampleapis.com/baseball/hitsSingleSeason",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method,
      data,
      params,
      responseType,
    });
  };

  export {
    createInstance
  }