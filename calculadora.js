const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")
//primeiro declaro a constante que será os números, é constante pq nao será modificado

const x = parseFloat (entrada1)
const y = parseFloat (entrada2)
//sem o parserfloat o visual vai concatenar a constante e não somar, o parserfloar converte uma string em um número

const soma = x+y
const subtracao = x-y
const multiplicacao = x*y
const divisão = x/y
//essas constantes irão pegar as anteriores para fazer as contas

alert (
    "Resultado da soma:" + soma +
    "\nResultado da subtração:" + subtracao +
    "\nResultado da multiplição:" + multiplicacao +
    "\n Resultado da divisão:" + divisão

)
//o alert irá exibir os resultados na tela