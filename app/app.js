console.log("snack 3")

// snack 3:
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

//ARRAY VUOTO DA PUSHARE
let mammals = []
let notMammals = []
//ARRAY CON OGGETTI AL SUO INTERNO
let animals = [{
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi',
},
{
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi',
},
{
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli',
}
]
// console.log(animals[1].nome) => RICAVARE LE CHIAVI DEGLI OGGETTI DENTRO GLI ARRAY

for (i = 0; i < animals.length; i++) {
    // console.log(animals[i].classe)
    if (animals[i].classe == 'mammiferi') {
        mammals.push(animals[i])
    }
    else {
        notMammals.push(animals[i])
    }
}
console.log(mammals)
console.log(notMammals)
