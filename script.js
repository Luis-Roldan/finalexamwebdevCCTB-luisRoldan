console.log("connected");

// Global variables
let count = 0;
let clickStats = {
    increment: 0,
    decrement: 0,
    colorChange: 0,
    quoteGenerate: 0
};

// Arrays for functionality
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'cyan', 'magenta', 'lime'];
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha"
];

// DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
const quoteDisplay = document.getElementById('quoteDisplay');
const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

// Click Counter functionality
function updateCount() {
    countDisplay.textContent = count;
}

function incrementCount() {
    count++;
    clickStats.increment++;
    updateCount();
    updateClickStats();
}

function decrementCount() {
    if (count > 0) {
        count--;
        clickStats.decrement++;
        updateCount();
        updateClickStats();
    }
}

// Color Changer functionality
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    colorBox.classList.add('animate');
    clickStats.colorChange++;
    updateClickStats();
    
    setTimeout(() => {
        colorBox.classList.remove('animate');
    }, 500);
}

// Quote Generator functionality
function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
    clickStats.quoteGenerate++;
    updateClickStats();
}

// Dark Mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Click statistics tracking
function updateClickStats() {
    console.log('Click Statistics:', clickStats);
}

// Event listeners
incrementBtn.addEventListener('click', incrementCount);
decrementBtn.addEventListener('click', decrementCount);
changeColorBtn.addEventListener('click', changeColor);
generateQuoteBtn.addEventListener('click', generateQuote);
darkModeBtn.addEventListener('click', toggleDarkMode);

// Initialize the app
function init() {
    updateCount();
    console.log('Fun Web App initialized successfully!');
    console.log('Features available:');
    console.log('- Click Counter with + and - buttons');
    console.log('- Color changing box with random colors');
    console.log('- Motivational quote generator');
    console.log('- Dark mode toggle');
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);