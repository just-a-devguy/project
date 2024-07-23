
function createCard(title, content) {

    // Create card title
    const card = document.createElement("div");
    card.className - 'card';

    // Create card title
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    // Create card content
    const cardContent = document.createElement('p');
    cardContent.className = 'card-content';
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

function NavBar() {
    const navBar = document.createElement('div');
    navBar.innerHTML = `<nav>
            <div class="link">
                <a href="./index.html"><img src="./img/home.png" alt="home" /></a>
            </div>
            <div class="link">
                <a href="#"><img src="./img/search.png" alt="search" /></a>
            </div>
            <div class="link">
                <a class="workout-btn" href="./workoutlog.html"><img src="./img/plus.png" alt="plus sign" /></a>
            </div>
            <div class="link">
                <a href="#"><img src="./img/message.png" alt="message" /></a>
            </div>
            <div class="link">
                <a href="./profile.html"><img src="./img/person.png" alt="person" /></a>
            </div>
        </nav>`
    ;

    return navBar;
}

function render() {

    const app = document.getElementById('app');

    // Create a few card components
    const card1 = createCard('Title 1', 'Content 1');
    const card2 = createCard('Title 2', 'Content 2');
    const card3 = createCard('Title 3', 'Content 3');


    // app.appendChild(card1);
    // app.appendChild(card2);
    // app.appendChild(card3);

    app.appendChild(NavBar());


}

render();
