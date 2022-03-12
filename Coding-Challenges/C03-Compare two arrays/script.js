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
      if (obj1[objKey] != obj2[objKey]) {
        if (
          typeof obj1[objKey] == "object" &&
          typeof obj2[objKey] == "object"
        ) {
          // Checking object type as array or object
          if (JSON.stringify(obj1[objKey])[0] == "{") {
            compareObject(obj1[objKey], obj2[objKey]);
          } else {
            compareArray(obj1[objKey], obj2[objKey]);
          }
        } else {
          flag = 1;
          return flag;
        }
      } else {
        flag = 1;
        return flag;
      }
    }
  } else {
    flag = 1;
    return flag;
  }
}
// Creating function to compare array with in an array
function compareArray(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        if (typeof arr1[i] == "object" && typeof arr2[i] == "object") {
          if (arr1.toString()[0] == "[") {
            // Checking object type as array or object
            compareArray(arr1[i], arr2[i]);
          } else {
            let flag = compareObject(arr1[i], arr2[i]);
            if (flag == 1) {
              console.log("arrays are not equal");
              return;
            }
          }
        } else {
          console.log("arrays are not equal");
          return;
        }
      }
    }
  } else {
    console.log("Arrays are not equal");
    return;
  }
  console.log("Both arrays are equal");
}
compareArray(arr1, arr2);
