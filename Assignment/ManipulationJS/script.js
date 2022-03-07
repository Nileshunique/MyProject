let body = document.getElementsByTagName("body");
table = `<table><tr><td>Number</td><td>Square</td></tr>`;
for (let i = 1; i <= 10; i++) {
  table += `<tr><td>${i}</td><td>${Math.pow(i, 2)}</td></tr>`;
}
table += `</table>`;
body[0].innerHTML = table;
