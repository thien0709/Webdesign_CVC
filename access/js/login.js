// Change box
const box = document.querySelector("#main #box");

const changeLogin = document.querySelector("#main #login h5");
const changeRegister = document.querySelector("#main #register h5");
changeRegister.addEventListener("click", function () {
  box.classList.add("active");
});
changeLogin.addEventListener("click", function () {
  box.classList.remove("active");
});
// Notion
const loginBtn = document.querySelector("#main #login button");
const registerBtn = document.querySelector("#main #register button");
const emailRes = document.querySelector("#main #register .email input");
const userRes = document.querySelector("#main #register .name input");
const passRes = document.querySelector("#main #register .pass input");
const notification = document.querySelector("#noti");
const textNoti = document.querySelector("#noti h5");
const iconNoti = document.querySelector("#noti i");
registerBtn.addEventListener("click", function () {
  if (
    emailRes.value.length == 0 ||
    userRes.value.length == 0 ||
    passRes.value.length == 0
  ) {
    let error = "fa-solid fa-triangle-exclamation";
    iconNoti.className = error;
    iconNoti.style.color = "var(--red)";
    textNoti.innerHTML = "Đăng kí lỗi";
    notification.style.display = "flex";
    if (
      emailRes.value.length == 0 ||
      userRes.value.length == 0 ||
      passRes.value.length == 0
    ) {
      emailRes.focus();
    }
  } else {
    let accept = "fa-solid fa-circle-check";
    iconNoti.className = accept;
    iconNoti.style.color = "var(--green)";
    textNoti.innerHTML = "Đăng kí thành công";
    notification.style.display = "flex";
    box.classList.add("active");
    setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
    const user = {
      username: userRes.value,
      password: passRes.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
  }
});
//Check account
const nameLogin = document.querySelector("#login .name input");
const passLogin = document.querySelector("#login .pass input");
const linkHome = document.querySelector("#login button a");
const usersArr = [
  {
    username: "thien123",
    password: "123",
  },
  {
    username: "thien2004",
    password: "123",
  },
];
loginBtn.addEventListener("click", function () {
  const x = JSON.parse(localStorage.getItem("user"));
  for (let i = 0; i < usersArr.length; i++) {
    if (
      nameLogin.value.trim() == usersArr[i].username &&
      passLogin.value.trim() == usersArr[i].password
    ) {
      let user = {
        username: usersArr[i].username,
        password: usersArr[i].password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      linkHome.href = "./note.html";
      return;
    }
  }
  if (
    nameLogin.value.trim() == x.username &&
    passLogin.value.trim() == x.password
  ) {
    linkHome.href = "./note.html";
    return;
  }
  for (let i = 0; i < usersArr.length; i++) {
  if (
    nameLogin.value.trim() != usersArr[i].username ||
    passLogin.value.trim() != usersArr[i].password ||
    (nameLogin.value.trim() != x.username) ||
      (passLogin.value.trim() != x.password)
  ) {
    nameLogin.focus();
    let error = "fa-solid fa-triangle-exclamation";
    iconNoti.className = error;
    iconNoti.style.color = "var(--red)";
    textNoti.innerHTML = "Đăng nhập lỗi";
    notification.style.display = "flex";
    setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
  }
}
});
