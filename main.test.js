import { capitalize } from "./main";

test("Capitalization test", () => {
	expect(capitalize("hello")).toBe("Hello");
});