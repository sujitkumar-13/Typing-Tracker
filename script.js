const startBtn = document.querySelector('.strtbtn');
const timeSelector = document.getElementById('timeSelector');
const levelSelector = document.getElementById('levelSelector');
const mainContent = document.querySelector('.main-content');
const section = document.querySelector('section');
const moon = document.querySelector('.theme i');
const body = document.querySelector('body');
const heading = document.querySelector('.heading');
const subtitle = document.querySelector('.sub-title');
const paraBox = document.querySelector('.para');
const inputBox = document.getElementById('para-text');
const timerDisplay = document.querySelector('.time h1');
const select1 = document.querySelector('.times-select');
const select2 = document.querySelector('.level-select')
const score = document.querySelector('.result-container');
const resetbtn = document.querySelector('.reset')


const easyParagraphs = [
    "The beach is a wonderful place to visit. The sand is soft under your feet. The waves crash gently on the shore. Children build sandcastles with buckets and shovels. People love to swim in the sea. Some bring umbrellas to sit under the shade. Many enjoy walking along the shore and collecting shells. The sun shines brightly, making the water sparkle. Birds fly overhead, looking for food. A day at the beach is always fun and relaxing.",
    'Morning walks are good for health. The air is fresh and cool. Birds sing sweetly as the sun rises. People walk slowly, enjoying the peace. Some jog to stay fit and strong. Trees along the path make the walk beautiful. Dogs run happily with their owners. The calm morning helps people feel relaxed. It is the best time to think and plan the day. A morning walk makes the day better',
    'Rain is a gift from the sky. It makes the ground wet and cool. Farmers love rain because it helps their crops grow. Children play in puddles when it rains. Plants look fresh and green after a good shower. People use umbrellas and raincoats to stay dry. Rain fills rivers and lakes with water. Without rain, life would be difficult. The sound of raindrops is very soothing. Rain is important for all living things.',
    'Mango is my favorite fruit. It is sweet and juicy. Mangoes come in summer, and everyone loves them. They are yellow when ripe and taste delicious. We can make juice, shakes, and pickles from mangoes. Mangoes grow on big trees. They are healthy and full of vitamins. Eating a mango feels refreshing in the heat. Many people call mango the king of fruits. I wait all year to eat them.',
    'The moon is round and white. It shines brightly in the night sky. Sometimes it looks big, and sometimes it looks small. The moon changes its shape every night. It is very far from the earth. People have traveled to the moon in rockets. The moon does not have its own light. It reflects the light of the sun. Stars twinkle around it at night. Looking at the moon makes us feel calm and happy.',
    'School is an exciting place to learn. The day starts with the bell ringing. Teachers teach us many new things. We read books and solve problems. During lunch, friends share food and talk. The playground is full of laughter during games. Teachers guide us to be good and kind. There are also fun activities like drawing and singing. At the end of the day, we pack our bags and go home. School is a place where we grow and make memories.',
    'The forest is full of tall trees and plants. Animals like deer and monkeys live there. Birds sing sweet songs in the forest. There is a lot of fresh air and shade. The forest is a peaceful place. People come to the forest to see its beauty. Some rivers flow through the forest, making it more beautiful. Forests are very important for the earth. They give us wood, fruits, and oxygen. We should protect forests and not cut down trees.',
    'I have a best friend named Ravi. He is very kind and helpful. We study in the same class and sit together. Ravi always helps me with my homework. We play games in the evening and have fun. He likes to share his toys with me. Ravi is good at sports and studies. He never fights with anyone. I feel lucky to have Ravi as my best friend. He is the best friend anyone could ask for.',
    'A train journey is exciting. Trains move fast and carry many people. You can see fields, rivers, and trees from the window. The seats are comfortable, and you can sit with your family. Vendors sell snacks and tea during the journey. People talk, laugh, and enjoy the trip. At night, the sound of the train is calming. Traveling by train is a great experience. It is one of the best ways to travel.',
    'Flowers are colorful and beautiful. They grow on plants and trees. Some flowers smell sweet and make the air fresh. Bees and butterflies love flowers. Flowers are used for decorations and gifts. Roses, lilies, and sunflowers are popular flowers. They add beauty to gardens and parks. People feel happy when they see flowers. Flowers are a wonderful part of nature. Everyone loves their beauty.',
];

