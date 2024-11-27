export default function bubbleSortPlus(array) {
    const n = array.length;
  
    for (let j = 1; j <= n - 1; j++) {
      for (let i = n - 1; i >= j; i--) {
        if (array[i] < array[i - 1]) {
          let aux = array[i];
          array[i] = array[i - 1];
          array[i - 1] = aux;
        }
      }
    }   

    return array;
}