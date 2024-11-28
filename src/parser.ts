import { getCompany, getCompanyIdentifier } from "./utils";
import { toUint8Array } from "js-base64";
import { hexStringToUint8Array } from "./utils/hexStringToUint8Array";

export type ParseResult = {
	identifier: number;
	company: string | null;
};

export function parseBase64(base64: string) {
	const array: Uint8Array = toUint8Array(base64);
	return parse(array);
}

export function parseHex(hex: string) {
	const array: Uint8Array = hexStringToUint8Array(hex);
	return parse(array);
}

export function parse(data: Uint8Array): ParseResult {
	const identifier = getCompanyIdentifier(data);
	const company = getCompany(identifier);
	return {
		identifier,
		company,
	};
}
