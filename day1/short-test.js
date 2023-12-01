

// (\d|one|two|three|four|five|six|seven|eight|nine)


// f=v.match(/d/),b=v.match()
// await new Promise((r,f,c,r)=>{
//     f=
//     c=
//     r=

//     f=
//     b=
//     f(v.match(/^.*(\d|one|two|three|four|five|six|seven|eight|nine)/))*10+f(v.match(/(\d|one|two|three|four|five|six|seven|eight|nine).*$/))
// })


// console.log(([a,b,c]=[1,2,_=>a+b])[2]())

console.log(([a,b]=['one,two,three,four,five,six,seven,eight,nine'.split(','),(x,y)=>(x=>+x||a.indexOf(x)+1)(x.match(new RegExp(`^.*${y}(\\d|${a.join('|')})`))[1]),_=>`0\n${require("fs").readFileSync("i")}`.split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),])[2]())

// console.log(($=[b,c]=[(x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),_=>`0\n${require("fs").readFileSync("i")}`.split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),...'one,two,three,four,five,six,seven,eight,nine'.split(',')])[1]())

// console.log(([a,b,c]=[
//     'one,two,three,four,five,six,seven,eight,nine'.split(','),
//     (x,y)=>(x=>+x||a.indexOf(x)+1)(x.match(new RegExp(`^.*${y}(\\d|${a.join('|')})`))[1]),
//     _=>`0\n${require("fs").readFileSync("i")}`.split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
// ])[2]())

// console.log(($=[b,c]=[
//     (x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),
//     _=>`0\n${require("fs").readFileSync("i")}`.split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[1]())

// console.log(($=[b,c]=[
//     (x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),
//     _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[1]())

// require("fs").readFile('i',(_,p)=>console.log(($=[b,c]=[
//     (x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),
//     _=>('0\n'+p).split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[1]()))


// console.log(($=[b,c]=[
//     (x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),
//     _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[1]())

// console.log(($=[b,c]=[
// (x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp('^.*'+y+`(\\d|${$.slice(2).join('|')})`))[1]),
// _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
// ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[1]())

// console.log(($=[a,b,c]=[
// _=>`(\\d|${$.slice(3).join('|')})`,
// (x,y)=>(x=>+x||$.indexOf(x)-2)(x.match(new RegExp('^.*'+y+a()))[1]),
// _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),
// ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[2]())

// console.log(($=[a,b,c]=[
//     _=>`(\\d|${$.slice(3).join('|')})`,
//     (x,y)=>(x=>+x||$.indexOf(x)-2)(x.match(new RegExp(y+a()))[1]),
//     _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'^.*')+b(v,'^.*?')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[2]())

// console.log(($=[a,b,c]=[
//     _=>`(\\d|${$.slice(3).join('|')})`,
//     (x,y)=>(x=>+x||$.indexOf(x)-2)(x.match(new RegExp(y))[1]),
//     _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'^.*'+a())+b(v,a()+'.*$')*10),
//     ...'one,two,three,four,five,six,seven,eight,nine'.split(',')
// ])[2]())
console.log(54249)


// console.log(($=[...'one,two,three,four,five,six,seven,eight'.split(','),...[a,b,c]=[
//     _=>`(\\d|${$.slice(0,8).join('|')})`,
//     (x,y)=>(x=>$.indexOf(x)+1||+x)(x.match(new RegExp(y))[1]),
//     _=>('0\n'+require("fs").readFileSync("i")).split('\n').reduce((t,v)=>+t+b(v,'^.*'+a())*10+b(v,a()+'.*$'))
// ]])[10]())

// ($=[...'one,two,three,four,five,six,seven,eight'.split(','),...[a,b,c]=[
//     _=>`(\d|${$.slice(0,8).join('|')})`,
//     (x,y)=>(x=>$.indexOf(x)+1||+x)(x.match(new RegExp(y))[1]),
//     _=>(require("fs").readFileSync("i")+[]).split('\n').map(v=>b(v,'^.*'+a())*10+b(v,a()+'.*$')).reduce((t,v)=>t+v)
// ]])[10]()



// $=[...'one,two,three,four,five,six,seven,eight'.split(','),...[a,b,c,d]=[
//     x=>$.indexOf(x)+1||+x,
//     ()=>`(\d|${$.slice(0,8).join('|')})`,
//     (x,y)=>x.match(new RegExp(y)),
//     (require("fs").readFileSync("i")+[]).split('\n').map(v=>c(b()+'.*$')).reduce((t,v)=>t+v)
// ]]

   
// $=[...'one,two,three,four,five,six,seven,eight'.split(','),...[a,b,c,d]=[
//     x=>($.indexOf(x)+1||+x),
//     ()=>`(\d|${$.slice(0,8).join('|')})`,
//     (x,y)=>x.match(new RegExp(y)),
//     (require("fs").readFileSync("i")+[]).split('\n').map(v=>c(b()+'.*$')).reduce((t,v)=>t+v)
// ]]

// ($=[q,w,e,r,t,y,u,i,o,   a,b,c,d,f]=[
//     'one','two','three','four','five','six','seven','eight',
//     x=>($.indexOf(x)+1||+x),
//     ()=>`(\d${([]+$.slice(0,8)).replace(/,/g,'|')})`,

//     // x=>x==q?1:x==w?2:x==e?3:x==r?4:x==t?5:x==y?6:x==u?7:x==i?8:x==o?9:+x,
//     // ()=>`(\d${([]+$.slice(0,8)).replace(/,/g,'|')})`

//     // b()


//     x=>x=='one'?1:x=='two'?2:x=='three'?3:x=='four'?4:x=='five'?5:x=='six'?6:x=='seven'?7:x=='eight'?8:x=='nine'?9:parseInt(x),
//     '(\d|one|two|three|four|five|six|seven|eight|nine)',
//     x=>new RegExp(x),
//     c
//     ,2,3,a])[3]


