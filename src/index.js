module.exports = function reverse (n) {
	let str = n.toString().split("").reverse().join("");
	let num = parseInt(str)
	return num;
}
