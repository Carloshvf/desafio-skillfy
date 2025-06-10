import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";
import "whatwg-fetch";

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;
