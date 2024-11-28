export enum ErrorEnum {
  NEGATIVE_VALUE_NOT_ALLOWED = "NEGATIVE_VALUE_NOT_ALLOWED",
	INVALID_DATA_LENGTH = "INVALID_DATA_LENGTH",
	UNKNOWN_COMPANY_IDENTIFIER = "UNKNOWN_COMPANY_IDENTIFIER",
	UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export const ErrorMessages = {
	zh: {
    [ErrorEnum.NEGATIVE_VALUE_NOT_ALLOWED]: "不允许负数值",
		[ErrorEnum.INVALID_DATA_LENGTH]: "数据长度不足，无法解析 CompanyIdentifier",
		[ErrorEnum.UNKNOWN_COMPANY_IDENTIFIER]: "无法识别的 CompanyIdentifier",
		[ErrorEnum.UNKNOWN_ERROR]: "未知错误",
	},
	en: {
    [ErrorEnum.NEGATIVE_VALUE_NOT_ALLOWED]: "Negative values are not allowed",
		[ErrorEnum.INVALID_DATA_LENGTH]:
			"Insufficient data length, unable to parse CompanyIdentifier",
		[ErrorEnum.UNKNOWN_COMPANY_IDENTIFIER]: "Unknown CompanyIdentifier",
		[ErrorEnum.UNKNOWN_ERROR]: "Unknown error",
	},
};

export function getErrorMessage(
	errorEnum: ErrorEnum,
	currentLanguage: keyof typeof ErrorMessages = "zh",
): string {
	return (
		ErrorMessages[currentLanguage]?.[errorEnum] ||
		ErrorMessages[currentLanguage]?.[ErrorEnum.UNKNOWN_ERROR] ||
		ErrorMessages.zh[ErrorEnum.UNKNOWN_ERROR]
	);
}
