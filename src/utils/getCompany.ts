import { companyIdentifiers } from "../data";
import { formatValueToHex } from "./formatValueToHex";

export function getCompany(identifier: string | number) {
	if (typeof identifier === "number") {
		const hex = formatValueToHex(identifier);
		return getCompany(hex);
	}
	if (identifier in companyIdentifiers) {
		return companyIdentifiers[identifier];
	}
	return null;
}
