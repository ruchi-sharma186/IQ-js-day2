console.log("Q1. ans");
var user = {
    name: "ruchi",
    profession: "teacher",
    hobbies: ["reading","dancing"]
}
 console.log(user);

 console.log("Q2. ans");
//there are three type of function 

// function without parameters

function a (){
 console.log("a");
}
 console.log("ruchi");
 
 //fuction with parameters and no return
  function a (b) {
    console.log(b);
    
  }
  console.log("sharma");
  // fuction with parameters and with return 
   function a (b) {
    return b;
   }
   console.log("hello ruchi");

   console.log("Q3. ans")
   // call stack
   function sayHello() {
    console.log("Hello");
  }
  function greet() {
    sayHello();
  }
  greet();
  
  // example of both
  console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

console.log("Q4. ans");

document.getElementById("title").innerText = "Hello, World!";

// console.log("Q5. ans");
// let n;
// console.log(n); // undefined

// console.log(b); // ReferenceError: b is not defined
 
// let result = "hello" / 2;
// console.log(result); // NaN


//  console.log("Q6. ans");
//  const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };

console.log("Q7.ans");
const obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key, obj[key]);
}


console.log("Q10.ans");
const numbers = [1, 2, 3, 4, 5, 6];

// Using map to square each number
const squares = numbers.map(num => num * num);

// Using filter to get only even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log("Original array:", numbers);
console.log("Squares (map):", squares);
console.log("Even numbers (filter):", evens);
      
console.log("Q11.ans");
        const binaryArray = [0, 1, 0, 1, 0, 1, 1, 0, 0];

        let zeroCount = 0;
        
        for (let num of binaryArray) {
            if (num === 0) {
                zeroCount++;
            }
        }
        
        console.log("Array:", binaryArray);
        console.log("Number of 0's:", zeroCount);


 console.log("Q12.ans");
 const numb = [10, 23, 44, 55, 66, 71, 80];

        let oddCount = 0;
        let evenCount = 0;
        
        for (let num of numb) {
            if (num % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        
        console.log("Array:", numb);
        console.log("Even numbers:", evenCount);
        console.log("Odd numbers:", oddCount);


console.log("Q13.ans");

let b="prepbytes";
        let count =0;
        for (let i=0;i<=b.length;i++)
        {
           let ch=b[i];
           if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U')
           {
               count++;
           }
        }
        console.log(count)




 

   
 
