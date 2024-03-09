import { post, get, del } from "./http-service.mjs";

async function getAllPosts() {
  const endpoint = "social/posts";

  var response = await get(endpoint);
  return response;
}

/**
 * Retrieves a post by its ID.
 *
 * @param {number} id - The ID of the post to retrieve.
 * @returns {Promise} A promise that resolves with the response from the server.
 */
async function getPost(id) {
  const endpoint = "social/posts/" + id;

  var response = await get(endpoint);
  return response;
}

/**
 * Deletes a post with the specified ID.
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise} A promise that resolves when the post is deleted.
 */
async function deletePost(id) {
  const endpoint = "social/posts/" + id;
  return await del(endpoint);
}


/**
 * Creates a new post.
 *
 * @param {Object} requestBody - The request body containing the post data.
 * @returns {Promise<Object>} A promise that resolves to the response object.
 */
async function createPost(requestBody) {
  const endpoint = "social/posts";
  return await post(endpoint, requestBody);
}

export { getAllPosts, getPost, createPost, deletePost };
