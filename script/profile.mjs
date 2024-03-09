import { logoutUser } from "./authentication.mjs";

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
  logoutUser();
});