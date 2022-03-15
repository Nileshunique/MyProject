var xhr = new XMLHttpRequest();
xhr.open("GET", "books.json", true);
xhr.onload = function () {
  let result = JSON.parse(this.responseText);
  document.querySelector(".search").addEventListener("click", () => {
    var searchKeyword = document.querySelector("#bookCodeInput").value;
    var table = document.querySelector(".output");
    table.innerHTML = "";
    if (searchKeyword) {
      var thead = document.createElement("thead");
      thead.innerHTML = `<tr>
            <th width="100px">Title</th>
            <th width="100px">Author</th>
            <th width="100px">Country</th>
            <th width="100px">Language</th>
            <th width="">Link</th>
            <th width="100px">Pages</th>
            <th width="100px">Year</th>
          </tr>`;
      table.append(thead);
      var k = 0;
      var tbody = document.createElement("tbody");
      for (let i = 0; i < result.length; i++) {
        if (
          result[i].language.toLowerCase().includes(searchKeyword.toLowerCase())
        ) {
          k = 1;
          var tr = document.createElement("tr");
          tr.innerHTML = `<td>${result[i].title}</td>
                      <td>${result[i].author}</td>
                      <td>${result[i].country}</td>
                      <td>${result[i].language}</td>
                      <td>${result[i].link}</td>
                      <td>${result[i].pages}</td>
                      <td>${result[i].year}</td>`;
          tbody.append(tr);
        }
      }
      if (k == 0)
        table.innerHTML = `<tr><td>Book of <b><i>${searchKeyword}</i></b> Language is not found.</td></tr>`;
      table.append(tbody);
    }
  });
};
xhr.send();
