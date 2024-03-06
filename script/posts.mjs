import {post,get} from "./http-service.mjs"


function getAllPosts() {
    const endpoint = "/social/posts";

    get(endpoint)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
} 

function getPost(id) {
    const endpoint = "/social/posts/" + id

    get(endpoint)
    .then((response)=> {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

function createPost(title, body, mediaUrl) {
    const endpoint = "/social/posts"

    const requestBody = {
        "title": title,
        "body": body,
        "media": {
            "url" : mediaUrl
        }
    }

   post(endpoint, requestBody)
   .then((response) => {

   })
   .catch((error) => {

   }); 



}

