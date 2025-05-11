/* PROJECT STANDARTS:
 - Logging standarts:
 - Naming standarts:
   function, method, variable => camelCase       goHome
   class => PaskalCase                           MemberService
   folder => KEBAB-CASE                          router-admin
   css => snake_case                             button_name
 - ERROR handlings:   
 */

 /*
    Traditional API
    Rest API
    GraphQL API
    ...
  */

/* FRONTEND DEVELOPMENT
  TRADITIONAL FD = BSSR
  MODERN FD = SPA
*/ 

/*COOCKIES
  request join
  kamikadze
*/ 

/*Validations:
Frontend v
Pipe v
Backend v
Database v
*/

// G-TASK

// function getHighestIndex(arr: number[]): number {
//     return arr.indexOf(Math.max(...arr));
// }

// console.log(getHighestIndex([5, 21, 122, 21, 1008]));

// H-TASK

// function positiveNumbers(arr: number[]): string[] {
//     return arr.filter(str => str > 0).map(String);
// }
// console.log(positiveNumbers([-1,-2,-3,4,5,6,-7,8]));

// I-TASK

// function majorityElement(arr: number[]): number {
//     return arr.sort((a, b) =>
//         arr.filter(n => n === b).length - arr.filter(n => n === a).length
//     )[0];
// }

// console.log(majorityElement([7,2,7,6,5,1,2,9,8,6,3,6,5]));

/* J-TASK 
 Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
 MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

// function findLongestWord(str: string) {
//   return str.split(' ').reduce((a: string, b: string) => (b.length > a.length) ? b : a);
// };
// console.log(findLongestWord("I come from Uzbekistan"));

// H2-TASK

// function getDigits(str: string): string {
//   return str.replace(/\W/g, "");
// }

// console.log(getDigits("M2IT4"))

// K-TASK

// const countVowels = (str: string) => (str.match(/[aeiou]/gi) || []).length;
// console.log(countVowels("qwertyuiopasdfghjklzxcvbnmO"));

// L-TASK
// function reverseSentence(sentence: string) {
//   return sentence
//     .split(" ")
//     .map((word: string) => word.split("").reverse().join("")) 
//     .join(" "); 
// }

// console.log(reverseSentence("we like coding!")); 

// M-TASK 
// function getSquareNumbers(arr: number[]) {
//   return arr.map((num: number) => ({ number: num, square: num * num }));
// }

// console.log(getSquareNumbers([100, 222, 369]));

// O-TASK

// function calculateSumOfNumbers(arr: any[]) {
//   const numbers = arr.filter(item => typeof item === 'number' && !isNaN(item));
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// const result = calculateSumOfNumbers([101, "1218", {son: 120}, true, 7, 6*8+77, "ws"]);
// console.log(result);

// P-TASK

// function objectToArray(obj: any) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ c: 100, d: 50, s: 6-9 }));

// Q-TASK

// function hasProperty(obj: Record<string, any>, key: string): boolean {
//   return obj.hasOwnProperty(key);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));

// R-TASK

// function calculate(str: string): number {
//   return str
//     .split('+')
//     .map(Number)
//     .reduce((a, b) => a + b);
// }

// console.log(calculate("1+3")); 

// S-TASK

// function missingNumber(arr: number[]) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let result = [];

//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log (missingNumber([2,0,4,0,6]))

// T-TASK

// function mergeSortedArrays(arr1: any, arr2: any) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 100, 5, 31], [4, 1, 6, 30]));

// U-TASK

// function sumOdds(number: number) {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//       if (i % 2 !== 0) {
//           count++;
//       }
//   }
//   return count;
// }

// console.log(sumOdds(9))

// V-TASK

// function countChars(str:string): { [key:string]: number } {
//   const result: {[key:string]: number} = {};

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log (countChars("Madaminjon shakarsan shakar!"));

// W-TASK

// function chunkArray(arr: string | any[], size: number) {
//   const result = [];
  
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
  
//   return result;
// }

// const chunked = chunkArray([1,2,3,4,5,6,7,8,9,10], 3);
// console.log(chunked);

// X-TASK

// function countOccurrences(obj: { [x: string]: any; model?: string; steer?: { model: string; size: number; }; }, str: string) {
//   let count = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       count += countOccurrences(obj[key], str);
//     } else if (key === str) {
//       count++;
//     }
//   }

//   return count;
// }

// const result = countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model');
// console.log(result);

// Y-TASK

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const set2 = new Set(arr2);
//   return arr1.filter(item => set2.has(item));
// }

// console.log(findIntersection([1,2,3], [3,2,0]));

// Z-TASK

// function sumEvens(arr: number[]): number {
//   return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
// }

// console.log(sumEvens([1,2,3,4,5,6,7,2.2]));

// ZA-TASK

// function sortByAge(arr: { age: number }[]) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// const result = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
// console.log(result);

// ZB-TASK

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(100, 200));

// ZC-TASK
function changeNumberInArray(i: number, arr: any[], num: number): any[]  {
  arr[i] = num;
  return arr;
}

console.log(changeNumberInArray(0, [1, 4, 9, 2], 3));