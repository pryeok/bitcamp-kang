
//12시 38분
function calcTotal(hourValue,minValue) {
    //시침의 각도 구하는 함수 --> 입력시 12  출력각도
    function calcHour(hour) {
        return (360/12) * (hour % 12)
    }

//분침의 각도 구하는 함수
// const calcMin = min => 360/60) * min
   function calcMin(min) {
        return (360/60) * min
    }

//분침의 이동에 따른 시침의 이동 각도 구하는 함수
    function getExtra (min) {
        return (30/60) * min
    }

    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    console.log(result)

    return result > 180 ? 360-result:result
}

console.log(calcTotal(12,38))






