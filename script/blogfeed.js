import { getAllPosts } from "./posts.mjs";

const blogFeedContainer = document.getElementById("blogFeed");

window.onload = function () {
  //getAllPosts();

  refreshBlogFeed();
};

async function refreshBlogFeed() {
  var posts = await getAllPosts();
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
