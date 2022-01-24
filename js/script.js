quoteChange = () => {
    let quote = document.getElementById('quote');
    let author = document.getElementById('author');
    let num = Math.floor(Math.random() * 11);
    if (num === 0) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Be yourself, evertone else is already taken"';
        author.innerHTML = '-- Oscar Wilde';
    } else if (num === 1) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>So many books, so little time"';
        author.innerHTML = '-- Frank Zappa';
    } else if (num === 2) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>You only live once, but if you do it right, once is enough"';
        author.innerHTML = '-- Dr.Seuss';
    } else if (num === 3) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Be the change that you wish to see in the world"';
        author.innerHTML = '-- Mahatma Gandhi';
    } else if (num === 4) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>To live is the rarest thing in the world.Most people exist, that is all"';
        author.innerHTML = '-- OScar Wilde';
    } else if (num === 5) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>We accept the love we think we deserve"';
        author.innerHTML = '-- Stephen Chbosky';
    } else if (num === 6) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Without music, life would be a mistake"';
        author.innerHTML = '-- Friedrich';
    } else if (num === 7) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>It is better to be hated for what you are than to be loved for what you are not"';
        author.innerHTML = '-- Andre Gide';
    } else if (num === 8) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Wisdom is better than silver and gold"';
        author.innerHTML = '-- Bob Marley';
    } else if (num === 9) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Don\'t quote me boy I ain\'t said shit"';
        author.innerHTML = '-- Easy E';
    } else if (num === 10) {
        quote.innerHTML = '<i class="fas fa-quote-left fa-5x"></i>Revenge is the sweetest joy next to getting pussy"';
        author.innerHTML = '-- 2pac';
    }
};
let button = document.getElementById('generate');
button.addEventListener('click', quoteChange);