const mediumParagraphs = [
    'Living in a city has its advantages and challenges. Cities are full of opportunities jobs, education, and entertainment. The streets are often busy, with cars and buses rushing past. Shopping malls and theaters attract people during weekends. However, city life is not always easy. The air is polluted, and traffic jams are common. Despite the noise and crowds, people enjoy the convenience of city life. They love its energy and excitement, which keeps them motivated.',
    'Festivals bring joy and unity to people. In my country, we celebrate many festivals like Diwali, Christmas, and Eid. Diwali is the festival of lights; people light lamps and burst crackers. Christmas is marked by decorating trees and exchanging gifts. During Eid, people prepare delicious dishes and greet each other warmly. Festivals are not just about celebrations they also teach us the value of togetherness. They are the heart of our culture.',
    'Visiting a market is always an interesting experience. The place is crowded with people buying and selling goods. Vendors shout to attract customers, offering fresh vegetables, fruits, and more. The aroma of spices and street food fills the air. You can also find clothes, toys, and household items at reasonable prices. Bargaining is a common practice in markets. A visit to the market is not just about shopping it’s a glimpse into local life.',
    'Sports play a crucial role in our lives. They keep us fit and healthy, both physically and mentally. Games like football, cricket, and tennis are enjoyed by people worldwide. Playing sports teaches teamwork, discipline, and leadership. Watching sports is equally exciting fans cheer for their favorite teams with enthusiasm. Whether played professionally or for fun, sports bring people together and inspire greatness.',
    'Air travel is the fastest way to explore distant places. Airports are busy hubs where passengers check in, collect boarding passes, and wait for flights. Once on board, the view from the airplane window is breathtaking. The clouds look like cotton candy, and the earth below seems tiny. Air travel saves time but can be expensive. It’s a thrilling experience for first-time flyers. Despite the cost, it remains a popular mode of travel.',
    'Winter evenings are cozy and peaceful. As the sun sets early, people gather indoors to stay warm. Hot drinks like coffee or cocoa are perfect companions. Some prefer reading books, while others watch movies or chat with family. Outside, the air is cold, and trees look bare. Children enjoy playing in the snow, building snowmen and throwing snowballs. Winter evenings remind us to slow down and enjoy simple pleasures.',
    'Gardening is a relaxing and rewarding hobby. Planting seeds, watering them, and watching them grow gives immense satisfaction. Flowers like roses and marigolds add beauty to the garden. Some grow vegetables and herbs, which are fresh and healthy. Gardening teaches patience and care, as plants take time to bloom. Spending time in a garden also reduces stress. It’s a hobby that connects you to nature.',
    'Space exploration is one of humanity’s greatest achievements. It has helped us understand the universe better. Satellites orbit the earth, providing communication and weather updates. Missions to the moon and Mars inspire future generations. However, space exploration is expensive and risky. Despite the challenges, it fuels curiosity and innovation. The dream of discovering new planets keeps scientists and engineers motivated.',
    'A school picnic is always a memorable day. Students travel together to a park or a historical site. They play games, sing songs, and enjoy delicious food. Teachers join in the fun, making the day even more special. Picnics help students relax and bond with classmates. The fresh air and beautiful scenery make everyone feel refreshed. It’s a break from studies that everyone looks forward to.',
    'The internet has changed the way we live. It connects people across the world in seconds. You can search for information, shop online, and even attend virtual meetings. Social media platforms allow us to share ideas and experiences. However, excessive use of the internet can be harmful. It’s important to use it wisely and for productive purposes. The internet is a powerful tool that has made the world a smaller place.',
];

const hardParagraphs = [
    'Innovation the ability to think creatively and solve problems has shaped our world. From the wheel to artificial intelligence (AI), groundbreaking ideas drive progress. Thomas Edison’s invention of the light bulb revolutionized daily life, while the internet redefined communication. However, innovation isn’t without challenges: ethical dilemmas, economic disparities, and environmental concerns must be addressed. For innovation to succeed, collaboration between scientists, governments, and industries is essential.',
    'Globalization marked by the interconnectedness of economies and cultures has reshaped the modern world. Trade agreements, multinational corporations, and technological advancements have brought nations closer. While it promotes economic growth and cultural exchange, it also widens the gap between the rich and poor. Critics argue that local traditions are often overshadowed by dominant global trends. Striking a balance is the key to sustainable globalization.',
    'Renewable energy sources such as solar, wind, and hydro are critical for a sustainable future. Unlike fossil fuels, renewables are clean and abundant. Solar panels, for example, harness sunlight to generate electricity, reducing carbon footprints. Wind turbines convert kinetic energy into power, while hydroelectric dams utilize flowing water. Transitioning to renewables requires significant investment but promises long term benefits. The shift is not optional it’s imperative.',
    'Freedom a fundamental human right is cherished universally. It includes freedom of speech, religion, and movement. However, absolute freedom can lead to chaos; thus, societies establish laws to maintain order. Philosophers like Rousseau and Locke emphasized the balance between freedom and responsibility. In modern democracies, freedom is a cornerstone of governance but must be safeguarded from authoritarian tendencies.',
    'The Renaissance (14th–17th century) was a period of cultural rebirth in Europe. It produced great artists like Leonardo da Vinci and Michelangelo. Scientific breakthroughs such as Galileo’s work on astronomy challenged traditional beliefs. Literature flourished, with Shakespeare penning timeless works. The Renaissance also fostered exploration, with voyages by Columbus and Magellan. It laid the foundation for the modern world, blending art, science, and humanism.',
    'Quantum mechanics a branch of physics examines the behavior of particles at the atomic and subatomic levels. Concepts like superposition and entanglement defy classical physics, challenging our understanding of reality. The famous “Schrödinger’s cat” thought experiment illustrates quantum paradoxes. Applications of quantum theory include semiconductors, lasers, and quantum computing. Despite its complexity, it continues to unlock mysteries of the universe.',
    'Modern technology presents unique ethical dilemmas. Artificial intelligence, for instance, raises questions about data privacy and job displacement. Autonomous vehicles must be programmed to make moral decisions in critical situations. Genetic editing, enabled by CRISPR, sparks debates on its impact on humanity. Balancing innovation with ethics requires transparency, regulations, and public awareness.',
    'Happiness though subjective is a universal pursuit. Philosophers like Aristotle argued that true happiness comes from virtue and purpose. Modern psychology explores how relationships, mindfulness, and gratitude contribute to well being. Material wealth, while important, often pales in comparison to inner contentment. Understanding happiness requires balancing external achievements with internal peace.',
    'The planet faces a severe environmental crisis: deforestation, pollution, and climate change threaten ecosystems. Rising sea levels endanger coastal communities, while plastic waste chokes marine life. Governments must implement policies to reduce emissions and protect biodiversity. Individuals, too, can contribute by adopting sustainable practices recycling, conserving energy, and reducing waste. Collective action is the only way forward.',
    'Space exploration an awe inspiring endeavor pushes the boundaries of human capability. From Apollo missions to Mars rovers, humanity’s quest for knowledge continues. Satellites improve communication and weather forecasting, while telescopes uncover distant galaxies. However, the cost and risks of space exploration spark debates. Despite challenges, it reflects humanity’s innate curiosity and desire to understand the cosmos.',
];

