function formatarDataParaDiaSemana(dataISO) {
  const data = new Date(dataISO);
  const diaSemana = data.getDay(); // Retorna um número de 0 a 6 (0: domingo, 1: segunda)

  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  return diasSemana[diaSemana];
}

export { formatarDataParaDiaSemana }