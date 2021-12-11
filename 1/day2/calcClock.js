
const readlineSync = require('readline-sync');

const hour = 4
const min = 47

// 시침의 각도
let hourD = (360/12) * hour

// 분침의 각도
const minD = (360/60) * min

// 분에 따른 시침의 추가적인 이동
const extra = (30 / 60) * min

hourD += extra

console.log(hourD, minD)

const gap = hourD - minD

console.log(Math.abs(gap))

const answer = readlineSync.question('what is the gap? ')

console.log("각도는" + answer)
///////////////////////////////