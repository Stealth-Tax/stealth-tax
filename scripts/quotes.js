const quoteOneBody = document.getElementById("quote-one-body");
const quoteOneAuthor = document.getElementById("quote-one-author")
const quoteTwoBody = document.getElementById("quote-two-body");
const quoteTwoAuthor = document.getElementById("quote-two-author")

const quotes = [{
    quote: 'The gold standard did not collapse. Governments abolished it in order to pave the way for inflation. The whole grim apparatus of oppression and coercion [...] had to be put into action in order to destroy the gold standard.',
    author: 'Ludwig von Mises'}, {
    quote: "Hyperinflation can take virtually your entire life's savings, without the government having to bother raising the official tax rate at all.",
    author: 'Thomas Sowell'}, {
    quote: 'Inflation is the autosuggestion, the hypnotism, the anesthetic, that has dulled the pain[...]. Inflation is the opium of the people',
    author: 'Henry Hazlitt'}, {
    quote: 'Inflation, being a fraudulent invasion of property, could not take place on the free market.',
    author: 'Murray Rothbard'}, {
    quote: 'I do not think it is an exaggeration to say history is largely a history of inflation, usually inflations engineered by governments for the gain of governments.',
    author: 'Friedrich Hayek'}, {
    quote: 'The State is the great fiction by which everyone endeavours to live at the expense of everyone else.',
    author: 'Frédéric Bastiat'}
    ];


const returnRandomQuote = quoteArray => {
    const randomIndexOne = Math.floor(Math.random() * quoteArray.length);
    
    let randomIndexTwo = randomIndexOne;
    while(randomIndexTwo === randomIndexOne) {
        randomIndexTwo = Math.floor(Math.random() * quoteArray.length);
    }
    return [randomIndexOne, randomIndexTwo];
    
}
let randomQuotes = returnRandomQuote(quotes);
console.log(randomQuotes);

quoteOneBody.innerHTML = quotes[randomQuotes[0]].quote;
quoteOneAuthor.innerHTML = quotes[randomQuotes[0]].author;

quoteTwoBody.innerHTML = quotes[randomQuotes[1]].quote;
quoteTwoAuthor.innerHTML = quotes[randomQuotes[1]].author;
