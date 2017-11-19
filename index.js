import type from "@unction/type"

import type {StringType} from "typess"

export default function supertype (value: mixed): StringType {
  return type(Reflect.getPrototypeOf(value.constructor.prototype))
}
