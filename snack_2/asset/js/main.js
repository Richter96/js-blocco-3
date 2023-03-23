/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */



const nameTeam = [
    'michele',
    'GIOVANNI',
    'claudio'
]

console.log(nameTeam)

const newArray = nameTeam.map(name => {
    const lowerCaseWord = name.toLowerCase()
    console.log(lowerCaseWord)
    const firstChar = lowerCaseWord.charAt(0).toUpperCase
    console.log(firstChar)

    const sliceWord = 

};
