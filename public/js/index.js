// console.log("hello from bundle.js");
import "@babel/polyfill";
import { login, logout } from "./login";
import { updateSettings } from "./updateSettings";
const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");

//  Values

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener("click", logout);
}

if (userDataForm) {
  userDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    // console.log("form", name, email);
    updateSettings(form, "data");
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    document.querySelector(".btn--save-password").innerHTML = "Updating.....";

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );
    document.querySelector(".btn--save-password").innerHTML = "Save Password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
}
