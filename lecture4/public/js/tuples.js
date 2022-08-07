"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person4 = ['Joe', 22];
        console.log(person4);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const dogPerson = [{
                name: 'Snoop',
                breed: 'poop',
                age: 3,
            }, {
                name: 'Joe',
                age: 33,
            }];
        console.log(dogPerson);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle = [[1, 1], [4, 2], [4, 3]];
        console.log(triangle);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map