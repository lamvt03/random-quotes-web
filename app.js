
var quotes = [
    {
        quote: '❝Don\'t cry because it\'s over, smile because it happened.❞',
        author: 'Dr. Seuss'
    },
    {
        quote: '❝You only live once, but if you do it right, once is enough.❞',
        author: 'Mae West'
    },
    {
        quote: '❝To live is the rarest thing in the world. Most people exist, that is all.❞',
        author: 'Oscar Wilde'
    },
    {
        quote: '❝You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.❞',
        author: 'William W. Purkey'
    },
    {
        quote: '❝In three words I can sum up everything I’ve learned about life: it goes on.❞',
        author: 'Robert Frost'
    },
    {
        quote: '❝ Insanity is doing the same thing, over and over again, but expecting different results.❞',
        author: 'Narcotics Anonymous'
    },
    {
        quote: '❝There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.❞',
        author: 'Albert Einstein'
    },
    {
        quote: '❝ It does not do to dwell on dreams and forget to live.❞',
        author: 'J.K. Rowling, Harry Potter and the Sorcerer’s Stone'
    },
    {
        quote: '❝Good friends, good books, and a sleepy conscience: this is the ideal life.❞',
        author: 'Mark Twain'
    },
    {
        quote: '❝Life is what happens to us while we are making other plans.❞',
        author: 'Allen Saunders'
    }

]
var pre_index = 1 + Math.floor(Math.random() * 10);
window.onload = getQuote(pre_index);

function getRanNum(range) {
    var ran_num = Math.floor(Math.random() * range)
    while(ran_num === pre_index)
        ran_num = Math.floor(Math.random() * range);
    return ran_num;
}
function getQuote(range) {
    var quote = document.querySelector('#quote');
    var author = document.querySelector('#author');

    var index = getRanNum(range);
    pre_index = index;
    quote.innerText = quotes[index].quote;
    author.innerText = 'by ' + quotes[index].author;
}


