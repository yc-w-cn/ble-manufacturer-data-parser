export function hexStringToUint8Array(rawHex: string): Uint8Array {
	let hex = rawHex;

	// 移除可能存在的前缀 "0x"
	if (hex.startsWith("0x")) {
		hex = hex.slice(2);
	}

	// 检查长度是否为偶数，否则抛出错误
	if (hex.length % 2 !== 0) {
		throw new Error("Invalid hex string, length must be a multiple of 2");
	}

	// 转换为 Uint8Array
	const array = new Uint8Array(hex.length / 2);
	for (let i = 0; i < hex.length; i += 2) {
		array[i / 2] = Number.parseInt(hex.substr(i, 2), 16);
	}
	return array;
}
