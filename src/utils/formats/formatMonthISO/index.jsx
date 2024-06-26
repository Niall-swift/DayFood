function formatarDataParaMes(dataISO) {
  const data = new Date(dataISO);
  const Month = data.getMonth(); // Retorna um número de 0 a 6 (0: domingo, 1: segunda)

  const Months = ["Janeiro", "Fevereiro", "Março", "Quarta", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return Months[Month];
}
export { formatarDataParaMes }