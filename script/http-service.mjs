const baseUrl = 'https://v2.api.noroff.dev/'
const apiKey = 'be4ab55c-d5b0-44c3-8a11-67a7dafddd10'

async function get(url) {
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
}

async function put(url, data) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("PUT request failed:", error);
    throw error;
  }
}

async function post(url, data) {
  console.log(data);
  console.log(JSON.stringify(data));
  console.log(baseUrl + url);
  try {
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        mode: "no-cors",
        "Content-Type": "application/json"
        
        
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
}

async function del(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "DELETE",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
}

export { get, put, post, del };
