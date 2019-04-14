import type from "@unction/type";
export default function supertype (value) {
  return type(Reflect.getPrototypeOf(value.constructor.prototype));
}
