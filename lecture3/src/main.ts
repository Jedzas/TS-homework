/* eslint-disable no-lone-blocks */
const numbers: number[] = [1, 2, 5, 8, -1, -3, 10, 11, 15];
const strings: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const lastmemberIndex = (arr: any[]): void => {
    console.log(arr.length - 1);
  };
  lastmemberIndex(numbers);
  lastmemberIndex(strings);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const indexLines = (arr: any[]) => {
    for (let i = 0; i < arr.length; i += 1) {
      console.log(i);
    }
  };
  indexLines(numbers);
  indexLines(strings);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const arrLines = (arr: any[]) => {
    for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i]);
    }
  };
  arrLines(numbers);
  arrLines(strings);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const indexValue = (arr: any[]) => {
    for (let i = 0; i < arr.length; i += 1) {
      console.log(`[${i}] => ${arr[i]}`);
    }
  };
  indexValue(numbers);
  indexValue(strings);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const reverseArray = (arr: any[]) => {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      console.log(arr[i]);
    }
  };
  reverseArray(numbers);
  reverseArray(strings);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const indexOneLine = (arr: any[]) => {
    const indexSum: number[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      indexSum.push(i);
    }
    console.log(...indexSum);
  };
  indexOneLine(numbers);
  indexOneLine(strings);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const flatArray = (arr: any[]) => {
    const arraySum: any[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      arraySum.push(arr[i]);
    }
    console.log(...arraySum);
  };
  flatArray(numbers);
  flatArray(strings);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const pairing = (arr: any[]): void => {
    const valueIndexPair = arr.map((x, index) => `[${index}]=>${x}`).join(', ');
    console.log(valueIndexPair);
  };
  pairing(numbers);
  pairing(strings);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const numbersTimeTwoFunc = (arr: number[]): void => {
    const numbersTimesTwo = arr.map((x) => x * 2);
    console.log(numbersTimesTwo);
  };
  numbersTimeTwoFunc(numbers);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const arrNumbersPowered = (arr: number[]): void => {
    const powerArray = arr.map((x) => x ** 2);
    console.log(powerArray);
  };
  arrNumbersPowered(numbers);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const valueIndexMultiply = (arr: number[]):void => {
    const valueIndexMultiplyArray = arr.map((x, index) => x * index);
    console.log(valueIndexMultiplyArray);
  };
  valueIndexMultiply(numbers);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const positiveNumbers = (arr: number[]): void => {
    const positiveNumbersArray = arr.filter((x) => x > 0);
    console.log(positiveNumbersArray);
  };
  positiveNumbers(numbers);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const negativeElements = (arr: number[]): number[] => arr.filter((x) => x <= 0);
  console.log(negativeElements(numbers));
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const evenNumbers = (arr: number[]): number[] => arr.filter((x) => x % 2 === 0);
  console.log(evenNumbers(numbers));
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const oddNumber = (arr: number[]): number[] => arr.filter((x) => x % 2 !== 0);
  console.log(oddNumber(numbers));
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const negativeToPositive = (arr: number[]): number[] => arr.map((x) => (x < 0 ? x * -1 : x));
  console.log(negativeToPositive(numbers));
}
console.groupEnd();
