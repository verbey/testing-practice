export function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function reverse(str) {
	return str.split("").reverse().join("");
}