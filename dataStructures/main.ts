function insertAt(arr: number[], element: number, index: number): number[] {
  if (index < 0 || index > arr.length) {
    console.log("index out of bounds")
  }
  const newArr = [...arr]

  for (let i = 0; i < newArr.length; i++) {
    if (i < index) {
      newArr[i] = arr[i]
    } else if (i === index) {
      newArr[i] = element
    } else {
      newArr[i] = arr[i - 1]
    }
  }
  return newArr

}

const originalArray = [1, 2, 3, 4, 5];
const element = 10;
const indexToInsert = 2;

const newArray = insertAt(originalArray,element,indexToInsert);
console.log(newArray)

