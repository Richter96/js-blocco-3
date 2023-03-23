/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

// creo un array composto da 10 auto
const cars = [
    {
        marca: 'ford',
        modello: 'vignale',
        alimentazione: 'benzina',
    },
    {
        marca: 'tesla',
        modello: 'model 3',
        alimentazione: 'elettrica',
    },
    {
        marca: 'tesla',
        modello: 'model y',
        alimentazione: 'elettrica',
    },
    {
        marca: 'tesla',
        modello: 'model x',
        alimentazione: 'elettrica',
    },
    {
        marca: 'ford',
        modello: 'focus',
        alimentazione: 'diesel',
    },
    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'gpl',
    },
    {
        marca: 'audi',
        modello: 'A5',
        alimentazione: 'benzina',
    },
    {
        marca: 'opel',
        modello: 'zafira',
        alimentazione: 'metano',
    },
    {
        marca: 'cupra',
        modello: 'formentor',
        alimentazione: 'diesel',
    },
    {
        marca: 'opel',
        modello: 'zafira',
        alimentazione: 'metano',
    },
]


cars.forEach(car => {
    console.log(car.alimentazione)
    
});

const carBenzina = cars.filter((benzina)=> {
    return cars.alimentazione = benzina
})
console.log(carBenzina)