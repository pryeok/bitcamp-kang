
const arr = ['타노스', '아이언맨', '블랙 위도우']

console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

// arr[3] = '블랙팬서'
// arr.push('블랙팬서')

const changedlength = arr.push('블랙팬서')

console.log(changedlength)

console.log(arr.indexOf("캡틴 아메리카"))

arr.splice(1,1)

console.log(arr)

for (let i = 0; i < arr.length; i++) {
     if(arr[i] === '블랙 위도우') {
         // break
         continue
    }
    console.log(i)
    console.log(arr[i])
}

console.log("------------------------------------------")

























