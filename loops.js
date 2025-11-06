// for loop
// for-of loop
// forEach loop
// while loop
// do-while loop
// map
// filter

// for (let i = 0; i <= 10; i++) {
//   console.log(i + "\n");
//   continue;
// }

// let a = [1, 2, 3, "Vivek", 5];

// for(let prashant of a){
//     console.log(prashant);
// }

// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// forEach loop
// You cannot use break & continue;
// async/await don't actually work
// only works on arrays
// works with callback

// const fn = (num) => {
//   console.log(num);
// };

// a.forEach((val) => fn(val));

let a = [1,2,3,4,5,6,7,8,9,10];

let b = a.map((val, index) => {
    return val % 2 == 0 ? val : null;
});

let c = a.filter(val => val % 2 == 0)


console.log(c)
