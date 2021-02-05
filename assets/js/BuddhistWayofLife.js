

const quotes = [
    {
        quote:
           "Work out your own salvation. Do not depend on others.",
        author: "-Buddha"  
    },
    {
        quote:
            "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow",
        author: "-Buddha"
    },
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click',() =>{
    let random = Math.floor(Math.random() * quotes.lenght);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].quote;
})

// var usingClass = document.getElementsByClassName("solution-using-class")[0];
// usingClass.addEventListener('click',() => {
//     const quotes = [
//         {
//             quote:
//                "Work out your own salvation. Do not depend on others.",
//             author: "-Buddha"
//         },
//         {
//             quote:
//                 "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow",
//             author: "-Buddha"
//         },
//     ]

//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerHTML = quotes[random].quote;
//     author.innerHTML = quotes[random].quote;
// })









// // function anotherSolution() {
// //     const quotes = [
// //         {
// //             quote:
// //                "Work out your own salvation. Do not depend on others.",
// //             author: "-Buddha"
// //         },
// //         {
// //             quote:
// //                 "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow",
// //             author: "-Buddha"
// //         },
// //     ]

// //     let random = Math.floor(Math.random() * quotes.length);

// //     quote.innerHTML = quotes[random].quote;
// //     author.innerHTML = quotes[random].quote;
// }