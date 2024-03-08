const baseUrl = "https://v2.api.noroff.dev/";
const apiKey = "10e3a9e9-f8ec-4711-b994-9c80bf37438c";

async function get(url, requireAuth = true) {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTA5LCJuYW1lIjoia2luZSIsImVtYWlsIjoia2luamFrNTQyNTdAc3R1ZC5ub3JvZmYubm8iLCJiaW8iOm51bGwsImNyZWF0ZWQiOiIyMDI0LTAzLTA0VDE4OjE0OjQwLjMxMFoiLCJ1cGRhdGVkIjoiMjAyNC0wMy0wNFQxODoxNDo0MC4zMTBaIiwiY3JlZGl0cyI6MTAwMCwidmVudWVNYW5hZ2VyIjpmYWxzZSwiYXZhdGFyIjp7ImlkIjoiZDkxMzlkNzEtN2U4Mi00NTY0LTg2ZjItZmVjNzVhOTRiYTljIiwidXJsIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzk1NDc5NDU0MTMtNDk3ZTFiOTlkYWMwP2Nyb3A9ZW50cm9weSZjcz10aW55c3JnYiZmaXQ9Y3JvcCZmbT1qcGcmcT04MCZoPTQwMCZ3PTQwMCIsImFsdCI6IkEgYmx1cnJ5IG11bHRpLWNvbG9yZWQgcmFpbmJvdyBiYWNrZ3JvdW5kIiwic29jaWFsUG9zdElkIjpudWxsLCJhdWN0aW9uTGlzdGluZ0lkIjpudWxsLCJob2xpZGF6ZVZlbnVlSWQiOm51bGwsInVzZXJBdmF0YXJJZCI6NTA5LCJ1c2VyQmFubmVySWQiOm51bGwsImJvb2tJZCI6bnVsbCwib2xkR2FtZUlkIjpudWxsLCJvbmxpbmVTaG9wUHJvZHVjdElkIjpudWxsLCJyYWlueURheXNQcm9kdWN0SWQiOm51bGwsImdhbWVIdWJQcm9kdWN0SWQiOm51bGwsInNxdWFyZUV5ZXNQcm9kdWN0SWQiOm51bGx9LCJiYW5uZXIiOnsiaWQiOiIyZWNkZWYxYi0xNTM2LTRjYmUtODBmYS0yYjM2YjBjYjExZTUiLCJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTU0Nzk0NTQxMy00OTdlMWI5OWRhYzA_Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZpdD1jcm9wJmZtPWpwZyZxPTgwJmg9NTAwJnc9MTUwMCIsImFsdCI6IkEgYmx1cnJ5IG11bHRpLWNvbG9yZWQgcmFpbmJvdyBiYWNrZ3JvdW5kIiwic29jaWFsUG9zdElkIjpudWxsLCJhdWN0aW9uTGlzdGluZ0lkIjpudWxsLCJob2xpZGF6ZVZlbnVlSWQiOm51bGwsInVzZXJBdmF0YXJJZCI6bnVsbCwidXNlckJhbm5lcklkIjo1MDksImJvb2tJZCI6bnVsbCwib2xkR2FtZUlkIjpudWxsLCJvbmxpbmVTaG9wUHJvZHVjdElkIjpudWxsLCJyYWlueURheXNQcm9kdWN0SWQiOm51bGwsImdhbWVIdWJQcm9kdWN0SWQiOm51bGwsInNxdWFyZUV5ZXNQcm9kdWN0SWQiOm51bGx9LCJpYXQiOjE3MDk1ODU2NDV9.TEEZbi2-fid_CpTeHmX_1vk7ijniUkNjco6M93ncV5I"
  );
  const token = authorize(requireAuth);

  try {
    const response = await fetch(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
    });
    const responseAsJson = await response.json();
    return responseAsJson;
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
        "Content-Type": "application/json",
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

async function post(url, data, requireAuth = true) {
  console.log(data);
  console.log(JSON.stringify(data));
  console.log(baseUrl + url);
  const token = authorize(requireAuth);
  try {
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
        mode: "no-cors",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
}

async function del(url, requireAuth = true) {
  const token = authorize(requireAuth);
  try {
    const response = await fetch(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
      method: "DELETE",
    });
    if (response.status >= 200 && response.status < 300) {
      return true;
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
}

function authorize(requireAuth) {
  if (requireAuth) {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token saved");
    }
    return token;
  }
}

export { get, put, post, del };
