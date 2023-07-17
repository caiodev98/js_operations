var numberOne = prompt("Digite um número:") // prompt exige uma caixa de diálogo com uma menssagem solicitando ao usuário alguma entrada e depois armazena esse valor.
var numberTwo = prompt ("Digite outro número: ")



let sum = Number(numberOne) + Number(numberTwo)

let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

alert(sum)
alert(sub)
alert(mult)
alert(div)
alert(rest)
if((sum % 2) == 0){
  alert("Essa soma tem um resultado par: " + sum)
}else{
  alert("Essa soma tem um resultado ímpar: "+ sum)
}
if(numberOne==numberTwo){
  alert("Os número inseridos são iguais")
}

