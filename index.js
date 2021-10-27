// function laukimas(time, whatNext) {
//     setTimeout(() => {
//         whatNext();
//     }, time * 1000);
// }

// function labas() {
//     console.log('Labas, ka tu?');
// }

// console.log('START');
// laukimas(3, labas);
// console.log('END');

function laukimas(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                res('Sekmingai igyvendintas pazadas :)');
            } else {
                rej('Nesekmingai igyvendintas pazadas :,(');
            }
        }, time * 1000);
    });
}

console.log('Pirmojo pradzia');
const pazadas1 = laukimas(2);
pazadas1
    .then((pozityvas) => { return console.log('1:', pozityvas); })
    .catch((negatyvas) => { return console.log('1:', negatyvas); })
console.log('Pirmojo pabaiga');


console.log('Antrojo pradzia');
const pazadas2 = laukimas(1);
pazadas2
    .then((pozityvas) => { return console.log('2:', pozityvas); })
    .catch((negatyvas) => { return console.log('2:', negatyvas); })
console.log('Antrojo pabaiga');

// async / await

// async function asyncPazadukas() {
//     try {
//         const ats = await laukimas(1);
//         console.log(ats);
//     } catch (error) {
//         console.log(error);
//     }
// }

// asyncPazadukas();