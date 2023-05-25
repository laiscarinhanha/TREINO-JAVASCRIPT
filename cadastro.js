const nome = window.prompt("Digite seu nome:")
const sobrenome = window.prompt ("Digite seu sobrenome:")
const study = window.prompt ("Digite seu campo de estudo:")
const age = window.prompt ("Digite seu ano de nascimento:")

//com o alert conseguimor fazer com que a string seja exibida no navegador
// o \n pula uma linha
// valor const é algo que não será alterado
alert (
    "Recruta cadastrado com sucesso!\n"  +
    "\nNome completo: " + nome + " " + sobrenome + 
    "\nCampo de estudo: " +study + " " + 
    "\nIdade: " + (2023 - age)

)
