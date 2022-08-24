import { baseUrl } from "../config";

export const User = {
  current() {
    return fetch(`${baseUrl}/user/current`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  },

  create(params) {
    return fetch(`${baseUrl}/user`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: params }),
    }).then((res) => res.json());
  },
};
