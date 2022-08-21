import WorkPerson from './entities/work-person.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import BuisnessLicencePerson from './entities/business-license-person.js';
import Job from './entities/job.js';
const backendDeveloper = new WorkPerson({
    id: '35698546231',
    name: 'Jogn',
    surname: 'Wig',
    hourPay: 17,
    fullTimeEquivalent: 1,
});
const selfEmployed1 = new SelfEmployedPerson({
    id: '35698546444',
    name: 'Vertakas',
    surname: 'Neuzmatysi',
    hourPay: 18,
    hoursWorked: 10,
});
const frontendDeveloper = new WorkPerson({
    id: '35352546231',
    name: 'Gege',
    surname: 'Zyzz',
    hourPay: 21,
    fullTimeEquivalent: 0.5,
});
const selfEmployed2 = new SelfEmployedPerson({
    id: '35111146231',
    name: 'Vitalijus',
    surname: 'Klicko',
    hourPay: 11,
});
const designer = new BuisnessLicencePerson({
    id: '25698566231',
    name: 'John',
    surname: 'Bautista',
});
const jobs = [
    new Job('Microsoft adds', 600),
    new Job('Meta adds', 400),
    new Job('Google adds', 300),
];
jobs[0].completeJob();
jobs[2].completeJob();
const marketingSpecialist = new BuisnessLicencePerson({
    id: '35698548888',
    name: 'Kietas',
    surname: 'Marketingistas',
    jobs,
});
const employees = [
    backendDeveloper,
    frontendDeveloper,
    selfEmployed1,
    selfEmployed2,
    designer,
    marketingSpecialist,
];
console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();
console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
    console.log(emp.getPersonInfo());
    console.log(emp.calcPay());
});
console.groupEnd();
//# sourceMappingURL=main.js.map