moon.addEventListener('click', () => {
    if (moon.classList.contains('fa-moon')) {
        moon.classList.replace('fa-moon', 'fa-sun');
        moon.setAttribute('title', 'Switch to dark theme');
    } else {
        moon.classList.replace('fa-sun', 'fa-moon');
        moon.setAttribute('title', 'Switch to light theme');
    }
    body.classList.toggle('dark-background');
    heading.classList.toggle('head');
    subtitle.classList.toggle('title');
    select1.classList.toggle('night');
    select2.classList.toggle('night');
    resetbtn.classList.toggle('dark');
    inputBox.classList.toggle('darkmode')
});


// Start button event listener

function getParagraphByLevel(level) {
    switch (level) {
        case 'easy':
            return easyParagraphs[Math.floor(Math.random() * easyParagraphs.length)];
        case 'medium':
            return mediumParagraphs[Math.floor(Math.random() * mediumParagraphs.length)];
        case 'hard':
            return hardParagraphs[Math.floor(Math.random() * hardParagraphs.length)];
        default:
            return '';
    }
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedTime = timeSelector.value;
    const selectedLevel = levelSelector.value;

    if (selectedTime === 'select' || selectedLevel === 'select') {
        alert('Please select a valid test time and level.');
        return;
    }

    timeLeft = timeMapping[selectedTime];  
    const paragraph = getParagraphByLevel(selectedLevel);
    paraBox.textContent = paragraph;

    mainContent.classList.add('remove');
    section.classList.add('block');

    startTimer();
});

let timer;
let wordsTyped = 0;
let totalWords = 0;
let timeLeft;

const timeMapping = {
    '1minute': 60,
    '2minute': 120, 
    '3minute': 180,
};


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
            calculateResults();
        }
    }, 1000);
}

inputBox.addEventListener('input', () => {
    const inputText = inputBox.value;
    const paragraph = paraBox.textContent;
    const words = paragraph.split(' ');
    const inputWords = inputText.split(' ');

    paraBox.innerHTML = '';

    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordsTyped++
        if (inputWords[index] === '') {
            wordSpan.style.color = 'red';
        }else if (inputWords[index] === word) {
            wordSpan.style.color = 'green'; 
        } else if (inputWords[index] && inputWords[index] !== word) {
            wordSpan.style.color = 'red'; 
        } else {
            wordSpan.style.color = 'black';
        }

        paraBox.appendChild(wordSpan);
    });
    
    wordsTyped = inputWords.length; 

});

inputBox.addEventListener('paste', (e) => {
    e.preventDefault(); 
});

function calculateResults() {
    clearInterval(timer);

    section.classList.remove('block');
    score.style.display = 'block';

    const totalTime = timeSelector.value === 'select' ? 0 : {
        '1minute': 60,
        '2minute': 120,
        '3minute': 180,
    }[timeSelector.value];

    let wordsPerMinute = Math.round((wordsTyped / totalTime) * 60);

    const paragraphWords = paraBox.textContent.trim().split(/\s+/); 
    const inputWords = inputBox.value.trim().split(/\s+/); 

    let correctWords = 0;

    for (let i = 0; i < inputWords.length; i++) {
        if (paragraphWords[i] === inputWords[i]) {
            correctWords++;
        }
    }

    const accuracy = Math.round((correctWords / paragraphWords.length) * 100);

    document.querySelector('.wpm h1').innerHTML = `${wordsPerMinute} <span>WPM</span>`;
    document.querySelector('.accuracy h1').innerHTML = `${accuracy}% <span>Accuracy</span>`;
}


document.querySelector('.reset button').addEventListener('click', () => {
    score.style.display = 'none';
    mainContent.classList.remove('remove');
    inputBox.value = '';
    paraBox.textContent = '';
    timeSelector.value = 'select';
    levelSelector.value = 'easy';
});