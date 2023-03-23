/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */



const nameTeam = [
    'michele',
    'GIOVANNI',
    'claudio'
]

console.log(nameTeam)

const tuttoMinuscolo = nameTeam.map(team => {
    return team.toLowerCase()
});
console.log(tuttoMinuscolo)

const inizialeMaiuscola = tuttoMinuscolo.map(element=>{
    return element.charAt(0)
})


