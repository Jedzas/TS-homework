/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LithuanianCity {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Panevezys = 'Panevezys',
  }
  enum MostPopulatedCountries {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  }
  enum TopGdp {
    UnitedStates = 1,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  }
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const city1: LithuanianCity = LithuanianCity.Vilnius;
    const city2: LithuanianCity = LithuanianCity.Kaunas;
    const city3: LithuanianCity = LithuanianCity.Klaipeda;
    const city4: LithuanianCity = LithuanianCity.Siauliai;
    const city5: LithuanianCity = LithuanianCity.Panevezys;
    console.log(city1);
    console.log(city2);
    console.log(city3);
    console.log(city4);
    console.log(city5);
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const mostPopulated: MostPopulatedCountries[] = [MostPopulatedCountries.China, MostPopulatedCountries.Indonesia, MostPopulatedCountries.India, MostPopulatedCountries.Pakistan, MostPopulatedCountries.UnitedStates];

    console.log(mostPopulated);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const TopGdpV: TopGdp[] = [
      TopGdp.UnitedStates,
      TopGdp.China,
      TopGdp.Japan,
      TopGdp.Germany,
      TopGdp.UnitedKingdom,
    ];

    console.log(TopGdpV);
  }
  console.groupEnd();
}
console.groupEnd();
