import { createPost } from './posts.mjs';

const form = document.querySelector('#CreatePostForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const title = form.querySelector('#title').value;
    const body = form.querySelector('#body').value;
    const mediaUrl = form.querySelector('#image').value;
    const requestBody = {
        title: title,
        body: body
    };
    if (mediaUrl.trim() != "") {
        requestBody.media = {
            url: mediaUrl
        };
    }


    var response = await createPost(requestBody);
    console.log(response);
    if ( response.data) {
        window.location.href = "/html/blogfeed.html";
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: response.errors[0].message,
            confirmButtonText: 'Dismiss'
        })
    }
   
    
  
});