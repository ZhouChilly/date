// 在已经排序好的的数组中找到对应数值的下标
var index = 0;
function findIndex (a, arr) {
	if (arr.length === 1) {index += 0;}
	var pivotIndex = Math.floor(arr.length/2);
	var pivotValue = arr[pivotIndex];
	if (a<pivotValue) {
		findIndex(a,arr.slice(0,pivotIndex));
	} else if (a>pivotValue) {
		index += pivotIndex;
		findIndex(a,arr.slice(pivotIndex));
	} else {
		index += pivotIndex;
		console.log(index);
		return index;
	}
}
var arr = [1,2,4,6,7,9,12,13,15,16,17,18,19,21,23,56,78,79,88,99];
var xxx = findIndex(21,arr);
console.log(xxx);