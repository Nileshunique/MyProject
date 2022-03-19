console.log(
  "%c First Create 2 array with different name",
  "color:red; font-weight:bolder"
);
console.log("Call %ccompareArray(arr1, arr2)", "color:red;font-size:15px");
arr1 = [
  "hello",
  "mohan",
  { name: "nilesh", marks: 98, hello: { name: "nilesh", marks: 98, abc: 34 } },
  32,
  ["nilesh", 13],
];
arr2 = [
  "hello",
  "mohan",
  { name: "nilesh", marks: 98, hello: { name: "nilesh", marks: 98 } },
  32,
  ["nilesh", 13],
];
var flag = 0;

// Creating function to compare object in any array
function compareObject(obj1, obj2) {
  let obj1Key = Object.keys(obj1); // creating key of an object
  let obj2Key = Object.keys(obj2);

  if (obj1Key.length == obj2Key.length) {
    for (let objKey of obj1Key) {
      // creating for loop acording to key in object
      console.log(obj1[objKey] == obj2[objKey]);
      if (obj1[objKey] != obj2[objKey]) {
        console.log(obj1 == obj2);
        if (
          typeof obj1[objKey] == "object" &&
          typeof obj2[objKey] == "object"
        ) {
          // Checking object type as array or object
          if (JSON.stringify(obj1[objKey])[0] == "{") {
            compareObject(obj1[objKey], obj2[objKey]);
          } else {
            compareNestedArray(obj1[objKey], obj2[objKey]);
          }
        } else {
          flag = 1;
          return;
        }
      }
    }
  } else {
    flag = 1;
    return;
  }
}
// Creating function to compare array with in an array
function compareNestedArray(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        if (typeof arr1[i] == "object" && typeof arr2[i] == "object") {
          // Checking object type as array or object
          if (JSON.stringify(arr1[i])[0] == "{") {
            compareObject(arr1[i], arr2[i]);
            if (flag == 1) return;
          } else {
            compareNestedArray(arr1[i], arr2[i]);
          }
        } else {
          flag = 1;
          return;
        }
      }
    }
  } else {
    flag = 1;
    return;
  }
}
function compareArray(arr1, arr2) {
  flag = 0;
  compareNestedArray(arr1, arr2);
  flag == 1
    ? console.log("arrays are not equal")
    : console.log("Both arrays are equal");
}
compareArray(arr1, arr2);
