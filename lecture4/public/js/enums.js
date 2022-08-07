"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Literal types - užduotys');
{
    let LithuanianCity;
    (function (LithuanianCity) {
        LithuanianCity["Vilnius"] = "Vilnius";
        LithuanianCity["Kaunas"] = "Kaunas";
        LithuanianCity["Klaipeda"] = "Klaipeda";
        LithuanianCity["Siauliai"] = "Siauliai";
        LithuanianCity["Panevezys"] = "Panevezys";
    })(LithuanianCity || (LithuanianCity = {}));
    let MostPopulatedCountries;
    (function (MostPopulatedCountries) {
        MostPopulatedCountries[MostPopulatedCountries["China"] = 0] = "China";
        MostPopulatedCountries[MostPopulatedCountries["India"] = 1] = "India";
        MostPopulatedCountries[MostPopulatedCountries["UnitedStates"] = 2] = "UnitedStates";
        MostPopulatedCountries[MostPopulatedCountries["Indonesia"] = 3] = "Indonesia";
        MostPopulatedCountries[MostPopulatedCountries["Pakistan"] = 4] = "Pakistan";
    })(MostPopulatedCountries || (MostPopulatedCountries = {}));
    let TopGdp;
    (function (TopGdp) {
        TopGdp[TopGdp["UnitedStates"] = 1] = "UnitedStates";
        TopGdp[TopGdp["China"] = 2] = "China";
        TopGdp[TopGdp["Japan"] = 3] = "Japan";
        TopGdp[TopGdp["Germany"] = 4] = "Germany";
        TopGdp[TopGdp["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(TopGdp || (TopGdp = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const city1 = LithuanianCity.Vilnius;
        const city2 = LithuanianCity.Kaunas;
        const city3 = LithuanianCity.Klaipeda;
        const city4 = LithuanianCity.Siauliai;
        const city5 = LithuanianCity.Panevezys;
        console.log(city1);
        console.log(city2);
        console.log(city3);
        console.log(city4);
        console.log(city5);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const mostPopulated = [MostPopulatedCountries.China, MostPopulatedCountries.Indonesia, MostPopulatedCountries.India, MostPopulatedCountries.Pakistan, MostPopulatedCountries.UnitedStates];
        console.log(mostPopulated);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const TopGdpV = [
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
//# sourceMappingURL=enums.js.map