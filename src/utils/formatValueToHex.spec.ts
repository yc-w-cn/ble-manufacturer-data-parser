import { ErrorEnum, getErrorMessage } from "../errors";
import { formatValueToHex } from "./formatValueToHex"; // 根据实际路径修改

describe("formatValueToHex", () => {
	it("should format numbers less than 16 with leading zeros", () => {
		expect(formatValueToHex(5)).toBe("0x0005");
		expect(formatValueToHex(10)).toBe("0x000A");
	});

	it("should format numbers greater than or equal to 16 correctly", () => {
		expect(formatValueToHex(16)).toBe("0x0010");
		expect(formatValueToHex(255)).toBe("0x00FF");
		expect(formatValueToHex(4095)).toBe("0x0FFF");
	});

	it("should not change already 4-digit hexadecimal numbers", () => {
		expect(formatValueToHex(0x1234)).toBe("0x1234");
		expect(formatValueToHex(0xabcd)).toBe("0xABCD");
	});

	it("should throw an error for negative numbers", () => {
		expect(() => formatValueToHex(-5)).toThrow(
			getErrorMessage(ErrorEnum.NEGATIVE_VALUE_NOT_ALLOWED),
		);
		expect(() => formatValueToHex(-255)).toThrow(
			getErrorMessage(ErrorEnum.NEGATIVE_VALUE_NOT_ALLOWED),
		);
	});
});
