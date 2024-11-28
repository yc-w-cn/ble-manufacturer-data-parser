import { hexStringToUint8Array } from './hexStringToUint8Array';

describe('hexStringToUint8Array', () => {
  it('should convert a valid hex string to a Uint8Array', () => {
    const hex = "0x48656c6c6f"; // "Hello" in hex
    const result = hexStringToUint8Array(hex);
    const expected = new Uint8Array([72, 101, 108, 108, 111]);

    expect(result).toEqual(expected);
  });

  it('should remove the "0x" prefix', () => {
    const hex = "0x48656c6c6f";
    const result = hexStringToUint8Array(hex);
    const expected = new Uint8Array([72, 101, 108, 108, 111]);

    expect(result).toEqual(expected);
  });

  it('should throw an error if the hex string has an odd length', () => {
    const hex = "0x48656c6c6";
    
    expect(() => hexStringToUint8Array(hex)).toThrow('Invalid hex string, length must be a multiple of 2');
  });

  it('should convert a hex string without "0x" prefix correctly', () => {
    const hex = "48656c6c6f"; // "Hello" in hex
    const result = hexStringToUint8Array(hex);
    const expected = new Uint8Array([72, 101, 108, 108, 111]);

    expect(result).toEqual(expected);
  });
});
