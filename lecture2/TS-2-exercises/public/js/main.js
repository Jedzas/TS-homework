"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const sortDrinksByPrice = (drink1, drink2) => drink1.price - drink2.price;
    const sortDrinksByPriceFinal = (drinks) => [...drinks].sort(sortDrinksByPrice);
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'lime', price: 10 },
        { name: 'beer', price: 40 },
    ];
    console.log(sortDrinksByPriceFinal(drinks));
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const addNameFunc = (object, name, value) => ({ ...object, [name]: value });
    console.log(addNameFunc({ piano: 500, stereo: 300 }, 'Caligula', 440));
}
console.groupEnd();
//# sourceMappingURL=main.js.map