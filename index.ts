import type from "@unction/type";

export default function supertype (value: {constructor: {prototype: Object}}): string {
  return type(Reflect.getPrototypeOf(value.constructor.prototype));
}
