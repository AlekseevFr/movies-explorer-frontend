class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  login(email, password) {
    return this._request({
      url: '/signin',
      data: { email: email, password: password }
    });
  }
  register(name, email, password) {
    return this._request({
      url: '/signup',
      data: { name: name, email: email, password: password }
    });
  }
}
