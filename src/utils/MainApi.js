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
      this._baseUrl
    }/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${
          localStorage.getItem('token')
        }`
      }
    }).then(this._responseTransform)
  }
  updateUserInfo(name, email) {
    return fetch(`${
      this._baseUrl
    }/users/me`, {
      method: 'PATCH',

      headers: {
        ...this._headers,
        authorization: `Bearer ${
          localStorage.getItem('token')
        }`
      },
      body: JSON.stringify({ name, email })
    }).then(this._responseTransform)
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
  getSavedMovies(data) {
    return fetch(`${
      this._baseUrl
    }/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${
          localStorage.getItem('token')
        }`
      }
    }).then(this._responseTransform)
  }
  saveMovie(data) {
    return fetch(`${
      this._baseUrl
    }/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Bearer ${
          localStorage.getItem('token')
        }`
      },
      body: JSON.stringify(data)
    }).then(this._responseTransform)
  }
  deleteMovie(id) {
    return fetch(`${
      this._baseUrl
    }/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${
          localStorage.getItem('token')
        }`
      }
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
  baseUrl: 'http://api.frmovies.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default mainapi
