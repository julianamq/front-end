    const resultadoFinal = (resultado) => {
        console.log(resultado);
    }
    // const funcSoma = (num1,  num2) => num1+num2;
    // let resultaSoma = funcSoma(10,8); // atribuindo funcSoma a uma variável e atribuindo dois parametros a ela 
    // resultadoFinal(resultaSoma);
    // // função para imprimir o resultado, chama a função de soma com os parametros.

    // outra maneira 
//     const funcSoma = (num1,  num2) => {
//         let soma = num1+num2;
//     resultadoFinal(soma);
// };
// funcSoma(10,8);

// callback

const funcSoma = (num1,  num2, callback) => {
    let soma = num1+num2;
    callback(soma);
}
funcSoma(10,8,resultadoFinal);