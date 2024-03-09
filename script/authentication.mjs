import { post } from "./http.mjs";

/* document.getElementById("loginButton").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  loginUser(email, password);
}); */

/**
 * Registers a new user.
 *
 * @param {string} username - The username of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise} A promise that resolves with the response from the server.
 */
async function registerUser(username, email, password) {
  const endpoint = "auth/register";
  const requestBody = {
    name: username,
    email: email,
    password: password,
  };

  return await post(endpoint, requestBody, false);
}

/**
 * Logs in a user with the provided email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 */
async function loginUser(email, password) {
  const endpoint = "auth/login";
  const requestBody = {
    email: email,
    password: password,
  };

  try {
    const response = await post(endpoint, requestBody, false);
    storeToken(response.data.accessToken);
    window.location.href = "/html/blogfeed.html";
  } catch (error) {
    console.error("Login failed:", error);
  }
 
}

function logoutUser() {
  clearToken();
  window.location.href = "/index.html";
}

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

function clearToken() {
  localStorage.removeItem("token");
}

export { registerUser, loginUser, logoutUser };