// Creates the container all the workout cards will live in 
function createCardContainer() {
    const container = document.createElement("div");
    container.className = "workout-card-container";
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.style.padding = "2rem";

    return container;
}

// Creates a single workout card
function createCard(title, content, imgSource, navLink) {
    // Create card
    const card = document.createElement("div");
    card.className = 'card';
    card.style.margin = '0px';
    card.style.padding = '10px';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '0 5px 6px rgba(0, 0, 0, 0.3)';
    card.style.cursor = 'pointer';

    if (navLink) {
        card.onclick = function() {
            location.href = navLink;
        };
    }

    // Create card image
    if (imgSource) {
        const cardImage = document.createElement("img");
        cardImage.src = imgSource;
        cardImage.alt = title;
        cardImage.style.width = "100px";
        cardImage.style.height = "100px";
        cardImage.style.borderRadius = '5px 5px 0 0';
        card.appendChild(cardImage);
    }

    // Create card title
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
    cardTitle.style.fontSize = '18px';
    cardTitle.style.textAlign = 'center';
    cardTitle.style.margin = '10px 0px';

    // Create card content
    const cardContent = document.createElement('p');
    cardContent.className = 'card-content';
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Add a workout button
function addWorkoutButton(navLink) {
    const addWorkoutButton = document.createElement('button');
    addWorkoutButton.textContent = "View Workout History";
    addWorkoutButton.style.marginBottom = '1rem';
    
    if (navLink) {
        addWorkoutButton.onclick = function() {
            location.href = navLink;
        };
    }

    return addWorkoutButton;
}

function render() {
    const app = document.getElementById('app');

    const container = createCardContainer();

    // Create a few card components with images
    const card1 = createCard('Bench Press', 'Read More', './img/bench.jpg', './workout-information.html');
    const card2 = createCard('Squat', 'Read More', './img/squat.jpg');
    const card3 = createCard('Pull-Up', 'Read More', './img/pull-up.jpg');
    const card4 = createCard('Deadlift', 'Read More', './img/deadlift.jpg');

    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    container.appendChild(card4);

    app.appendChild(container);
    app.appendChild(addWorkoutButton('./history.html'));
}

render();
