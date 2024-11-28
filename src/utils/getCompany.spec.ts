import { getCompany } from "./getCompany";
import { formatValueToHex } from "./formatValueToHex";

jest.mock("./formatValueToHex", () => ({
	formatValueToHex: jest.fn(),
}));

jest.mock("../data", () => ({
	companyIdentifiers: {
		"0x1234": "Test Company A",
		"0x5678": "Test Company B",
	},
}));

describe("getCompany", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should return a company name when the identifier is a string and exists in companyIdentifiers", () => {
		const result = getCompany("0x1234");
		expect(result).toBe("Test Company A");
	});

	it("should return null when the identifier is a string and does not exist in companyIdentifiers", () => {
		const result = getCompany("0x9999");
		expect(result).toBeNull();
	});

	it("should convert a number identifier to hex and return a company name if it exists", () => {
		(formatValueToHex as jest.Mock).mockReturnValue("0x5678");

		const result = getCompany(22136); // Assuming 22136 converts to "0x5678"
		expect(formatValueToHex).toHaveBeenCalledWith(22136);
		expect(result).toBe("Test Company B");
	});

	it("should return null when the identifier is a number and its hex representation does not exist in companyIdentifiers", () => {
		(formatValueToHex as jest.Mock).mockReturnValue("0x9999");

		const result = getCompany(39321); // Assuming 39321 converts to "0x9999"
		expect(formatValueToHex).toHaveBeenCalledWith(39321);
		expect(result).toBeNull();
	});

	it("should handle edge cases gracefully", () => {
		(formatValueToHex as jest.Mock).mockReturnValue("");

		expect(getCompany("")).toBeNull();
		expect(getCompany(null as unknown as string)).toBeNull();
		expect(getCompany(undefined as unknown as string)).toBeNull();
		expect(getCompany(-1)).toBeNull();
	});
});
