/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = Pick<Required<Person>, 'name' | 'surname' | 'married'>;

  const selectTaskProps = ({ name, surname, married }: Person): TaskProps => ({
    name,
    surname,
    married: Boolean(married),
  });
  const result: TaskProps[] = people.map(selectTaskProps);
  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = {
    sex: Person['sex'],
    income: Person['income'],
  };
  const takePersonProps = ({ sex, income }: Person): TaskProps => ({ sex, income });

  const result: TaskProps[] = people.map(takePersonProps);

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex'],
  };
  const takePersonProps = ({ name, surname, sex }: Person): TaskProps => ({ name, surname, sex });

  const result: TaskProps[] = people.map(takePersonProps);

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = Omit<Person, 'sex'> & {
    sex: 'male',
  };

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const result: TaskProps[] = people.filter(isMale) as TaskProps[];

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = {
    sex: 'female',
  };
  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const result: TaskProps[] = people.filter(isFemale) as TaskProps[];

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
  };
  const isCar = ({ hasCar }: Person): boolean => hasCar === true;
  const random = ({ name, surname }: Person): TaskProps => ({
    name, surname,
  });

  const result1: Person[] = people.filter(isCar);
  const result: TaskProps[] = result1.map(random);

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = {
    married: Person['married']
  };

  const isMarried = ({ married }: Person): Boolean => married === true;

  const result: TaskProps[] = people.filter(isMarried) as TaskProps[];

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type DriverCountByGender = {
    [Key in Person['sex']]?: number
  };

  const carOwnersByGender = (result: DriverCountByGender, person: Person): DriverCountByGender => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const driversByGender: DriverCountByGender = people.reduce(carOwnersByGender, {});

  console.table(people);
  console.log(driversByGender);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = Omit<Person, 'income'> & {
    salary?: Person['income']
  };

  const convertToSalary = ({ income, ...person }: Person): TaskProps => {
    const result: TaskProps = { ...person };

    if (income) result.salary = income;

    return result;
  };

  const converter: TaskProps[] = people.map(convertToSalary);

  console.table(people);
  console.table(converter);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = Omit<Person, 'name' | 'surname' | 'sex'>;

  const nameless = ({
    name, surname, sex, ...anonPerson
  }: Person): TaskProps => anonPerson;

  const namelessArray: TaskProps[] = people.map(nameless);

  console.table(people);
  console.table(namelessArray);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  type Fullname = Omit<Person, 'name' | 'surname'> & {
    readonly fullname: string,
  };

  const fullnamePerson = ({ name, surname, ...rest }: Person): Fullname => ({
    ...rest,
    fullname: `${name} ${surname}`,
  });

  const fullnamePeople: Fullname[] = people.map(fullnamePerson);

  console.table(people);
  console.table(fullnamePeople);
}
console.groupEnd();
