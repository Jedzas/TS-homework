/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];
const booleans: boolean[] = [true, true, true, true, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas
  const firstElement = <Type>(arr: Type[]): Type => arr[0];
  console.log(firstElement(numbers));
  console.log(firstElement(strings));
  console.log(firstElement(booleans));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas
  const lastElement = <Type>(arr: Type[]): Type => arr[arr.length - 1];
  console.log(lastElement(numbers));
  console.log(lastElement(strings));
  console.log(lastElement(booleans));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  // Sprendimas ir rezultatų spausdinimas
  const arrCopy = <Type extends PrimitiveType>(arr: Type[]) => {
    const copy = [...arr];
    return copy;
  };
  console.log({ numbers, copy: arrCopy(numbers) });
  console.log({ strings, copy: arrCopy(strings) });
  console.log({ booleans, copy: arrCopy(booleans) });
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas
  const timesCopy = <T extends PrimitiveType>(arr: T, count: number) => {
    const copy = [];
    for (let i = 0; i < count; i += 1) {
      copy.push(arr);
    }
    return copy;
  };
  console.log({ numbers, copy: timesCopy(numbers[0], 3) });
  console.log({ strings, copy: timesCopy(strings[2], 2) });
  console.log({ booleans, copy: timesCopy(booleans[4], 3) });
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  // Sprendimas ir rezultatų spausdinimas
  const connectArrays = <T extends PrimitiveType>(arr1: T[], arr2: T[]) => {
    const connectedArray = arr1.concat(arr2);
    return connectedArray;
  };

  console.log({ numbers, copy: connectArrays(numbers, numbers) });
  console.log({ strings, copy: connectArrays(strings, strings) });
  console.log({ booleans, copy: connectArrays(booleans, booleans) });
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  // Sprendimas ir rezultatų spausdinimas
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };

  const objectMaker = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => { value = newValue; },
      getValue: () => value,
    };
  };

  // Spausdinimas
  const value1: number = 5;
  const value2: Array<string> = ['Vienas', 'Du'];
  const value3: { name: string, surname: string } = { name: 'Vienetas', surname: 'Dvejetas' };

  const obj1 = objectMaker(value1);
  const obj2 = objectMaker(value2);
  const obj3 = objectMaker(value3);

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });

  console.log('setting new values:');
  obj1.setValue(69);
  obj2.setValue(['Neuzmatysi']);
  obj3.setValue({ name: 'Kasy', surname: 'Tau' });
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type AllPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };

  // eslint-disable-next-line max-len
  const isWorker = (person: Person): person is Worker => (person as Worker).avgMonthlyPay !== undefined;

  const isStudent = (person: Person): person is Student => {
    const student = person as Student;

    return student.university !== undefined && student.course !== undefined;
  };

  const groupFunction = (people: Person[]): AllPeople => {
    const allPeople = people.reduce<AllPeople>((prevAllPeople, person) => {
      const newAllPeople = { ...prevAllPeople };

      if (isWorker(person)) newAllPeople.workers.push(person);
      if (isStudent(person)) newAllPeople.students.push(person);
      else newAllPeople.people.push(person);

      return newAllPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });

    return allPeople;
  };

  const people: (Person | Student | Worker)[] = [
    {
      name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
      name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
      name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
    },
  ];

  const allPeople = groupFunction(people);

  console.log(allPeople);
}
