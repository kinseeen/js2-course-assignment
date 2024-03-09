import { post, get, del, put } from "./http.mjs";

/**
 * Retrieves all posts from the social media platform.
 * @returns {Promise} A promise that resolves to the response containing all posts.
 */
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
 * Retrieves filtered posts based on the specified tag.
 *
 * @param {string} tag - The tag to filter the posts by.
 * @returns {Promise} - A promise that resolves to the response containing the filtered posts.
 */
async function getFilteredPosts(tag) {
  const endpoint = "social/posts?_tag=" + tag;
  var response = await get(endpoint);
  return response;
}


/**
 * Searches for posts based on the provided search term.
 *
 * @param {string} searchTerm - The term to search for in the posts.
 * @returns {Promise} - A promise that resolves with the response from the server.
 */
async function searchPosts(searchTerm) {
  const endpoint = "social/posts/search?q=" + searchTerm;
  var response = await get(endpoint);
  return response;
}

/**
 * Updates a post with the given ID.
 *
 * @param {string} id - The ID of the post to update.
 * @param {object} requestBody - The updated data for the post.
 * @returns {Promise<object>} - A promise that resolves to the updated post.
 */
async function updatePost(id, requestBody) {
  const endpoint = "social/posts/" + id;
  return await put(endpoint, requestBody);
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



export { getAllPosts, getPost, createPost, deletePost, updatePost, getFilteredPosts, searchPosts};
