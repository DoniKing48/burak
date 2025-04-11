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

function hasProperty(obj: Record<string, any>, key: string): boolean {
  return obj.hasOwnProperty(key);
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));
