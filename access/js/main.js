// Change text
function handleInput(event) {
  console.log(event.target.innerHTML);
}
//Hello user
const userName = document.querySelector("#navbar .user .logo h4");
let n = JSON.parse(localStorage.getItem("user"));
userName.innerHTML = `Hello ${n.username}`;
//Create new note
const newNote = document.querySelector("#content #status .icon");
const note = document.querySelector("#content #note");
const notiDel = document.querySelector("#note .head .delete");
const notiCre = document.querySelector("#note .head .create");
newNote.addEventListener("click", function () {
  note.style.display = "block";
  notiCre.style.display = "flex";
});
//Create note
const text = document.querySelector("#note .text p");
const outText = document.querySelector("#content .notes p");
const notes = document.querySelector("#content #status .notes");
const tittle = document.querySelector("#note .head h3");
let userTexts = [];
notiCre.addEventListener("click", function () {
  //Lay thoi gian
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getMilliseconds();
var time = `Create at ${hours} : ${minutes} : ${seconds} by ${n.username}`;
  //Them content va user vao mang
  let userText = {
    author: n.username,
    content: text.textContent,
    createAt: time,
  };
  userTexts.push(userText);
  localStorage.setItem("userTexts", JSON.stringify(userTexts));
  const x = JSON.parse(localStorage.getItem("userTexts"));
  //Create by 
const creatBy = document.querySelector("#note .head .name h5");
creatBy.innerHTML =time ;

  //Tao phan tu su dung innerHTML
  for (let i = 0; i < x.length; i++) {
    var newElement = `<div class="myNewDiv"> <div class="tittle">
${tittle.textContent}
  </div>
  <div class="content">${x[i].content}</div>`;
  }
  notes.innerHTML += newElement;
  //Remove note
  const removeText = document.querySelectorAll(".myNewDiv");
for (let i = 0; i < removeText.length; i++) {
  removeText[i].addEventListener("click", function () {
    notiDel.style.display = "flex";
    notiCre.style.display = "none";
    creatBy.innerHTML =x[i].createAt;
    notiDel.addEventListener("click",function(){
      removeText[i].remove();
    return;
    })
    
  });
}
});
const bug = document.querySelector("#note .comment");
const error = document.querySelector("#note .a");
bug.addEventListener("click",function(){
  error.style.display = "block";
  error.innerHTML = "Tính năng đang phát triển quay lại sau";
  setTimeout(() => {
    error.style.display = "none";
  }, 2000);
})