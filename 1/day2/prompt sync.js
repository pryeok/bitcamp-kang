
const prompt = require('prompt-sync')();

const num = parseInt((Math.random() * 100) % 2)

console.log(num)

// 사용자에게 입력
const answer = prompt("ODD  O? EVEN  E?  ")

const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"
//num 이 0이고 answer가 E

//num 이 1이고 answer가 O

// if(condition1 || condition2) {
//     console.log("정답")
//     return
// }
//     console.log("오답")

const result = condition1 || condition2 ?"정답":"오답"

console.log(`최종결과는 ${result}`)