import { checkResponse } from "./api";
import { baseUrl, headers, getAuthHeaders } from "./constants";

export const signup = (email, password, name, avatar) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
      name,
      avatar,
    }),
  }).then(checkResponse);
};

export const signin = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
};

export const tokenCheck = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: getAuthHeaders(),
  }).then(checkResponse);
};
