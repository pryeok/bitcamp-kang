// - 정해진 숫자만큼 출력하는 함수 만들기
// 이름 : printNums (from, to)
// 입력값 :
// 출력값 : 1-10

function printNums(from,to) {
    for (let i = from; i <= to; i++) {
        console.log(i)
    }
    return
}
printNums(1,15)

// - 배열을 주면 max값을 찾아내는 함수 만들기
// 이름 : maxNum (arr)
// 입력값 :
// 출력값 :

function maxNum(arr) {

    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(temp<arr[i]){
            temp=arr[i]
        }
    }
    return temp
}

const targetArr = [1,5,15,27,7,9]
const result = maxNum(targetArr)
console.log(result)


// - 배열을 주면 min값을 찾아내는 함수 만들기
// 이름 : minNum (arr)
// 입력값 :
// 출력값 :

function minNum(arr) {

    let temp2 = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(temp2>arr[i]){
            temp2=arr[i]
        }
    }
    return temp2
}

const targetArr2 = [1,5,15,27,7,9]
const result2 = minNum(targetArr2)
console.log(result2)


// - 로또 번호 생성 함수 만들기
// 이름 : lotto
// 입력값 :
// 출력값 :



function makeLotto(arr) {
    for (let i = 0; i < 6; i++) {
        let ranNum = (Math.random()*45+1).toFixed(0)
        if(arr.indexOf(ranNum)>-1){
            i--
            continue
        }else{
            arr.push(ranNum)
        }
    }
    return arr
}

const lottoArr = []
LottoArr = makeLotto(lottoArr)
console.log(LottoArr)



// - 매출/월
const salesArr = [
    {month:1, sales:90},
    {month:2, sales:87},
    {month:3, sales:140},
    {month:4, sales:120},
    {month:5, sales:130},
    {month:6, sales:150},
    {month:7, sales:180},
    {month:8, sales:240},
    {month:9, sales:200},
    {month:10, sales:180},
    {month:11, sales:140},
    {month:12, sales:190}
]

function Sale(arr){
    let max = 0
    let period = 0
    for (let i = 0; i < salesArr.length; i++) {
        if(salesArr[i].sales>max) {
            max = salesArr[i].sales
            period = i
        }
    }
    console.log(`max: ${max}`)
    console.log("period: " + (period + 1) + "분기입니다.")
}
Sale(salesArr)

