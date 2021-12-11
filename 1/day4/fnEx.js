
function printNums(from,to) {
    for (let i = from; i <= to ; i++) {
        console.log(i)
    }
    return
}
console.log(printNums(1,10))

// const result = printNums(1,10)
// console.log(result)



function printNames(str1, str2, str3) {

    console.log(str1)
    console.log(str2)
    console.log(str3)

}

// printNames()
printNames("AAA")
// printNames("AAA","BBB")
// printNames("AAA","BBB","CCC")


function calc(a, b, fn) {

    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a +1, b + 1)

    return result
}

console.log(calc(10,20, (x,y) => x + y))