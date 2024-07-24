// Create title
function createTitle(titleContent) {
    const title = document.createElement("h1");
    title.style.magine = '2rem 0px';
    title.style.textAlign = 'center';
    title.textContent = titleContent;

    return title;
}

// Creates image
function createImage(imgSource) {

    const image = document.createElement("img");

    // Create card image
    if (imgSource) {
        image.src = imgSource;
        image.style.width = "70%";
        image.style.margin = "3rem";
        image.style.alignSelf = "center";
        // cardImage.style.height = "100px";
        image.style.borderRadius = '5px 5px 0 0';
    }

    return image;
}

// Create workout information copy
function createCopy(targetedBodyPart, repRange, weightRange, desc) {

    const mainCopyContainer = document.createElement('div');
    mainCopyContainer.style.display = 'flex';
    mainCopyContainer.style.flexDirection = 'column';

    const container1 = document.createElement("div");
    container1.style.display = 'flex';
    container1.style.margin = '0px';

    const container2 = document.createElement("div");
    container2.style.display = 'flex';
    container2.style.margin = '0px';


    const container3 = document.createElement("div");
    container3.style.display = 'flex';
    container3.style.margin = '0px';


    const container4 = document.createElement("div");
    container4.style.display = 'flex';
    container4.style.margin = '0px';


    // Target body part label and info
    const label1 = document.createElement('p');
    label1.style.fontWeight = 'bold';
    label1.textContent = "Target Body Part";

    const targetContent = document.createElement('p');
    targetContent.textContent = targetedBodyPart;

    container1.appendChild(label1);
    container1.appendChild(targetContent);

    // ------------------------------------------

    // Rep range label and info
    const label2 = document.createElement('p');
    label2.style.fontWeight = 'bold';
    label2.textContent = "Suggested Rep Range";

    const repRangeContent = document.createElement('p');
    repRangeContent.textContent = repRange;

    container2.appendChild(label2);
    container2.appendChild(repRangeContent);

    // ------------------------------------------

    // weight range label and info
    const label3 = document.createElement('p');
    label3.style.fontWeight = 'bold';
    label3.textContent = "Suggested Weight Range";

    const weightRangeContent = document.createElement('p');
    weightRangeContent.textContent = weightRange;

    container3.appendChild(label3);
    container3.appendChild(weightRangeContent);

    // ------------------------------------------

    // weight range label and info
    const label4 = document.createElement('p');
    label4.style.fontWeight = 'bold';
    label4.textContent = "Description";

    const descriptionContent = document.createElement('p');
    descriptionContent.textContent = desc;

    container4.appendChild(label4);
    container4.appendChild(descriptionContent);

    // ------------------------------------------

    mainCopyContainer.appendChild(container1);
    mainCopyContainer.appendChild(container2);
    mainCopyContainer.appendChild(container3);
    mainCopyContainer.appendChild(container4);

    return mainCopyContainer
}

// Create 'Back to Workout' button
function createBackToWorkoutButton(navLink) {
    const backToWorkoutButton = document.createElement('button');
    backToWorkoutButton.textContent = "Back to Workout Log";
    backToWorkoutButton.style.marginBottom = '1rem';

    if (navLink) {
        backToWorkoutButton.onclick = function() {
            location.href = navLink;
        };
    }
    

    return backToWorkoutButton;
}



function renderWorkoutInfo() {

    const app = document.getElementById('workout-info');


    app.appendChild(createTitle("Bench"));

    app.appendChild(createImage('./img/bench.jpg'));

    app.appendChild(createCopy("Chest", "7-10", "135 lbs", "The barbell bench press is often performed with a shoulder width overhand grip. It primarily targets the chest. There are different variations to help target different portions of the chest."));

    app.appendChild(createBackToWorkoutButton('new-workout.html'));
}

renderWorkoutInfo();
