//Sem passagem de parâmetro
function sayHi(){
    console.log("Hi");
}

//Com passagem de parâmetro
function sayHello(nome){
    console.log(`Hello, ${nome}`);
}

//Com retorno
function somaDois(num1, num2){
    return num1 + num2;
}

//Atribuindo a uma variável
var ola = function(){
    console.log("Eu vim de uma variável");
}

//Não precisa da palavra 'function' na hora de atribuir uma variável.
var ola2 = () => {
    console.log("Assim fica horrível");
}


//Chamando uma função depois de sua declaração.
//Não precisaria nem do nome, afinal só será usada uma vez
//Depois disso a função deixará de existir
(function sayHi(){
    console.log("Olá");
}) ();

// sayHi(); //erro de undefined


//arrancando o nome function da função
(() => {
    console.log("Cara que coisa feia de se ver");
}) ();

//Função com varios valores.
function somaTodos(...args){
    let soma = 0;
    for(let i=0; i < args.length; i++){
        soma += args[i];
    }
    console.log(`A soma total deu ${soma}`);
}

// somaTodos(1, 2, 3, 4, 5, 6);

//FIXME Está executando o primeiro if
(function mostraValores(valor1=null, valor2=null){
    if(valor1){
        console.log(`O valor1 vale ${valor1}`)
    }else if(valor2){
        console.log(`o valor2 vale ${valor2}`);
    }
}) (valor2=4);


