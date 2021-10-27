function taksistas(trukme) {
    const kainaUzSekunde = 5;

    return new Promise((res, rej) => {
        setTimeout(() => {
            const kaina = Math.random() < 0.5 ? trukme * kainaUzSekunde : 0;
            res(kaina);

            // if (Math.random() < 0.5) {
            //     res(trukme * kainaUzSekunde);
            // } else {
            //     rej(-10);
            // }
        }, trukme * 1000);
    })
}

async function vaziuojam() {
    let saskaita = 0;

    saskaita += await taksistas(1);
    console.log(saskaita);

    saskaita += await taksistas(2);
    console.log(saskaita);

    saskaita += await taksistas(3);
    console.log(saskaita);
}

// async function vaziuojam() {
//     let saskaita = 0;
//     try {
//         saskaita += await taksistas(2);
//     } catch (error) {
//         saskaita += error;
//     }
//     console.log(saskaita);

//     try {
//         saskaita += await taksistas(2);
//     } catch (error) {
//         saskaita += error;
//     }
//     console.log(saskaita);

//     try {
//         saskaita += await taksistas(2);
//     } catch (error) {
//         saskaita += error;
//     }
//     console.log(saskaita);
// }

vaziuojam();