"use strict";
const people = [
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
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const selectTaskProps = ({ name, surname, married }) => ({
        name,
        surname,
        married: Boolean(married),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const takePersonProps = ({ sex, income }) => ({ sex, income });
    const result = people.map(takePersonProps);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const takePersonProps = ({ name, surname, sex }) => ({ name, surname, sex });
    const result = people.map(takePersonProps);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const isMale = ({ sex }) => sex === 'male';
    const result = people.filter(isMale);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const isFemale = ({ sex }) => sex === 'female';
    const result = people.filter(isFemale);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const isCar = ({ hasCar }) => hasCar === true;
    const random = ({ name, surname }) => ({
        name, surname,
    });
    const result1 = people.filter(isCar);
    const result = result1.map(random);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const isMarried = ({ married }) => married === true;
    const result = people.filter(isMarried);
    console.table(people);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const carOwnersByGender = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const driversByGender = people.reduce(carOwnersByGender, {});
    console.table(people);
    console.log(driversByGender);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToSalary = ({ income, ...person }) => {
        const result = { ...person };
        if (income)
            result.salary = income;
        return result;
    };
    const converter = people.map(convertToSalary);
    console.table(people);
    console.table(converter);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const nameless = ({ name, surname, sex, ...anonPerson }) => anonPerson;
    const namelessArray = people.map(nameless);
    console.table(people);
    console.table(namelessArray);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const fullnamePerson = ({ name, surname, ...rest }) => ({
        ...rest,
        fullname: `${name} ${surname}`,
    });
    const fullnamePeople = people.map(fullnamePerson);
    console.table(people);
    console.table(fullnamePeople);
}
console.groupEnd();
//# sourceMappingURL=main.js.map