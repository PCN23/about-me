// import functions

// grab DOM elements
const showButton = document.getElementById('btn');
const animalDiv = document.getElementById('animalDiv');

// set event listeners 

showButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
