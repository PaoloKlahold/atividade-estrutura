import BubbleSort from './codes/BubbleSort/BubbleSort';
import BubbleSortPlus from './codes/BubbleSortPlus/BubbleSortPlus';
import CountingSort from './codes/CountingSort/CountingSort';
import HeapSort from './codes/HeapSort/HeapSort';
import InsertionSort from './codes/InsertionSort/InsertionSort';
import MergeSort from './codes/MergeSort/MergeSort';
import QuickSort from './codes/QuickSort/QuickSort';
import RadixSort from './codes/RadixSort/RadixSort';
import SelectionSort from './codes/SelectionSort/SelectionSort';
import ShellSort from './codes/ShellSort/ShellSort';
import BucketSort from './codes/BucketSort/BucketSort';


const actions = {
    bubbleSort: {
        title: 'bubbleSort',
        action: BubbleSort
    },
    bubbleSortPlus: {
        title: 'BubbleSortPlus',
        action: BubbleSortPlus
    },
    CountingSort: {
        title: 'CountingSort',
        action: CountingSort
    },
    HeapSort: {
        title: 'HeapSort',
        action: HeapSort
    },
    InsertionSort: {
        title: 'InsertionSort',
        action: InsertionSort
    },
    MergeSort: {
        title: 'MergeSort',
        action: MergeSort
    },
    QuickSort: {
        title: 'QuickSort',
        action: QuickSort
    },
    RadixSort: {
        title: 'RadixSort',
        action: RadixSort
    },
    SelectionSort: {
        title: 'SelectionSort',
        action: SelectionSort
    },
    ShellSort: {
        title: 'ShellSort',
        action: ShellSort
    },
    BucketSort: {
        title: 'BucketSort',
        action: BucketSort
    }
}       

export default actions;