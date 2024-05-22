import { formatTime } from "../hour/formatHour";

function calcularTempoEmMinutos(created_at) {
  // Converte o timestamp do pedido para um objeto Date
  const pedidoHora = formatTime(created_at).replace(':', '');

  // Obtém o horário atual e converte para um formato sem colons
  const agoraHora = formatTime(new Date()).replace(':', '');

  // Calcula a diferença em horas
  let diffInHours = parseInt(agoraHora) - parseInt(pedidoHora);

  // Verifica se a diferença é maior que 100 minutos (ou seja, 1 hora e 40 minutos)
  if (diffInHours >= 1 && diffInHours <= 23) {

    // Retorna a diferença em horas
    return `${diffInHours} Horas`;

  } else {
    // Calculate the difference in minutes
    let diffInMinutes = Math.abs(parseInt(agoraHora) - parseInt(pedidoHora)) * 60;

    // Retorna a diferença em minutos
    return `${diffInMinutes} Minutos`;
  }
}

export { calcularTempoEmMinutos }