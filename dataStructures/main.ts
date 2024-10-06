const arr: number[] = [1,2,3]

arr.push(4)
for(let i = 0; i< arr.length; i++) {
  console.log(arr[i])
}
arr.pop()
console.log("")
arr.forEach(element => {
  console.log(element)
});

