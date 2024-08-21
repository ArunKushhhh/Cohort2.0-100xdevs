// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  //returns array of keys
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // returns array of values
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  //returns nested array which has key value pair
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  //returns boolean value: true if the specified property is a key in the object
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  //merge two obejcts: takes 3 arguments: 1. empty obejct 2. obj1 3. new object to be added 
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
