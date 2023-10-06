import { capitalize, reverse } from "./main";

test("Capitalization test", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Reverse function test impostor", () => {
	expect(reverse("impostor")).toBe("rotsopmi");
});

test("Reverse function test hello", () => {
	expect(reverse("hello")).toBe("olleh");
});