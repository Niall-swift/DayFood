
function formatTime(timestamp) {
  // Cria um objeto Date com o timestamp fornecido
  const date = new Date(timestamp);

  // Formata a data para retornar apenas a hora
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Retorna a string formatada
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export { formatTime }