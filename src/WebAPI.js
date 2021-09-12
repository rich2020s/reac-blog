const Base_URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(`${Base_URL}/posts?_sort=createdAt&_order=desc&_limit=5`).then(
    (res) => {
      return res.json();
    }
  );
};
export const SignUp = (nickname, username, password) => {
  return fetch(`${Base_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};
export const login = (username, password) => {
  return fetch(`${Base_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};
export const getMe = () => {
  const userToken = localStorage.getItem("user_token");
  return fetch(`${Base_URL}/me`, {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  }).then((res) => res.json());
};
export const addPost = (title, body) => {
  const userToken = localStorage.getItem("user_token");
  return fetch(`${Base_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${userToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

export const getSinglePost = (id) => {
  return fetch(`${Base_URL}/posts?id=${id}`).then((res) => res.json());
};
export const getThatPage = (page) => {
  return fetch(
    `${Base_URL}/posts?_page=${page}&_sort=createdAt&_order=desc&_limit=5`
  );
};
