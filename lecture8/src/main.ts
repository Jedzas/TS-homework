/* eslint-disable no-lone-blocks */
enum HeightUnits {
  Centimetres = 'cm',
  Metres = 'm',
  Inches = 'in',
}
enum WeightUnits {
  Kilograms = 'KG',
  Pounds = 'LBS',
}
type PersonTypes = {
  name: string,
  surname: string,
  age: number,
  height?: number,
  heightUnit?: HeightUnits,
  weight?: number,
  weightUnit?: WeightUnits,
};

class Person {
  static heightUnit: HeightUnits = HeightUnits.Centimetres;

  static weightUnit: WeightUnits = WeightUnits.Kilograms;

  private name: string;

  private surname: string;

  private age!: number;

  private height?: number;

  private weight?: number;

  constructor({
    name, surname, age, height, weight, heightUnit, weightUnit,
  }: PersonTypes) {
    this.name = name;
    this.surname = surname;
    this.setAge(age);
    this.setHeight(height, heightUnit);
    this.setWeight(weight, weightUnit);
  }

  public toString(): string {
    let fixedFormatting = `\t${this.name} ${this.surname}\n`;
    fixedFormatting += `\t${this.getHeight()} ${Person.heightUnit}\n`;
    fixedFormatting += `\t${this.getWeight()} ${Person.weightUnit}\n`;
    return fixedFormatting;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public setAge(age: number): void {
    if (age < 1 || age > 150 || age % 1 !== 0) {
      console.log('error, wrong age input, for Person.setAge method');
      return;
    }

    this.age = age;
  }

  public setWeight(weight: number, weightUnit: WeightUnits): void {
    if (WeightUnits.Kilograms === weightUnit) {
      this.weight = weight;
    } else if (WeightUnits.Pounds === weightUnit) {
      this.weight = weight / 2.2;
    } else {
      this.weight = weight;
    }
  }

  public setHeight(height: number, heightUnit?: HeightUnits): void {
    if (HeightUnits.Centimetres === heightUnit) {
      this.height = height;
    } else if (HeightUnits.Metres === heightUnit) {
      this.height = height * 100;
    } else if (HeightUnits.Inches === heightUnit) {
      this.height = height * 2.54;
    } else {
      this.height = height;
    }
  }

  public getAge(): Person['age'] {
    return this.age;
  }

  public getFullname(): string {
    return `${this.name} ${this.surname}`;
  }

  public getHeight(): number {
    if (this.height === undefined) return 0;

    let value;
    if (HeightUnits.Centimetres === Person.heightUnit) {
      value = this.height;
    } else if (HeightUnits.Metres === Person.heightUnit) {
      value = this.height / 100;
    } else if (HeightUnits.Inches === Person.heightUnit) {
      value = this.height / 2.54;
    } else {
      value = this.height;
    }
    return Math.round(value * 100) / 100;
  }

  public getWeight(): number {
    if (this.weight === undefined) return 0;

    let value;
    if (WeightUnits.Kilograms === Person.weightUnit) {
      value = this.weight;
    } else if (WeightUnits.Pounds === Person.weightUnit) {
      value = this.weight * 2.2;
    } else {
      value = this.weight;
    }
    return Math.round(value * 10) / 10;
  }
}
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
  const fullname: Person = new Person({
    name: 'Joe',
    surname: 'Schmoe',
    age: 69,
  });

  console.log(fullname.getFullname());
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
  const fullname: Person = new Person({
    name: 'Joe',
    surname: 'Schmoe',
    age: 69,
  });
  const noob: Person = new Person({
    name: 'Bimbo',
    surname: 'Slice',
    age: 4200,
  });
  console.log(noob);
  console.log(fullname);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
  const personTypesDefault: PersonTypes = {
    name: 'Bon',
    surname: 'Jovi',
    age: 26,
    height: 188,

  };

  const personTypesMetres: PersonTypes = {
    name: 'Metriukas',
    surname: 'Servelatas',
    age: 69,
    height: 1.69,

    heightUnit: HeightUnits.Metres,
  };

  const personTypesInches: PersonTypes = {
    name: 'Coliuke',
    surname: 'Belekas',
    age: 52,
    height: 420,

    heightUnit: HeightUnits.Inches,
  };

  const person1: Person = new Person(personTypesDefault);
  const person2: Person = new Person(personTypesMetres);
  const person3: Person = new Person(personTypesInches);
  console.log(person1);
  console.log(person2);
  console.log(person3);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
  console.log('numatytoji reik??m??:');
  console.log({ ...Person });

  console.log('Konversija ?? metrus:', HeightUnits.Metres);
  Person.heightUnit = HeightUnits.Metres;

  console.log({ ...Person });

  console.log('Konversija ?? colius:', HeightUnits.Inches);
  Person.heightUnit = HeightUnits.Inches;

  console.log({ ...Person });
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');

console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
  const personTypesDefault: PersonTypes = {
    name: 'Bon',
    surname: 'Jovi',
    age: 26,
    height: 188,

  };
  const person: Person = new Person(personTypesDefault);

  Person.heightUnit = HeightUnits.Centimetres;
  console.log('Numatytieji matavimo vienetai:', Person.heightUnit);
  console.log('??mogaus ??gis', person.getHeight());

  Person.heightUnit = HeightUnits.Metres;
  console.log('Konversija ?? metrus:', Person.heightUnit);
  console.log('??mogaus ??gis', person.getHeight());

  Person.heightUnit = HeightUnits.Inches;
  console.log('Konversija ?? colius:', Person.heightUnit);
  console.log('??mogaus ??gis', person.getHeight());
}
console.groupEnd();

console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
  const personTypesDefault: PersonTypes = {
    name: 'Bon',
    surname: 'Jovi',
    age: 26,
    height: 188,
    weight: 92,

  };
  const person: Person = new Person(personTypesDefault);
  Person.weightUnit = WeightUnits.Kilograms;
  console.log('Numatoma konversija ?? kilogramus:', Person.weightUnit);
  console.log('??mogaus mas??', person.getWeight());

  Person.weightUnit = WeightUnits.Pounds;
  console.log('Konversija ?? svarus:', Person.weightUnit);
  console.log('??mogaus mas??', person.getWeight());

  Person.weightUnit = WeightUnits.Kilograms;
  console.log('Numatoma konversija ?? kilogramus:', Person.weightUnit);
  console.log('??mogaus mas??', person.getWeight());
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
const personTypesDefault: PersonTypes = {
  name: 'Bon',
  surname: 'Jovi',
  age: 26,
  height: 188,
  weight: 92,
};

const personTypesMetres: PersonTypes = {
  name: 'Metriukas',
  surname: 'Servelatas',
  age: 69,
  height: 1.69,
  weight: 188,

  weightUnit: WeightUnits.Pounds,
  heightUnit: HeightUnits.Metres,
};
const person1: Person = new Person(personTypesDefault);
const person2: Person = new Person(personTypesMetres);

Person.heightUnit = HeightUnits.Metres;
Person.weightUnit = WeightUnits.Kilograms;

console.log(person1.toString());

Person.heightUnit = HeightUnits.Inches;
Person.weightUnit = WeightUnits.Pounds;

console.log(person2.toString());
