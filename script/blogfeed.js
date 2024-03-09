import { getAllPosts, getFilteredPosts, searchPosts } from "./posts.mjs";
import { logoutUser } from "./authentication.mjs";

const blogFeedContainer = document.getElementById("blogFeed");
const logoutButton = document.getElementById("logoutButton");
const searchForm = document.getElementById("searchForm");
const filterForm = document.getElementById("filterForm");


searchForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  var searchTerm = searchForm.querySelector("#searchInput").value;
  console.log(searchTerm);
  var response = await searchPosts(searchTerm);
  
  
  updateView(response);

});

filterForm.addEventListener("submit", async function (event) { 
  event.preventDefault();
  var tag = filterForm.querySelector("#filterInput").value;
  console.log(tag);
  var response = await getFilteredPosts(tag);
  updateView(response);
});


logoutButton.addEventListener("click", function () {
  logoutUser();
});

window.onload = function () {
  refreshBlogFeed();
};

async function refreshBlogFeed() {
  var posts = await getAllPosts();
  updateView(posts);
}

function updateView(posts) {
  blogFeedContainer.innerHTML = "";
  posts.data.forEach((element) => {
    var blogImage;
    var postId = element.id;
    if (element.media == null) {
      blogImage = "/images/14731032136_f4a3564dd5_c.jpg";
    } else {
      blogImage = element.media.url;
    }
    var blogPost = `
    
              <div class="col">
                  <div class="card shadow-sm">
                      <img src="${blogImage}" class="bd-placeholder-img card-img-top" width="100%"
                          height="225">
                      <div class="card-body">
                          <p class="card-text"> ${element.title} </p>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                  <a href="/html/blogDetails.html?blogPostId=${postId}" button type="button"
                                      class="btn btn-sm btn-outline-secondary"> View post </a>
                                  <button type="button" class="btn btn-sm btn-outline-secondary"> Comment on post
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              
    `;
    blogFeedContainer.innerHTML += blogPost;
  });
}