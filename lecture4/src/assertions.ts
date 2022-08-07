/* eslint-disable no-lone-blocks */
/*
  Assertion(Teigimas) -
   tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  const addBtn: HTMLButtonElement = document.querySelector('button') as HTMLButtonElement;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('paspausta!');
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const divElement: HTMLDivElement = document.querySelector('div') as HTMLDivElement;
    const addSquare = () => {
      const square: HTMLSpanElement = document.createElement('span');
      square.className = 'square';
      divElement.append(square);
    };
    addBtn.addEventListener('click', addSquare);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const pElement: HTMLParagraphElement = document.querySelector('p') as HTMLParagraphElement;
    let count: number = 0;
    const squareCount = () => {
      count += 1;
      pElement.innerHTML = `Sukurta kvadratų: ${count}`;
    };
    addBtn.addEventListener('click', squareCount);
  }
  console.groupEnd();
}
console.groupEnd();
