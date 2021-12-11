

// 다차원 배열 (2차원 배열) = 배열 안에 배열

// const arr = [ [1,2], [3,4] ]


const arr = [
    [90,87,140],
    [120,130,150],
    [180,240,200],
    [180,140,190]
]

// 가장 매출이 좋았던 분기
// 각 분기별로 매출 평균을
// 만든다.
// 그 중에서 최대 평균을 찾는다.

const parr = []
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0

    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)
    console.log(tempAvg)
    parr.push(parseFloat(tempAvg))
    //parseFloat = 문자를 숫자로 변경
}
console.log(parr)

let max = 0
let period = 0

for (let i = 0; i < parr.length; i++) {

    if(parr[i] > max){
        max = parr[i]
        period = i
    }
}
console.log(`max: ${max}`)
console.log("period: " + (period + 1) + "분기입니다.")


// 최고 매출 월

// 객체 literal
const person = {name:"홍길동", phone:"111", age: 16}

console.log(person.name)
console.log(person.age)