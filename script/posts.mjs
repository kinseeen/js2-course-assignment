import { post, get, del } from "./http-service.mjs";

async function getAllPosts() {
  const endpoint = "social/posts";

  var response = await get(endpoint);
  return response;
}

async function getPost(id) {
  const endpoint = "social/posts/" + id;

  var response = await get(endpoint);
  return response;
}

async function deletePost(id) {
  const endpoint = "social/posts/" + id;
  return await del(endpoint);
}


async function createPost(requestBody) {
  const endpoint = "social/posts";
  return await post(endpoint, requestBody);

}

export { getAllPosts, getPost, createPost, deletePost };
