import axios from 'axios';

// const baseUrl = typeof document === 'undefined' ? 'http://localhost:8000' : '';
const baseUrl = 'http://localhost:8000';

export const api = {
  get,
  post
};

function get (url = '/', headers = {}) {
  const authHeader = authHeaderFromStorage();
  const headersObject = {
    headers: {
      Authorization: authHeader,
      ...headers
    }
  };

  return axios.get(`${baseUrl}${url}`, headersObject)
    .then(response => response);
}

function post (url = '/', payload, headers = {}) {
  const authHeader = authHeaderFromStorage();
  const headersObject = {
    headers: {
      Authorization: authHeader,
      ...headers
    }
  };
  return axios.post(`${baseUrl}${url}`, payload, headersObject)
    .then(response => response);
}

function authHeaderFromStorage () {
  if (!localStorage.getItem('authToken')) {
    return {};
  }
  const authHeader = `JWT ${localStorage.getItem('authToken')}`;

  return authHeader;
}
