document.querySelector(".loginbtn").addEventListener("click", function () {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  if (!username || !password) {
    alert("Username or password can not be blank");
  } else if (username.length <= 5) {
    alert("username can not be less then 5 char");
  } else if (username[0] >= 0 && username[0] <= 9) {
    alert("Username can not start with digit");
  } else if (password.length <= 8) {
    alert("password can not be less then 8 char");
  } else {
    for (let i = 0; i < username.length; i++) {
      if (
        !(
          username[i] == "_" ||
          (username[i] >= 0 && username[i] <= 9) ||
          (username[i] >= "A" && username[i] <= "z")
        )
      ) {
        alert("Username should be alphabet, digit and '_' only.");
      } else {
        alert("You have entered correct Username and password format.");
      }
    }
  }
});
