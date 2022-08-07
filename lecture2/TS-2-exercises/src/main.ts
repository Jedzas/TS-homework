/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    type Drinks = {
      name: string;
      price: number;
    };

    const sortDrinksByPrice = (drink1: Drinks, drink2: Drinks): number => drink1.price - drink2.price;
    const sortDrinksByPriceFinal = (drinks: Array<Drinks>): Array<Drinks> => [...drinks].sort(sortDrinksByPrice);
    const drinks: Drinks[] = [
      { name: 'lemonade', price: 50 },
      { name: 'lime', price: 10 },
      { name: 'beer', price: 40 },
    ];
    console.log(sortDrinksByPriceFinal(drinks));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  const addNameFunc = (object: {}, name: string, value: number) => ({ ...object, [name]: value });

  console.log(addNameFunc({ piano: 500, stereo: 300 }, 'Caligula', 440));
}
console.groupEnd();
