

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