console.log(($=[b,c]=[(x,y)=>(x=>+x||$.indexOf(x)-1)(x.match(new RegExp(`^.*${y}(\\d|${$.slice(2).join('|')})`))[1]),_=>`0\n${require("fs").readFileSync("i")}`.split('\n').reduce((t,v)=>+t+b(v,'')+b(v,'?')*10),...'one,two,three,four,five,six,seven,eight,nine'.split(',')])[1]())