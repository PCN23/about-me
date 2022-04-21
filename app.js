// import functions

// grab DOM elements
const showButton = document.getElementById ('btn');
const animalDiv = document.getElementById('animalDiv');

console.log(showButton, animalDiv);
// set event listeners 

const showButton = addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});

console.log(addEventListener);
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
