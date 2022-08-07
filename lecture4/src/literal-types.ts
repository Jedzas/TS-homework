/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

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

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type TopGermanyCities = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type Labrador = 'Labrador';
  type Bulldog = 'Bulldog';
  type Shepherd = 'Shepherd';
  type Poodle = 'Poodle';
  type Beagle = 'Beagle';
  type DogBreeds = Labrador | Bulldog | Shepherd | Poodle | Beagle;

  type Battery = 'Battery';
  type Axles = 'Axles';
  type Brakes = 'Brakes';
  type Pistons = 'Pistons';
  type Clutch = 'Clutch';
  type CarParts = Battery | Axles | Brakes | Pistons | Clutch;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const city1: TopGermanyCities = 'Hamburg';
    const city2: TopGermanyCities = 'Cologne';
    const city3: TopGermanyCities = 'Berlin';
    console.log(city1);
    console.log(city2);
    console.log(city3);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const dog1: DogBreeds = 'Bulldog';
    const dog2: DogBreeds = 'Poodle';
    console.log(dog1);
    console.log(dog2);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const part1: CarParts = 'Clutch';
    const part2: CarParts = 'Brakes';
    console.log(part1);
    console.log(part2);
  }
  console.groupEnd();
}
console.groupEnd();
