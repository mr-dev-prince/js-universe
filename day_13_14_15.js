// console.log("start")

// // setTimeInterval(()) // not available in js - available in browswer - browser api

// // asynchronous function used to schedule a task. - available in js

// // setTimeout(callback fn, time in ms);

// setTimeout(() => {
//   console.log("inside set time out");
// }, 0); // 3000ms - 3sec

// console.log("end");

// promises

// const myPromise = new Promise( (resolve, reject))

// const myPromise = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => resolve(data.json()))
//     .catch((err) => reject(err));
// });

// // then -> resolved
// // catch -> reject

// myPromise
//   .then((data) => console.log("this is then ->", data))
//   .catch((err) => console.log("this is catch -> ", err));

//https://jsonplaceholder.typicode.com/todos/1

// async-await

const fetchData = async () => {
  try {
    const data1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    console.log(await data1.json());
    console.log(await data2.json());
  } catch (error) {
    console.log("this is errorr -->",error);
  }
};

fetchData();
