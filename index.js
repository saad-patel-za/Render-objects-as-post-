const container = document.getElementById('my-container');

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

let html = '';
for (const post of posts) {
  html += `
    <div class="post">
     <div class="post-header">
        <div class="post-img"><img src="${post.avatar}">
        </div>
        <div class="post-user">
        <div class="user-name">${post.name}</div>
        <div class="user-loca">${post.location}</div>
         </div>
       </div>

       <div class="post-post"><img src ="${post.post}"></div>
       <div class="post-btns">
       <img src="images/icon-heart.png">
       <img src="images/icon-comment.png">
       <img src="images/icon-dm.png">
       </div>
       <div class="post-likes"><p>${post.likes} likes</p></div>
       <div class="post-comment"><p><strong>${post.username}</strong> ${post.comment}</p></div>
    </div>
  `;
}

container.innerHTML = html;
