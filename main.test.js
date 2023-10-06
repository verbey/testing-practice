import { capitalize, reverse, Calculator, ceasarEncoder } from "./main";

test("Capitalization test", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Reverse function test impostor", () => {
	expect(reverse("impostor")).toBe("rotsopmi");
});

test("Reverse function test hello", () => {
	expect(reverse("hello")).toBe("olleh");
});

test("Calculator object", () => {
	expect(new Calculator(1, 2).add()).toBe(3);
	expect(new Calculator(1, 2).subtract()).toBe(-1);
	expect(new Calculator(1, 2).multiply()).toBe(2);
	expect(new Calculator(1, 2).divide()).toBe(0.5);
	expect(new Calculator(1, 2)).toEqual({ operandOne: 1, operandTwo: 2 });
});

test("Ceasar cipher", () => {
	expect(ceasarEncoder("hello", 5)).toBe("mjqqt");
	expect(ceasarEncoder("zzz", 1)).toBe("aaa");
	expect(ceasarEncoder("Aa", 1)).toBe("Bb");
	expect(ceasarEncoder("a,a", 1)).toBe("b,b");
	expect(ceasarEncoder("ZZZ", 1)).toBe("AAA");
});

test("Array analyzer", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	}));
});