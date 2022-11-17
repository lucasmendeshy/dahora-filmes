const formataData = (data) => {
  // Exemplo de data recebida: 2012-11-26
  const dataQuebrada = data.split("-");
  const dia = dataQuebrada[2]; // equivalente ao dia 26
  const mes = dataQuebrada[1]; // equivalente ao mês 11
  const ano = dataQuebrada[0]; // equivalente ao ano 2012
  return `${dia}/${mes}/${ano}`;
};

export { formataData };
