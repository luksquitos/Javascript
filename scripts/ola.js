// Criando objetos.

//ex1
let user1 = {
    firstName: "Bob",
    lastName: "Smith",
    fullName: function() {
       return `${this.firstName} ${this.lastName}`;
    },
 };

//ex2

var user2 = {
    "nome": {
        "primeiroNome": "Lucas",
        "segundoNome": "Martins",
        fullname: function(){
            return `$ {this.nome.primeiroNome} $ {this.nome.segundoNome}`;
        }
    },
    "idade": 23,
    "coresFavoritas": ["azul", "rosa"],
}


console.log(user1.nome); // "Lucas"
console.log(user2.nome.primeiroNome); //"Lucas"
console.log(user2.coresFavoritas); //['azul', 'rosa']
console.log(user1.fullName());
