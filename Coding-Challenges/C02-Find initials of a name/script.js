console.log(
  "please use %cfindInitial('Full Name')%c in console",
  "color:red; font-weight:bold",
  "color:black"
);
function findInitial(name) {
  let sortName = "";
  let flag = 0;
  name[0] != " " && name[0] >= "A" && name[0] <= "z"
    ? (sortName += name[0])
    : (flag = 1);
  for (let i = 1; i < name.length; i++) {
    if (flag == 1 && name[i] != " ") {
      sortName += name[i];
      flag = 0;
    }
    if (name[i] == " ") {
      flag = 1;
    }
  }
  console.log(sortName.toUpperCase());
}
findInitial("Shah Rukh Khan");
