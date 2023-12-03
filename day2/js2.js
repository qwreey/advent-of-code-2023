
const file = require("fs").readFileSync("i")+[]
function parseGame(game) {
	let num
	let r=0,g=0,b=0
	for (const str of game.match(/ *(blue|\d+|red|;|,|green) */g)) {
		if (+str) {
			num = str
		}
		if (str === 'blue') b = Math.max(b,num)
		if (str === 'green') g = Math.max(g,num)
		if (str === 'red') r = Math.max(r,num)
	}
	return r*g*b
}

let count = 0
for (let game of file.match(/([^\n]+)/g)) {
	let gameId = game.match(/^Game *(\d+): */)
	game = game.substring(gameId[0].length)
	count += parseGame(game)
}
console.log(count)
