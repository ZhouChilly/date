let arr = [1, 3, 42, 2, 21, 4123, 1231, 4, 12]

function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for(let i = 0, len=arr.length; i<len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

let xxx = quickSort(arr)
console.log(xxx)