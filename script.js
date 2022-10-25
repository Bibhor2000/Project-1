//subDisplay Assigning Object
const subDisplay = {
    display: document.querySelector('.sub-display'),
}

//subGuesses Assigning Object
const subGuesses = {
    guessOne: document.querySelector('#one'),
    guessTwo: document.querySelector('#two'),
    guessThree: document.querySelector('#three'),
    guessFour: document.querySelector('#four'),
    guessFive: document.querySelector('#five'),
    guessSix: document.querySelector('#six'),
    guessSeven: document.querySelector('#seven'),
    guessEight: document.querySelector('#eight'),
    letterDisplay: function() {

    }
}

//subInput Assigning Object
const subInput = {
    storage: ['Order', 'Carry', 'Water', 'Motor', 'Array'],
    prompts: {
        prompt1: 'What do you do when you are at a restaurant?',
        prompt2: 'How do you move an item from one place to another?',
        prompt3: 'How do you quench your thirst?',
        prompt4: 'What is one component electric vehicles have?',
        prompt5: 'What do we use in coding to store multiple things?'
    },
    generator: document.querySelector('#generator'),
    input: document.querySelector('.sub-input'),
    inputOne: document.querySelector('#first'),
    inputTwo: document.querySelector('#second'),
    inputThree: document.querySelector('#third'),
    inputFour: document.querySelector('#fourth'),
    inputFive: document.querySelector('#fifth'),
    inputDisplay: function() {
        word = this.storage[Math.floor(Math.random() * this.storage.length)]
        wordDisplay = subDisplay.display
        if (word === 'Order') {
            wordDisplay.innerText = this.prompts.prompt1
        } else if (word === 'Carry') {
            wordDisplay.innerText = this.prompts.prompt2
        } else if (word === 'Water') {
            wordDisplay.innerText = this.prompts.prompt3
        } else if (word === 'Motor') {
            wordDisplay.innerText = this.prompts.prompt4
        } else if (word === 'Array') {
            wordDisplay.innerText = this.prompts.prompt5
        } 
    }
}

//Event listeners & Query Assigning
const generator = document.querySelector('#generator')
generator.addEventListener('click', event => {
    event.preventDefault()
    subInput.inputDisplay()
})

const submit = document.querySelector('#submit')
submit.addEventListener('click', event => {
    event.preventDefault()
    playerInput = `${subInput.inputOne}${subInput.inputTwo}${subInput.inputThree}${subInput.inputFour}${subInput.inputFive}`
    answer = subDisplay.display.value

    if (playerInput === answer) {
        alert('You are correct!')
    } else {
        alert('Wrong! Try again')
        
    }
})

//notes
//for the else statement in the submit button have a function that will take any
//incorrect letters and add them to the divs in the guesses display and deduct
//the remaining guesses.


//Code Storage
//this.input = ''
        //word = this.storage[Math.floor(Math.random() * this.storage.length)]
        //splitWord = word.split('')
        //this.inputOne.innerText = splitWord[3]

//This function prevents certain keys from being pressed
//function alphaOnly(event) {
    //var key = event.keyCode;
    //return ((key >= 65 && key <= 90) || key == 8);
//};