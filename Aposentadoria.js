const prompt = require("prompt-sync")();

const testAge = () => {
  // Testa se os tipo de dados, estão entrando corretamente
  let idade = parseInt(prompt("Digite sua idade: "));
  if (Number(idade)) {
    idade = idade;
    return idade;
  } else {
    console.log("Tipo de dado errado, para idade entre com um tipo number");
    // Chamo novamente a função para não precisar usar uma estrutura de (repetição while True)
    testAge();
  }
};

const testTime = () => {
  // Testa se os tipo de dados, estão entrando corretamente
  let tempo = parseInt(prompt("Digite seu tempo de serviço: "));
  if (Number(tempo)) {
    tempo = tempo;
    return tempo;
  } else {
    console.log("Tipo de dado errado para tempo, entre com um tipo Number");
    // Chamo novamente a função para não precisar usar uma estrutura de (repetição while True)
    testTime();
  }
};

const testWage = () => {
  // Testa se os tipo de dados, estão entrando corretamente
  let salario = parseFloat(prompt("Digite seu salário: "));
  if (Number(salario)) {
    salario = salario;
    return salario;
  } else {
    console.log("Tipo de dado errado para salario, entre com um tipo number");
    // Chamo novamente a função para não precisar usar uma estrutura de (repetição while True)
    testWage();
  }
};
let idade = testAge();
let tempo = testTime();
const tetoSalario = 7087.22;
const pisoSalario = 1212.00;
// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
const calcAposent = () => {
  console.log("Favor informar seu ultimo salario");
  let salario = testWage();
  if (tempo > 20) {
    let salario80 = salario * 0.8;
    // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)

    if (salario80 > tetoSalario) {
      salario80 = tetoSalario;
      console.log(`O senhor tem direito a uma aposentadoria de  ${salario80.toFixed(2)}`);
    } else if (salario80 < pisoSalario) {
      salario80 = pisoSalario;
      console.log(`O senhor tem direito a uma aposentadoria de  ${salario80.toFixed(2)}`);
    } else {
      console.log(`O senhor tem direito a uma aposentadoria de  ${salario80.toFixed(2)}`);
    }
  } else if (tempo <= 20) {
    // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
    let salario60 = salario * 0.6;
    if (salario60 > tetoSalario) {
      salario60 = tetoSalario;
      console.log(`O senhor tem direito a uma aposentadoria de ${salario60.toFixed(2)}`);
    } else if (salario60 < pisoSalario) {
        salario60 = pisoSalario 
      console.log(`O senhor tem direito a uma aposentadoria de ${salario60.toFixed(2)}`);
    } else {
      console.log(`O senhor tem direito a uma aposentadoria de ${salario60.toFixed(2)}`);
    }
  }
};
// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65){
  console.log("Parabéns você estar apto a se aposentar! ");
  calcAposent();

} else if(tempo >= 30){
    console.log("Parabéns você estar apto a se aposentar! ");
    calcAposent()

}else if(idade >= 60 && tempo >= 25){
    console.log("Parabéns você estar apto a se aposentar! ");
    calcAposent()

}else{
    console.log('Infelizmente o senhor não estar apto a se aposentar! ')
}
