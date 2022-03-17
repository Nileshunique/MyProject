function hammingDistance(str1, str2) {
  console.log("The Hamming distance between:");
  var HDN = 0;
  for (
    let i = 0;
    i < (str1.length <= str2.length ? str1.length : str2.length);
    i++
  ) {
    if (str1[i] != str2[i]) {
      HDN++;
    }
  }
  console.log(`"${str1}" and "${str2}" is ${HDN}`);
}
var str1 = prompt("Enter first string");
var str2 = prompt("Enter second string");
hammingDistance(str1, str2);
