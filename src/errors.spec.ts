import { ErrorEnum, getErrorMessage, type ErrorMessages } from "./errors";

let currentLanguage: "zh" | "en" = "zh";

describe("getErrorMessage", () => {
	it("should return the correct error message for zh language", () => {
		currentLanguage = "zh";
		expect(
			getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH, currentLanguage),
		).toBe("数据长度不足，无法解析 CompanyIdentifier");
		expect(
			getErrorMessage(ErrorEnum.UNKNOWN_COMPANY_IDENTIFIER, currentLanguage),
		).toBe("无法识别的 CompanyIdentifier");
	});

	it("should return the correct error message for en language", () => {
		currentLanguage = "en";
		expect(
			getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH, currentLanguage),
		).toBe("Insufficient data length, unable to parse CompanyIdentifier");
		expect(
			getErrorMessage(ErrorEnum.UNKNOWN_COMPANY_IDENTIFIER, currentLanguage),
		).toBe("Unknown CompanyIdentifier");
	});

	it('should return "未知错误" when error is not found in the messages', () => {
		currentLanguage = "zh";
		expect(getErrorMessage("UNKNOWN_ERROR" as ErrorEnum, currentLanguage)).toBe(
			"未知错误",
		);
	});

	it('should return "Unknown error" when error is not found in the messages (for en)', () => {
		currentLanguage = "en";
		expect(getErrorMessage("UNKNOWN_ERROR" as ErrorEnum, currentLanguage)).toBe(
			"Unknown error",
		);
	});

	it("should return default language error message when language is not provided", () => {
		expect(getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH)).toBe(
			"数据长度不足，无法解析 CompanyIdentifier",
		);
	});

	it("should return default error message when unknown language is provided", () => {
		const unknownLanguage = "fr" as keyof typeof ErrorMessages;
		expect(
			getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH, unknownLanguage),
		).toBe("未知错误");
	});

	it("should return default error message for invalid errorEnum", () => {
		expect(getErrorMessage("INVALID_ENUM" as ErrorEnum, "zh")).toBe("未知错误");
		expect(getErrorMessage("INVALID_ENUM" as ErrorEnum, "en")).toBe(
			"Unknown error",
		);
	});

	it("should handle missing translations gracefully", () => {
		// 动态添加语言，但不提供错误信息
		const missingTranslationLanguage = "es" as keyof typeof ErrorMessages;
		expect(
			getErrorMessage(
				ErrorEnum.INVALID_DATA_LENGTH,
				missingTranslationLanguage,
			),
		).toBe("未知错误");
	});
});
