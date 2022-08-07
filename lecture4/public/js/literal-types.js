"use strict";
const country = 'Latvia';
const country2 = 'Estonia';
const req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json',
    },
    body: {
        image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
    },
    method: 'POST',
};
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const city1 = 'Hamburg';
        const city2 = 'Cologne';
        const city3 = 'Berlin';
        console.log(city1);
        console.log(city2);
        console.log(city3);
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        const dog1 = 'Bulldog';
        const dog2 = 'Poodle';
        console.log(dog1);
        console.log(dog2);
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const part1 = 'Clutch';
        const part2 = 'Brakes';
        console.log(part1);
        console.log(part2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map