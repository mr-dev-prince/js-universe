// object / JSON
const user = {
  name: "abc",
  age: 18,
  address: "bhopal",
  pincode: 274409,
};

// aam zindgi
const user3 = {
  name: user.name,
  age: user.age,
  address: user.address,
  pincode: user.pincode,
};

// bindaas zindgi
const user2 = { ...user };

const user4 = {
  nName: "x",
  ...user, // rest
  name: "xyz",
  age: 20,
};

// console.log("user 1 -> ", user);
// console.log("user 4 -> ", user4);

// default parameters

function fnName(name = "Guest", age) {
  console.log("My Name is " + name + " and my age is " + age);
}

// fnName(undefined, 20);

// JSON - parse & stringify

const userString = JSON.stringify(user); // "{\"name\":\"Prince\",\"age\":20}"

const userJson = JSON.parse(userString);

console.log(userJson.name)
