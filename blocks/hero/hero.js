import { readBlockConfig } from '../../scripts/aem.js';

/*
const cards = [
  {
    title: 'Feature One',
    description: 'Transform your workflow with our innovative solutions that streamline processes.',
    href: '#'
  },
  {
    title: 'Feature Two',
    description: 'Unlock new possibilities with advanced analytics and real-time insights for better decision making.',
    href: '#'
  },
  {
    title: 'Feature Three',
    description: 'Experience seamless integration with your existing tools and enhance team collaboration.',
    href: '#'
  }
];


function createCards(config) {
  const cardsContainer = document.getElementById('cardsContainer');

  cards.forEach(card => {
    const cardElement = document.createElement('a');
    cardElement.href = card.href;
    cardElement.className = 'card';

    cardElement.innerHTML = `
                    <h3 class="card-title">${card.title}</h3>
                    <p class="card-description">${card.description}</p>
                `;

    cardsContainer.appendChild(cardElement);
  });
}
*/

export default async function decorate(block) {
  const config = readBlockConfig(block);
  console.log(config.heading);

  const elem = document.createRange().createContextualFragment(`
    <div class="teaser container">
        <img src="" alt="Background" class="teaser-bg">
        <div class="container">
            <div class="columns">
                <!-- Left Column -->
                <div class="column" id="cardsContainer">
                    <!-- Cards will be inserted here by JavaScript -->
                </div>

                <!-- Right Column -->
                <div class="column">
                    <h2 class="content-title component">Transform Your Digital Experience</h2>
                    <p class="content-description component">
                        ${config.heading}
                    </p>
                    <a href="#" class="button">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
  `);
  block.textContent = '';
  block.append(elem);

  //createCards(config)
}