document.addEventListener('DOMContentLoaded', runLogic, false);

function runLogic() {
  document.getElementById("loginForm").addEventListener("submit", login);
}


function login(e) {
  e.preventDefault();
  const login = document.loginForm.inputLogin.value;
  const pass = document.loginForm.inputPassword.value;

  if (login == "admin" && pass == "admin") {
    window.location.replace("admin.html");
    return false;
  }
  else {
    alert("Login was unsuccessful, please check your username and password")
  }
}
