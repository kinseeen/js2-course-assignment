import { createPost, getPost, updatePost } from "./posts.mjs";

const form = document.querySelector("#CreatePostForm");

const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get("mode");
var postType = document.getElementById("postType");
var submitType = document.getElementById("submitType");
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
  logoutUser();
});

if (mode === "edit") {
  populatePostDetails(urlParams.get("blogPostId"));
    postType.innerText = "Edit Post";
    submitType.innerText = "Save Changes";
} 

async function populatePostDetails(id) {
  var post = await getPost(id);
  console.log(post);
  form.querySelector("#title").value = post.data.title;
  form.querySelector("#body").value = post.data.body;
  form.querySelector("#image").value = post.data.media.url;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const title = form.querySelector("#title").value;
  const body = form.querySelector("#body").value;
  const mediaUrl = form.querySelector("#image").value;
  const requestBody = {
    title: title,
    body: body,
  };
  if (mediaUrl.trim() != "") {
    requestBody.media = {
      url: mediaUrl,
    };
  }
  var response = {};
  if(mode === "edit") { 
    response = await updatePost(urlParams.get("blogPostId"), requestBody);

  } else {
    response = await createPost(requestBody);
  }
    
  
  console.log(response);
  if (response.data) {
    window.location.href = "/html/blogfeed.html";
  } else {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: response.errors[0].message,
      confirmButtonText: "Dismiss",
    });
  }
});
