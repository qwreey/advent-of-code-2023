

function fetchNumbers(file) {
    const result = []
    for (let lineNum=0,line; line=file[lineNum]; lineNum++) {
        const numbers = line.matchAll(/\d+/g)
        for (let numdata; !(numdata=numbers.next()).done;) {
            const number = numdata.value[0]
            const start = numdata.value.index
            const end = start+number.length-1
            result.push({ number, start, end, line: lineNum })
        }
    }
    return result
}

function fetchSymbols(file,symbolRegex) {
    const result = []
    for (let lineNum=0,line; line=file[lineNum]; lineNum++) {
        const symbols = line.matchAll(symbolRegex)
        for (let symboldata; !(symboldata=symbols.next()).done;) {
            const symbol = symboldata.value[0]
            const start = symboldata.value.index
            result.push({ symbol, start, line: lineNum })
        }
    }
    return result
}

function checkIsInArea(symbol,number) {
    return number.start-1 <= symbol.start
        && number.end+1   >= symbol.start
        && Math.abs(symbol.line - number.line) <= 1
}

const file = require("fs").readFileSync("i").toString().split('\n')
const numbers = fetchNumbers(file), symbols = fetchSymbols(file,/[^\.\d]+/g)
let count = 0

symbols.forEach(symbol=>{
    numbers.filter(number=>checkIsInArea(symbol,number)).forEach(n=>count+=+n.number)
})
console.log(count)

count = 0
symbols.forEach(symbol=>{
    if (symbol.symbol!="*") return
    let current = []
    numbers.filter(number=>checkIsInArea(symbol,number)).forEach(n=>current.push(+n.number))
    if (current.length == 2) count += current.reduce((t,n)=>t*n)
})
console.log(count)
