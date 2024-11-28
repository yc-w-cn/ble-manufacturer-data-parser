import { getErrorMessage } from "../errors";
import { formatValueToHex } from "./formatValueToHex";
import { getCompanyIdentifier, getCompanyIdentifierHex } from "./getCompanyIdentifier";

// Mock the dependencies
jest.mock("../errors", () => ({
  ErrorEnum: {
    INVALID_DATA_LENGTH: "INVALID_DATA_LENGTH",
  },
  getErrorMessage: jest.fn(),
}));

jest.mock("./formatValueToHex", () => ({
  formatValueToHex: jest.fn(),
}));

describe("getCompanyIdentifier", () => {
  it("should throw an error if the data length is less than 2", () => {
    const invalidData = new Uint8Array([0x01]);

    // Mock getErrorMessage to return a specific error message
    (getErrorMessage as jest.Mock).mockReturnValue("Data length is too short");

    expect(() => getCompanyIdentifier(invalidData)).toThrow("Data length is too short");
  });

  it("should correctly extract the company identifier", () => {
    const validData = new Uint8Array([0x34, 0x12]); // Company identifier should be 0x1234

    const result = getCompanyIdentifier(validData);

    expect(result).toBe(0x1234);  // The company identifier should be 0x1234
  });
});

describe("getCompanyIdentifierHex", () => {
  it("should throw an error if the data length is less than 2", () => {
    const invalidData = new Uint8Array([0x01]);

    // Mock getErrorMessage to return a specific error message
    (getErrorMessage as jest.Mock).mockReturnValue("Data length is too short");

    expect(() => getCompanyIdentifierHex(invalidData)).toThrow("Data length is too short");
  });

  it("should correctly return the company identifier in hex format", () => {
    const validData = new Uint8Array([0x34, 0x12]); // Company identifier should be 0x1234

    // Mock formatValueToHex to return the expected hex value
    (formatValueToHex as jest.Mock).mockReturnValue("0x1234");

    const result = getCompanyIdentifierHex(validData);

    expect(result).toBe("0x1234");  // The company identifier should be in hex format
    expect(formatValueToHex).toHaveBeenCalledWith(0x1234);  // Check if formatValueToHex was called correctly
  });
});
