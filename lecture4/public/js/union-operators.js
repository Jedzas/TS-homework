"use strict";
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const flat1 = {
            type: 'Flat',
        };
        const house1 = {
            type: 'House',
        };
        console.log(flat1);
        console.log(house1);
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const carWithAutomatic = {
            transmission: 'Automatic',
            brand: 'audi',
        };
        const carWithManual = {
            transmission: 'Manual',
            brand: 'tesla',
        };
        console.log(carWithAutomatic);
        console.log(carWithManual);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const car1 = [{
                brand: 'Lada',
                transmission: 'Manual',
            }, {
                brand: 'buzz',
                transmission: 'Automatic',
            }];
        const home = [{
                type: 'House',
            }, {
                type: 'Flat',
            }];
        console.log(car1);
        console.log(home);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map