
// for(let i = 0;i < 11;i++){
//     const varLocal = "Estou localmente";
//     let varLocal2 = "Também estou localmente";
//     var varGlobal = "Sou global";
//     console.log(i);
// }

// console.log(varGlobal); //Funciona
// // console.log(varLocal); //Não funciona
// // console.log(varLocal2);//Não funciona


//-----------------

let msg = "Olá";
const outra_msg = "Mensagem";

if (msg){
    console.log(msg); //Funciona
    console.log(outra_msg); //Funciona
    msg = "Outra coisa";
}

console.log(msg);