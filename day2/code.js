// const file = 

// only 12 red cubes, 13 green cubes, and 14 blue cubes
const ___=
([m,t]=[Math.max,0,_=>[(require("fs").readFileSync("c")+[]).split('\n').map((s,r=0,g=0,b=0)=>s.match(/blue|red|green|\d+/g).map(c=>+c&&(n=+c)||c=='blue'&&(b=m(n,b))||c=='red'&&(r=m(r,n)||(g=m(n,g))))][3]()),t]])[2]()[1]
console.log(___)


// function parseGame(game) {
// 	let num
// 	let r=0,g=0,b=0
// 	for (const str of game.match(/ *(blue|\d+|red|;|,|green) */g)) {
// 		if (+str) {
// 			num = str
// 		}
// 		if (str === 'blue') b = Math.max(b,num)
// 		if (str === 'green') g = Math.max(g,num)
// 		if (str === 'red') r = Math.max(r,num)
// 	}
// 	return r*g*b
// }


// let count = 0
// for (let game of file.match(/([^\n]+)/g)) {
// 	let gameId = game.match(/^Game *(\d+): */)
// 	game = game.substring(gameId[0].length)
// 	count += parseGame(game)
// }
// console.log(count)





