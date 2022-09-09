const quotes = [
    {
        quote: "人生とは自分を見つけることではない。",
        author: "バーナード・ショー"
    },
    {
        quote: "なりたかった自分になるのに遅すぎるということはない。",
        author: "ジョージ・エリオット"
    },
    {
        quote: "虹を見たければ、ちょっとやそっとの雨は我慢しなくちゃ。",
        author: "ドリー・パートン"
    },
    {
        quote: "人生は公平ではない。",
        author: "ビル・ゲイツ"
    },
    {
        quote: "幸せになることに躊躇してはいけない。",
        author: "ジョン・レノン"
    },
    {
        quote: "あなたの人生をかわりに生きてくれる人はいないわ。",
        author: "ドリー・パートン"
    },
    {
        quote: "速度を上げるばかりが、人生ではない。",
        author: "ガンジー"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;