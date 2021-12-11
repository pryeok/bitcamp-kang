
function maxNum(arr){
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (temp<arr[i]){
            temp=arr[i]
        }
    }
    return temp
}

const targetArr= [1,3,15,20,8,10]
const result =maxNum(targetArr)
console.log(result)


