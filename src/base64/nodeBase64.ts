/**
 * @internal
 */
export const base64 = {
  btoa: (str: string): string => Buffer.from(str).toString("base64"),
};
