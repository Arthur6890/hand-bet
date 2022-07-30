export function isValidPhoneWithDDD(phone: string): boolean {
  return /\(\d{2}\) \d{5}-\d{4}/.test(phone);
}

export function isValidName(name: string): boolean {
  return /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/.test(name);
}
