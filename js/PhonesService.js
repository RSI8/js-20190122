const API_URL = 'https://mgrinko.github.io/js-20190122/api';
// const API_URL = 'http://127.0.0.1:8080/api';

const PhonesService = {
  getAll() {
    return this._sendRequest('/phones');
  },

  getById(phoneId) {
    return this._sendRequest(`/phones/${phoneId}`);
  },

  async _sendRequest(url) {
    const response = await fetch(API_URL + url + '.json');
    const data = await response.json();

    return data;

    return fetch(url)
      .then(response => response.json());

    return new Promise((resolve, reject) => {
      const fullUrl = `${API_URL}${url}.json`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fullUrl, true);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
        }
      };
    });
  }
};

export default PhonesService;
