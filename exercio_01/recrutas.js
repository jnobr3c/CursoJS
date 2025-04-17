const primeiroNome = prompt("Informe o primero nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");

alert(
    "Recruta cadastrado comm sucesso!\n" +
    "\nNome Completo: " + primeiroNome + " " + sobrenome + "\n"  +
    "\nCampo de Estudo: " + campoDeEstudo + "\n" +
    "\nIdade: " + (2023 - anoDeNascimento) + "\n" 
)