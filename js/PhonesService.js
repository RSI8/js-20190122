// const API_URL = 'https://mgrinko.github.io/js-20190122/api';
const API_URL = 'http://127.0.0.1:8080/api';

const PhonesService = {
  getAll({ onSuccess, onError }) {
    this._sendRequest('/phones', onSuccess, onError);
  },

  getById({ phoneId, onSuccess, onError = () => {} }) {
    this._sendRequest(`/phones/${phoneId}`, onSuccess, onError);
  },

  _sendRequest(url, onSuccess, onError = () => {}) {
    const fullUrl = `${API_URL}${url}.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fullUrl, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        onSuccess(JSON.parse(xhr.responseText));
      } else {
        onError(`Error occurred: ${xhr.status}: ${xhr.statusText}`);
      }
    };
  }
};

export default PhonesService;
