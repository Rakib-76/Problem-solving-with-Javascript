// Problem 1

// Reverse String

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Rakib ")); 


// problem 2
// Count the vowels

function countVowels (str){
    str=str.toLowerCase();
    let count = 0;
    const vowels = "aieoue";
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }

    }
    return count;
}
console.log(countVowels("programming"));

// Problem 3

// Find the Paildrome

function isPlaindrome (str){
    str = str.toLowerCase();
    const reversed = str.split("").reverse().join("")
    return str === reversed;
}
console.log("Madam =>",isPlaindrome("Madam")?"Plaindrome":" Not Plaindrome");

// Problem 4

// Find the Maxnumber

function findMaxNumber (arr){
    return Math.max(...arr)

}
console.log("Max number=>",findMaxNumber([1,2,5,3,8,6]));

// using loop for big array

function findMaxNumber (arr){
    if(arr.length === 0) return null;
    let max = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr [i] > max){
            max = arr[i];
        }
    }
    return max;

}
console.log("Max number=>",findMaxNumber([9,5,1,7,3,8,]));  


// problem 5
// Remove duplicate
// easier way

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,3,2,4,1]));       

// Using loop
function removeDuplicates (arr){
    const uniqueArr = [];
    for (let i = 0 ; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1,2,3,5,1,3,4,6]));

// Provblem 6
// Sum of all numbers in array

function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];

    }
    return sum;

}
console.log("Sum =>",sumArray([1,2,3,4,5,6,3,4,6]));


// Problem 7
// Find even number in Array

function findEvenNumber (arr){
    let evens = [];
    for(let i = 0;i < arr.length; i++){
        if (arr[i] % 2 === 0){
                evens.push(arr[i]);
        }
    }
    return evens
}
console.log("Even =>",findEvenNumber([1,2,6,3,4,8,9,2]));

// Problem 8
// Capitalize First a string 

function capitalizeWords (strr){
    let words = strr.split(" ");
    for (let i= 0; i < words.length ; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello world"));


// Problem 9
// Find the Factorial of a Number

function factorial(num){
    let result = 1;
    for(let i = 1 ; i <= num ; i++){
        result *= i ;
        // result = result * i;

    }
    return result;
}
console.log(factorial(5));


// problem 10
// Ping Pong challenge 

function pingPong (){
    for (let i = 1 ; i<=20 ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("PingPong");
        }else if ( i % 3 === 0){
            console.log("Ping");
        } else if ( i % 5 === 0){
            console.log("Pong");
        }else{
            console.log(i);
        }
    }

}

pingPong();