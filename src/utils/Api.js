class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return this._request("/items", { headers: this._headers });
  }

  addCard({ _id, name, imageUrl, weather }) {
    return this._request("/items", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        _id,
        name,
        weather,
        imageUrl,
      }),
    });
  }

  removeCard(selectedCard) {
    return this._request(`/items/${selectedCard._id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

export default Api;
