// Define an array of cities with their corresponding data
const cities = [
  {
    name: "New York City - The City That Never Sleeps",
    image: "../assets/imgs/new_york.jpg",
    overview: "New York City, often called simply New York, is the most populous city in the United States. It is located in the northeastern region of the country and is home to many iconic landmarks such as the Statue of Liberty, Empire State Building, and Central Park. The city is known for its diverse culture, bustling streets, and many world-renowned museums, theaters, and restaurants.",
    history: "New York City was founded in 1624 by the Dutch. It was originally called New Amsterdam, but was renamed New York in 1664. The city was the capital of the United States from 1785 to 1790. It was also the capital of the state of New York from 1797 to 1821.",
    attractions: "New York City is home to many famous attractions. Some of the most popular include the Empire State Building, the Statue of Liberty, Times Square, Central Park, and the Metropolitan Museum of Art. The city is also home to many professional sports teams, including the New York Yankees, New York Giants, New York Knicks, and New York Rangers.",
    practicalInfo: "New York City is located in the northeastern region of the United States. It is bordered by the states of New Jersey, Connecticut, and Pennsylvania. The city is also home to three major airports: John F. Kennedy International Airport, LaGuardia Airport, and Newark Liberty International Airport.",
  },
  {
    name: "Paris - The City of Love",
    image: "../assets/imgs/paris.jpg",
    overview: "Paris is the capital and most populous city of France. It is located in the northern region of the country on the river Seine. The city is known for its rich history, beautiful architecture, and many world-renowned museums, restaurants, and landmarks such as the Eiffel Tower, Notre Dame Cathedral, and the Louvre.",
    history: "Paris was founded in 250 BC by the Romans. It was originally called Lutetia. The city was captured by the Franks in 508 AD and became the capital of the Kingdom of France in 987 AD. Paris was the capital of the French Empire from 1804 to 1814 and again from 1815 to 1848.",
    attractions: "Paris is home to many famous attractions. Some of the most popular include the Eiffel Tower, Notre Dame Cathedral, the Louvre, the Arc de Triomphe, and the Palace of Versailles. The city is also home to many professional sports teams, including the Paris Saint-Germain F.C., Paris Volley, and Paris FC.",
    practicalInfo: "Paris is located in the northern region of France. It is bordered by the English Channel, the North Sea, Belgium, Luxembourg, and Germany. The city is also home to two major airports: Charles de Gaulle Airport and Orly Airport.",
  },
  {
    name: "Tokyo - The City of the Rising Sun",
    image: "../assets/imgs/tokyo.jpg",
    overview: "Tokyo is the capital and most populous city of Japan. It is located in the southeastern region of the country on the Pacific coast. The city is known for its rich history, modern architecture, and many world-renowned museums, restaurants, and landmarks such as the Tokyo Tower, Imperial Palace, and the Tokyo Skytree.",
    history: "Tokyo was founded in 1457 by the Tokugawa clan. It was originally called Edo. The city was renamed Tokyo in 1868. The city was the capital of Japan from 1868 to 1943 and again from 1949 to 1990.",
    attractions: "Tokyo is home to many famous attractions. Some of the most popular include the Tokyo Tower, the Imperial Palace, the Tokyo Skytree, the Meiji Shrine, and the Senso-ji Temple. The city is also home to many professional sports teams, including the Tokyo Giants, Tokyo Swallows, and Tokyo Verdy.",
    practicalInfo: "Tokyo is located in the southeastern region of Japan. It is bordered by the Pacific Ocean, the Sea of Japan, and the Kantō region. The city is also home to two major airports: Tokyo Haneda Airport and Tokyo Narita Airport.",
  },
  {
    name: "London - The City of Big Ben",
    image: "../assets/imgs/london.jpg",
    overview: "London is the capital and most populous city of England and the United Kingdom. It is located in the southeastern region of the country on the River Thames. The city is known for its rich history, beautiful architecture, and many world-renowned museums, restaurants, and landmarks such as the Tower of London, Big Ben, and Buckingham Palace.",
    history: "London was founded by the Romans in 43 AD. It was originally called Londinium. The city was captured by the Anglo-Saxons in 597 AD and became the capital of the Kingdom of England in 1066 AD. London was the capital of the United Kingdom from 1801 to 1925.",
    attractions: "London is home to many famous attractions. Some of the most popular include the Tower of London, Big Ben, Buckingham Palace, the London Eye, and the British Museum. The city is also home to many professional sports teams, including the Arsenal F.C., Chelsea F.C., and Tottenham Hotspur F.C.",
    practicalInfo: "London is located in the southeastern region of England. It is bordered by the English Channel, the North Sea, and the counties of Kent, Surrey, and Hertfordshire. The city is also home to five major airports: London Heathrow Airport, London Gatwick Airport, London Stansted Airport, London Luton Airport, and London City Airport.",
  },
  {
    name: "Dubai - The City of Gold",
    image: "../assets/imgs/dubai.jpg",
    overview: "Dubai is the most populous city in the United Arab Emirates. It is located in the southeastern region of the country on the Persian Gulf. The city is known for its rich history, modern architecture, and many world-renowned museums, restaurants, and landmarks such as the Burj Khalifa, Burj Al Arab, and the Dubai Mall.",
    history: "Dubai was founded in 1833 by the Al Maktoum family. It was originally called Al Wasl. The city was renamed Dubai in 1966. The city was the capital of the United Arab Emirates from 1971 to 1972.",
    attractions: "Dubai is home to many famous attractions. Some of the most popular include the Burj Khalifa, Burj Al Arab, the Dubai Mall, the Dubai Fountain, and the Dubai Frame. The city is also home to many professional sports teams, including the Al Ahli Dubai F.C., Al Nasr Dubai F.C., and Al Jazira F.C.",
    practicalInfo: "Dubai is located in the southeastern region of the United Arab Emirates. It is bordered by the Persian Gulf, Saudi Arabia, and Oman. The city is also home to two major airports: Dubai International Airport and Al Maktoum International Airport.",
  },
];
  
// Define variables to keep track of the current city and the buttons
let currentCity = 0;
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
  
// Define a function to update the contents of the sections based on the current city
function updateCity() {
  const city = cities[currentCity];
  const container = document.getElementById("container");
  container.innerHTML = `
    <div id="overview" class="info-panel">
      <h2>Overview of ${city.name}</h2>
      <img src="${city.image}" alt="${city.name}" width="925.6" height="520.65">
      <p>${city.overview}</p>
    </div>
    <div id="history" class="info-panel">
      <h2>History</h2>
      <p>${city.history}</p>
    </div>
    <div id="attractions" class="info-panel">
      <h2>Attractions</h2>
      <p>${city.attractions}</p>
    </div>
    <div id="practical-info" class="info-panel">
      <h2>Practical Info</h2>
      <p>${city.practicalInfo}</p>
    </div>
  `;
}

// Define event listeners for the left and right arrow buttons
leftButton.addEventListener("click", () => {
  currentCity = (currentCity - 1 + cities.length) % cities.length;
  updateCity();
});
  
rightButton.addEventListener("click", () => {
  currentCity = (currentCity + 1) % cities.length;
  updateCity();
});
  
// Call the updateCity function to display the initial city (New York)
updateCity();
