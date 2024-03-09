import { getPost, deletePost } from "./posts.mjs";

const blogPostContainer = document.getElementById("blogPost");
var deleteButton = document.getElementById("deleteButton");
const postBlogId = new URLSearchParams(window.location.search).get(
  "blogPostId"
);

deleteButton.addEventListener("click", async function () {
  /**
   * Deletes a blog post.
   *
   * @param {number} postBlogId - The ID of the blog post to delete.
   * @returns {Promise} - A promise that resolves with the response from the server.
   */
  var response = await deletePost(postBlogId);
  if (response.status == "Forbidden") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You are not authorized to delete this post',
      confirmButtonText: 'Dismiss'
    })
    console.log("You are not authorized to delete this post");
    return;
  }
  window.location.href = "/html/blogfeed.html";
});

window.onload = function () {
  getPostDetails(postBlogId);
};

/**
 * Retrieves the details of a blog post based on the given ID.
 * @param {number} id - The ID of the blog post.
 * @returns {Promise<void>} - A promise that resolves when the blog post details are retrieved and displayed.
 */
async function getPostDetails(id) {
  var post = await getPost(id);
  var title = post.data.title;
  var body = post.data.body;
  var tags = post.data.tags;
  var comments = post.data._count.comments;
  var mediaUrl;
  if (post.data.media == null) {
    mediaUrl = "/images/14731032136_f4a3564dd5_c.jpg";
  } else {
    mediaUrl = post.data.media.url;
  }

  var blogPost = `
  <div class="py-4"></div>
  <section class="section">
      <div class="container">
      
          <div class="row justify-content-center">
              <div class=" col-lg-9   mb-5 mb-lg-0">
                  <article>
                      <h1 class="h2"> ${title}</h1>
                      <div class="post-slider mb-4">
                          <img src="${mediaUrl}" class="card-img">
                      </div>
                      <div class="content">
                          <p>${body}</p>
                      </div>
                  </article>            
  `;
  blogPostContainer.innerHTML = blogPost;
}
