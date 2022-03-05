const btnclicked = document.getElementById("clicked");
btnclicked.addEventListener("click", function () {
  const input = document.getElementById("number");
  const inputValue = input.value;
  if (!inputValue) {
    alert("please enter any Number");
  } else if (isNaN(inputValue)) {
    alert("please enter number only");
    input.value = "";
    input.focus();
  } else {
    let html = `<tr><td>Table of ${inputValue}</td></tr>`;

    for (let i = 1; i <= 10; i++) {
      html += `<tr><td> ${i} * ${inputValue} = ${inputValue * i}</td></tr>`;
    }
    document.getElementById("result").innerHTML = html;
  }
});
