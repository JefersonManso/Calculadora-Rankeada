// Escuta o envio do formulário
document.getElementById("rankForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recarregar a página



// Captura os valores digitados e converte para número inteiro
const vitorias = parseInt(document.getElementById("wins").value);
const derrotas = parseInt(document.getElementById("losses").value);


// Chamada da função princial
const saldo = calcularSaldoRankeadas(vitorias, derrotas);
const nivel = determinarNivel(vitorias);


// Montagem da mensagem de saída
const mensagem = `O Herói tem de saldo: ${saldo} está no nível: ${nivel};`
document.getElementById("result").textContent = mensagem;

});


/**
 * Calcula o saldo de partidas rankeadas
 * @param {number} vitorias - número de vitórias
 * @param {number} derrotas - número de derrotas
 * @returns {number} - saldo de vitórias
 */
function calcularSaldoRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}


/**
 * Determina o nível com base na quantidade de vitórias
 * @param {number} vitorias - número de vitórias
 * @returns {string} - nome do nível correspondente
 */


// Escuta o envio do formulário
document.getElementById("rankForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recarregar a página

  // Captura os valores digitados e converte para número inteiro
  const vitorias = parseInt(document.getElementById("wins").value);
  const derrotas = parseInt(document.getElementById("losses").value);

  // Chamada da função principal
  const saldo = calcularSaldoRankeadas(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);

  // Montagem da mensagem de saída
  const mensagem = `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
  document.getElementById("result").textContent = mensagem;
});

/**
 * Função que calcula o saldo entre vitórias e derrotas
 * @param {number} vitorias - número de vitórias
 * @param {number} derrotas - número de derrotas
 * @returns saldo (vitorias - derrotas)
 */
function calcularSaldoRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

/**
 * Função que determina o nível do jogador com base nas vitórias
 * @param {number} vitorias - número de vitórias
 * @returns string com o nome do nível
 */
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}
