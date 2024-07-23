

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
    app.appendChild(NavBar());

}

render();
