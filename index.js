

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const tweet = document.getElementById('tweet');
const btn =  document.getElementById('btn');

let data = "";
let len = "";
let Qdata = ""; 

const tweetMe = () => {
    window.open(`https://twitter.com/intent/tweet?text=${Qdata.text} ${Qdata.author}`)
}

const rQuote = () => {
    const rn = Math.floor(Math.random()*len);
    Qdata = data[rn];
    quote.innerText = Qdata.text;
    Qdata.author == null ? author.innerText = "Unknown" : author.innerText = `By. ${Qdata.author}`;
}

const getQuote = async() => {
    const api = "https://type.fit/api/quotes" ;
    try{
    let res = await fetch(api);
    data = await res.json();
    len = data.length;
    rQuote();
    }catch(error){
        console.log(error);
    }
}

getQuote();
btn.addEventListener('click', getQuote);
tweet.addEventListener('click', tweetMe);
