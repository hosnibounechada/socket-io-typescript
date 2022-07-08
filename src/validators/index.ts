import { Validator } from "jsonschema";
import { Schema } from "jsonschema";

const v = new Validator();

export function isValidObj(schema: any, msg: any): boolean {
  const result = v.validate(msg, schema as Schema);
  if (result.errors.length == 0) return true;
  return false;
}

export * from "./usersSchema";
export * from "./messagesSchema";
