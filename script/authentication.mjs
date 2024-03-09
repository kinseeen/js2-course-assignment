import { post } from "./http-service.mjs";

document.getElementById("loginButton").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  loginUser(email, password);
});

/**
 * Registers a new user.
 *
 * @param {string} username - The username of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise} A promise that resolves with the response from the server.
 */
function registerUser(username, email, password) {
  const endpoint = "/auth/register";
  const requestBody = {
    name: username,
    email: email,
    password: password,
  };

  post(endpoint, requestBody)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Logs in a user with the provided email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 */
function loginUser(email, password) {
  const endpoint = "auth/login";
  const requestBody = {
    email: email,
    password: password,
  };
  console.log(requestBody);
  post(endpoint, requestBody)
    .then((response) => {
      if (response.data.accessToken) {
        window.location.href = "./html/profile.html";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function logoutUser() {}

/**
 * Stores the provided token in the browser's local storage.
 *
 * @param {string} token - The token to be stored.
 * @returns {void}
 */

function storeToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}
