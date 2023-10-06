import { capitalize, reverse, Calculator } from "./main";

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
});