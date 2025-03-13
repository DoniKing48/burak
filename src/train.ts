// G-TASK

// function getHighestIndex(arr: number[]): number {
//     return arr.indexOf(Math.max(...arr));
// }

// console.log(getHighestIndex([5, 21, 122, 21, 1008]));

// H-TASK

function positiveNumbers(arr: number[]): number[] {
    return arr.filter(num => num > 0);
}
console.log(positiveNumbers([-1,-2,-3,4,5,6,-7,8]));