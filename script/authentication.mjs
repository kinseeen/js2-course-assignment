import { post } from "./http-service.mjs";

document.getElementById("loginButton").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  loginUser(email, password);
});

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

function logoutUser() {
  
}