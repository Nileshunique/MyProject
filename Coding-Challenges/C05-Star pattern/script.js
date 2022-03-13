function starPattern() {
  var n = prompt("enter any number in single digit");
  if (n <= 10) {
    for (let i = 1; i <= n; i++) {
      var rowPattern = "";
      for (let j = 1; j <= i; j++) {
        rowPattern += " *";
      }
      console.log(rowPattern);
    }
    for (let i = n - 1; i >= 1; i--) {
      rowPattern = "";
      for (j = i; j >= 1; j--) {
        rowPattern += " *";
      }
      console.log(rowPattern);
    }
    alert("Visit to console for Result");
  } else {
    alert("Please Enter single digit Number");
    this.starPattern();
  }
}
