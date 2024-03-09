import { loginUser } from './authentication.mjs';

var loginForm= document.getElementById('loginForm');


loginForm.addEventListener('submit',  async function(event){
    event.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    var response = await loginUser(email, password);
    console.log("login");
    if (response.data) {
        window.location.href = "/html/blogfeed.html";
      } else {
        console.log("Login failed");
      }
});