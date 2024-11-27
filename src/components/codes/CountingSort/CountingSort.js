/** Referência bibliográfica: https://www.tutorialspoint.com/implementing-counting-sort-in-javascript#:~:text=The%20counting%20sort%20is%20a,place%20in%20the%20output%20array. */
export default function countingSort(arr) {
    if (arr.length === 0) {
       return arr;
    }
     
    // Define the range of values in the input array
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
       if (arr[i] < min) {
          min = arr[i];
       }
       if (arr[i] > max) {
          max = arr[i];
       }
    }
     
    // initialize the required arrays
    const count = new Array(max - min + 1).fill(0);
    const output = new Array(arr.length);
     
    // count the number of occurrences
    for (let i = 0; i < arr.length; i++) {
       count[arr[i] - min]++;
    }
     
    // calculate the prefix sum of the count array
    for (let i = 1; i < count.length; i++) {
       count[i] += count[i - 1];
    }
     
    // the output array in sorted order
    for (let i = arr.length - 1; i >= 0; i--) {
       output[count[arr[i] - min] - 1] = arr[i];
       count[arr[i] - min]--;
    }
    return output;
}
 