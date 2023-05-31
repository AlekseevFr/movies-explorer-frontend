class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  login(data) {
    return fetch(`${
      this._baseUrl
    }/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._responseTransform)
  }
  getUserInfo() {
    return fetch(`${
      this.baseUrl
    }/users/me`, {headers: {
      ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
      }}).then(this._responseTransform)
  }
  register(data) {
    return fetch(`${
      this._baseUrl
    }/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._responseTransform)
  }
  _responseTransform(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${
      res.status
    }`);
  }
}

const mainapi = new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default mainapi
