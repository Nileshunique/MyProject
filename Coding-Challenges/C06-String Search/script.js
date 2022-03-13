// intenciate an xhr object
var xhr = new XMLHttpRequest();
var cities;
// open xhr object
xhr.open("GET", "cities.json", true); // true for asynchronous

// what to do on progress
// xhr.onprogress = function () {
//   console.log("hello");
// };

//  {
//         "id": "1218",
//         "name": "Manali",
//         "state": "Himachal Praddesh"
//     }

// what to do on response ready
xhr.onload = function () {
  var cities = JSON.parse(this.responseText);
  let inputValue = document.querySelector("#cityName");
  inputValue.addEventListener("input", function () {
    let resultTag = document.querySelector("#result");
    resultTag.innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
      console.log(cities[i].name);
      if (
        cities[i].state.toLowerCase().includes(inputValue.value.toLowerCase())
      ) {
        var li = document.createElement("li");
        li.textContent = cities[i].name;
        resultTag.append(li);
      }
    }
    // console.log("function call");
  });
};
xhr.send();

// console.log(cities);
