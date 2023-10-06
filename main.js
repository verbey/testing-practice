export function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function reverse(str) {
	return str.split("").reverse().join("");
}

export class Calculator {
	constructor(operandOne, operandTwo) {
		this.operandOne = operandOne;
		this.operandTwo = operandTwo;
	}

	add() {
		return this.operandOne + this.operandTwo;
	}

	subtract() {
		return this.operandOne - this.operandTwo;
	}

	multiply() {
		return this.operandOne * this.operandTwo;
	}

	divide() {
		return this.operandOne / this.operandTwo;
	}
}

export function ceasarEncoder(str, key) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let encodedText = "";

	str.split("").forEach((char) => {
		if (/[a-z]/gi.test(char)) {
			const charIndex = alphabet.indexOf(char);
			const shiftedIndex = (charIndex + key);
			encodedText += alphabet[shiftedIndex];
		}
		else encodedText += char;
	});

	return encodedText;
}