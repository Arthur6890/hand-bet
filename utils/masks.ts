export function maskPhoneWithDDD(phone: string): string {
  return phone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})/, "$1-$2");
}

export function onlyNumbers(value: string): string {
  return value.replace(/\D/g, "");
}

export function maskBRL(value: string): string {
  let valor = value;
  let valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}
