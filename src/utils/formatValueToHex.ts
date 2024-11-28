import { ErrorEnum, getErrorMessage } from "../errors";

/**
 * 格式化数值为 0xXXXX 格式的字符串
 * 将数字转换为十六进制字符串，并确保结果为 4 位，前面填充零。
 *
 * Formats the value into a string in the 0xXXXX format.
 * Converts the number to a hexadecimal string and ensures the result is 4 digits, padding with zeros if necessary.
 *
 * @param value - 数字（十进制或十六进制） / A number (either decimal or hexadecimal)
 * @returns 格式化后的字符串 / The formatted string
 */
export function formatValueToHex(value: number): string {
	if (value < 0) {
		throw new Error(getErrorMessage(ErrorEnum.NEGATIVE_VALUE_NOT_ALLOWED));
	}
	return `0x${value.toString(16).toUpperCase().padStart(4, "0")}`;
}
