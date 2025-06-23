// First example

// const checkAge = function(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("Access granted");
//         } else {
//             reject("Access denied");
//         }
//     });
// };

// checkAge(17)
//     .then(msg => console.log(msg))
//     .catch(err => console.error(err));

// Second Example

function getUserInfo(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = {
        1: {name: "John Doe", email: "johndoe@example.com"},
        2: {name: "Jane Smith", email: "janesmith@example.com"}
      };
      resolve(userInfo[userId]); // remove userId to show all the user info
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    const userPosts = {
      1: ['Post 1', 'Post 2', 'Post 3'],
      2: ["Jane's Post 1", "Jane's Post 2"]
    }
    resolve(userPosts[userId]); // remove [userId] to show all the user posts.
  }, 1500)
}

// Using Promises to simplify the code
getUserInfo(1)
  .then((userInfo) => {
    console.log('User Info:', userInfo);
    return getUserPosts(1);
  })
  .then((userPosts) => {
    console.log('User Posts:', userPosts);
  })
  .catch((error) => {
    console.error('An error occurred', error);
  });