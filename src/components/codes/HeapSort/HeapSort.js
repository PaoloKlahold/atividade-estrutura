// referência bibliográfica: https://learnersbucket.com/tutorials/algorithms/heap-sort-algorithm-in-javascript/
const minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
    }

    if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
    }

    if (smallest !== i) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

        minHeapify(arr, n, smallest);
    }
}

export default function heapSort(arr) {
    let n = arr.length;

    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        minHeapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        minHeapify(arr, i, 0);
    }
}