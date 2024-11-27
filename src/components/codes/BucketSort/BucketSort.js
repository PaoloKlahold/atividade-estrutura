
/** Referência bibliográfica: https://reintech.io/blog/javascript-for-implementing-bucket-sort#google_vignette */
export default function bucketSort(array, bucketSize = 5) {
    if (array.length === 0) {
      return array;
    }
  
    var i;
    var minValue = array[0];
    var maxValue = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      } else if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }

    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }

    for (i = 0; i < array.length; i++) {
      buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
    }

    array.length = 0;
    for (i = 0; i < buckets.length; i++) {
      buckets[i].sort();
      for (var j = 0; j < buckets[i].length; j++) {
        array.push(buckets[i][j]);          
      }
    }
    return array;
}
  