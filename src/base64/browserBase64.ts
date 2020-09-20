/**
 * @internal
 */
export const base64 = {
  btoa: (str: string): string => btoa(unescape(encodeURIComponent(str))), // supports utf8 chars
};
