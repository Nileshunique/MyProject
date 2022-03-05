let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", add);
btn[1].addEventListener("click", sub);
btn[2].addEventListener("click", mul);
btn[3].addEventListener("click", div);
function fetchData() {
  const fn = Number(document.querySelector("#firstNumber").value);
  const sn = Number(document.querySelector("#secondNumber").value);
  return [fn, sn];
}
function setData(data) {
  document.querySelector("#result").value = data;
}
function add() {
  let data = fetchData();
  setData(data[0] + data[1]);
}
function sub() {
  let data = fetchData();
  setData(data[0] - data[1]);
}
function mul() {
  let data = fetchData();
  setData(data[0] * data[1]);
}
function div() {
  let data = fetchData();
  setData(data[0] / data[1]);
}
