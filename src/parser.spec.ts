import { parseBase64, parseHex, parse } from "./parser";
import { getCompany, getCompanyIdentifier } from "./utils";
import { toUint8Array } from "js-base64";
import { hexStringToUint8Array } from "./utils/hexStringToUint8Array";

jest.mock("./utils", () => ({
	getCompany: jest.fn(),
	getCompanyIdentifier: jest.fn(),
}));

jest.mock("js-base64", () => ({
	toUint8Array: jest.fn(),
}));

jest.mock("./utils/hexStringToUint8Array", () => ({
	hexStringToUint8Array: jest.fn(),
}));

describe("Parser functions", () => {
	describe("parseBase64", () => {
		it("should correctly parse a base64 string", () => {
			const mockBase64 = "SGVsbG8=";
			const mockArray = new Uint8Array([72, 101, 108, 108, 111]);
			(toUint8Array as jest.Mock).mockReturnValue(mockArray);

			const mockParseResult = { identifier: 123, company: "Test Company" };
			(getCompanyIdentifier as jest.Mock).mockReturnValue(mockParseResult.identifier);
			(getCompany as jest.Mock).mockReturnValue(mockParseResult.company);

			const result = parseBase64(mockBase64);

			expect(toUint8Array).toHaveBeenCalledWith(mockBase64);
			expect(getCompanyIdentifier).toHaveBeenCalledWith(mockArray);
			expect(getCompany).toHaveBeenCalledWith(mockParseResult.identifier);
			expect(result).toEqual(mockParseResult);
		});
	});

	describe("parseHex", () => {
		it("should correctly parse a hex string", () => {
			const mockHex = "48656c6c6f";
			const mockArray = new Uint8Array([72, 101, 108, 108, 111]);
			(hexStringToUint8Array as jest.Mock).mockReturnValue(mockArray);

			const mockParseResult = { identifier: 123, company: "Test Company" };
			(getCompanyIdentifier as jest.Mock).mockReturnValue(mockParseResult.identifier);
			(getCompany as jest.Mock).mockReturnValue(mockParseResult.company);

			const result = parseHex(mockHex);

			expect(hexStringToUint8Array).toHaveBeenCalledWith(mockHex);
			expect(getCompanyIdentifier).toHaveBeenCalledWith(mockArray);
			expect(getCompany).toHaveBeenCalledWith(mockParseResult.identifier);
			expect(result).toEqual(mockParseResult);
		});
	});

	describe("parse", () => {
		it("should correctly parse a Uint8Array", () => {
			const mockData = new Uint8Array([1, 2, 3, 4]);
			const mockIdentifier = 123;
			const mockCompany = "Test Company";

			(getCompanyIdentifier as jest.Mock).mockReturnValue(mockIdentifier);
			(getCompany as jest.Mock).mockReturnValue(mockCompany);

			const result = parse(mockData);

			expect(getCompanyIdentifier).toHaveBeenCalledWith(mockData);
			expect(getCompany).toHaveBeenCalledWith(mockIdentifier);
			expect(result).toEqual({ identifier: mockIdentifier, company: mockCompany });
		});
	});
});
