import { baseUrl, headers } from "./constants";

const request = (url, options) => {
  return fetch(`${baseUrl}${url}`, options).then(checkResponse);
};

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getInitialCards = () => {
  return request("/items", { headers: headers });
};

export const addCard = ({ name, imageUrl, weather }) => {
  return request("/items", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      _id,
      name,
      weather,
      imageUrl,
    }),
  });
};

export const removeCard = (selectedCard) => {
  return request(`/items/${selectedCard._id}`, {
    method: "DELETE",
    headers: headers,
  });
};
