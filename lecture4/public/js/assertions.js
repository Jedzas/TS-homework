"use strict";
console.group('Assertions - užduotys');
{
    const addBtn = document.querySelector('button');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('paspausta!');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const divElement = document.querySelector('div');
        const addSquare = () => {
            const square = document.createElement('span');
            square.className = 'square';
            divElement.append(square);
        };
        addBtn.addEventListener('click', addSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const pElement = document.querySelector('p');
        let count = 0;
        const squareCount = () => {
            count += 1;
            pElement.innerHTML = `Sukurta kvadratų: ${count}`;
        };
        addBtn.addEventListener('click', squareCount);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map