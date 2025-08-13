import { baseUrl, getAuthHeaders } from "./constants";

const request = (url, options) => {
  return fetch(`${baseUrl}${url}`, options).then(checkResponse);
};

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getInitialCards = () => {
  return request("/items", { headers: getAuthHeaders() });
};

export const addCard = ({ name, imageUrl, weather }) => {
  return request("/items", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
};

export const removeCard = (_id) => {
  return request(`/items/${_id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
};

export const addLike = (_id, currentUser) => {
  return request(`/items/${_id}/likes`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      _id: currentUser._id,
    }),
  });
};

export const removeLike = (_id, currentUser) => {
  return request(`/items/${_id}/likes`, {
    method: "DELETE",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      _id: currentUser._id,
    }),
  });
};

export const getUserData = () => {
  return request(`/users/me`, {
    method: "GET",
    headers: getAuthHeaders(),
  });
};

export const updateUserInfo = ({ name, avatar }) => {
  return request(`/users/me`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      name,
      avatar,
    }),
  });
};
