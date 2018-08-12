// 在已经排序好的的数组中找到对应数值的下标
function binarySearch(target, arr, start, end) {
	var start = start || 0;
	var end = end || arr.length - 1
	while (start <= end) {
		var pivotIndex = Math.floor(start + (end - start) / 2);
		var pivotValue = arr[pivotIndex];
		if (target === pivotValue) {
			return pivotIndex
		} else if (target <= pivotValue) {
			return binarySearch(target, arr, start, pivotIndex - 1)
		} else {
			return binarySearch(target, arr, pivotIndex + 1, end)
		}
	} 
	return -1
}
var arr = [1,2,4,6,7,9,12,13,15,16,17,18,19,21,23,56,78,79,88,99];
var xxx = binarySearch(21, arr);
console.log(xxx);