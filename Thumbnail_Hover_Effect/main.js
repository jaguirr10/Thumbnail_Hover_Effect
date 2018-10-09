// Juan Aguirre


//GET ELEMENTS
const myForm = document.getElementById("myForm"); 
const containerResponse = document.getElementById("containerResponse");
const getText = document.getElementById("getText");
const getApiData = document.getElementById("getApiData");
const postApi = document.getElementById("postApi");
//ADD LISTENERS
getText.addEventListener("click", getUsers);
getApiData.addEventListener("click", getUsers);
postApi.addEventListener("click", postUsers);
//REQUEST FUNCTIONS
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json' } }).


  then(resp => resp.json()).
  then(resp => r_getData(resp));
}
function postUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json' },

    body:
    JSON.stringify({ title: 'thetitle', body: 'thebody' }) }).

  then(resp => resp.json()).
  then(resp => r_postData(resp));
}
//RENDER FUNCTIONS
function r_getData(resp) {
  containerResponse.innerHTML = "";
  resp.forEach(i => {
    containerResponse.innerHTML +=
    `<ul class="list-group mb-3">
          <li class="list-group-item">${i.name}</li>
          <li class="list-group-item">${i.email}</li>
       </ul>`;
  });
}
function r_postData(resp) {
  containerResponse.innerHTML =
  `<h5>Your request has been completed !!!</h5>
        <ul class="list-group">
          <li class="list-group-item">Your title = ${resp.title}</li>
          <li class="list-group-item">Your body = ${resp.body}</li>
          <li class="list-group-item">Your Id = ${resp.id}</li>
        </ul>`;
}

