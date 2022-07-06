setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
//  imprime  comprar parafusos e add ao estoque apos fixar roda 
  const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// imprime [ 1, 2, 3 ]
// exemplo abaixo 3000 é o tempo de espera para executar pushNumber(numbers, 1).
const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers, 1), 3000);
pushNumber2(numbers, 2);
pushNumber2(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
// o retorno abaixo é [ 2, 3, 1 ]
const pushNumber3 = (list, number) => list.push(number);

let numbers3 = [];

setTimeout(() => pushNumber3(numbers3, 1), 3000);
pushNumber3(numbers3, 2);
pushNumber3(numbers3, 3);

setTimeout(() => console.log(numbers3), 3000);


//setTimeout(1parametro uma callback geralmente arrow function, 2parametro quantos milesimos de segundo por exemplo. ); 
setTimeout(() => {}, 3000);


// outro exemplo , próximo passo será como é realizada  entrada e saída. 
const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const renda = 1000;
  const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };