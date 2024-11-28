# BLE ManufacturerData Parser

A utility for parsing Bluetooth manufacturer data to extract company information.

## Installation

```bash
pnpm add ble-manufacturer-data-parser
```

## Usage

```ts
import { parseBase64 } from "ble-manufacturer-data-parser";

const output = parseBase64("pwWEayHudSUzo+k=");

console.log("Output:", output);

// Output: { identifier: 1447, company: 'Sonos Inc' }
```