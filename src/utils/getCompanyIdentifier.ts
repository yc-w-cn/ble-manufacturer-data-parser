import { ErrorEnum, getErrorMessage } from "../errors";
import { formatValueToHex } from "./formatValueToHex";

/**
 * 根据传入的字节数组提取 CompanyIdentifier。
 * 如果数据长度小于 2，则抛出错误。
 *
 * Extracts the CompanyIdentifier from the given byte array.
 * Throws an error if the data length is less than 2.
 *
 * @param data 数据数组 / Byte array of data
 * @returns 公司标识符 / Company Identifier (hex string)
 * @throws 数据长度不足 / Insufficient data length
 */
export function getCompanyIdentifierHex(data: Uint8Array): string {
	// 检查数据长度是否小于 2
	// Check if the data length is less than 2
	if (data.length < 2) {
		throw new Error(getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH));
	}

	// 提取前两个字节，组合成一个 16 位无符号整数
	// Extract the first two bytes and combine them into a 16-bit unsigned integer
	const companyIdentifier = (data[1] << 8) | data[0];

	// 将整数转换为 16 进制字符串格式
	// Convert the integer to a hexadecimal string format
	const companyIdentifierHex = formatValueToHex(companyIdentifier);

	// 返回公司标识符的 16 进制字符串
	// Return the hexadecimal string representation of the Company Identifier
	return companyIdentifierHex;
}

export function getCompanyIdentifier(data: Uint8Array): number {
	// 检查数据长度是否小于 2
	// Check if the data length is less than 2
	if (data.length < 2) {
		throw new Error(getErrorMessage(ErrorEnum.INVALID_DATA_LENGTH));
	}

	// 提取前两个字节，组合成一个 16 位无符号整数
	// Extract the first two bytes and combine them into a 16-bit unsigned integer
	const companyIdentifier = (data[1] << 8) | data[0];

	return companyIdentifier
}
