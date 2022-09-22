const url = "https://jsonplaceholder.typicode.com/posts";

//index
const loading_Element = document.querySelector("#loading");
const post_Container = document.querySelector("#posts_container");

// post individual
const postPage = document.querySelector("#post");
const single_postContainer = document.querySelector("#post_container");
const comments_Container = document.querySelector("#comments_container");

const commentForm = document.querySelector("#comment_form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

const urlSearchParams = new URLSearchParams(window.location.search); 

const postId = urlSearchParams.get("id")

async function GetAll_Posts (){
const response = await fetch(url);

const data = await response.json()

loading_Element.classList.add("hide");

data.map( (post) => {
const div = document.createElement("div");
const title = document.createElement("h2");
const body = document.createElement("p");
const link = document.createElement("a");

title.innerText = post.title;
body.innerText = post.body;

link.innerText = "Ler";

link.setAttribute("href",`./post.html?id=${post.id}`);

div.appendChild(title);
div.appendChild(body);
div.appendChild(link);

post_Container.appendChild(div);
})



console.log(response);
console.log(data);
}


//Pegando Post Individual


async function getPost(id){
const [responsePost,responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
])

const dataPost = await responsePost.json();
const dataComments = await responseComments.json();

loading_Element.classList.add("hide");

postPage.classList.remove("hide");

const title = document.createElement("h1");
const body = document.createElement("p");


title.innerText = dataPost.title;
body.innerText = dataPost.body;

single_postContainer.appendChild(title);
single_postContainer.appendChild(body);

dataComments.map((c) => {
createComment(c);
})

}

function createComment(comment){
    const  div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");
    
    email.innerText = comment.email;
    
    commentBody.innerText = comment.body;
    
    div.appendChild(email);
    div.appendChild(commentBody);
    
    comments_Container.appendChild(div);
    
    } 

async function PostComment(comment){
const response = await fetch(`${url}/${postId}/comments`, {
method: "POST",
body: comment,
headers:{
"Content-type": "application/json",
}
})

const data = await response.json()

createComment(data);
}

if(!postId){
GetAll_Posts();
}else{
getPost(postId);
commentForm.addEventListener("submit", (e) => {
e.preventDefault();

let comment = {
email: emailInput.value,
body: bodyInput.value 
}

comment = JSON.stringify(comment);

PostComment(comment);
})
}

