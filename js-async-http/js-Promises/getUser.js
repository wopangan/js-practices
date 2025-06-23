// Practice - Simulated API requests with callback

function getUserInfo(userId, callback) {
  setTimeout(() => {
    const userInfo = {
      name: "John",
      email: "john@example.com",
    };
    callback(userInfo);
  }, 2000);
}

function getUserPosts(userId, callback) {
  setInterval(() => {
    const userPosts = ["Post 1", "Post 2", "Post 3"];
    callback(userPosts);
  }, 2500);
}

// Callback hell scenario
getUserInfo(1, (userInfo) => {
    console.log('User Info:', userInfo);

    // Functionalities here
    // will finish this one later
    const userInfoDiv = document.getElementById('userInfo');

    getUserPosts(1, (userPosts) => {
        console.log('User Posts:', userPosts);
        
        // Display user info and posts on the web page
        // This is where I will update the UI
    });
});