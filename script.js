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
    storage: ['Order', 'Carry', 'Fight', 'Start', 'Drink'],
    generator: document.querySelector('#generator'),
    input: document.querySelector('.sub-input'),
    inputOne: document.querySelector('#first'),
    inputTwo: document.querySelector('#second'),
    inputThree: document.querySelector('#third'),
    inputFour: document.querySelector('#fourth'),
    inputFive: document.querySelector('#fifth'),
    inputDisplay: function() {
        this.input = ''
        word = this.storage[Math.floor(Math.random() * this.storage.length)]
        splitWord = word.split('')
        this.inputOne.innerText = splitWord[3]
    }
}

//Event listeners
inputButton = subInput.generator;
inputButton.addEventListener('click', event => {
    event.preventDefault()
    subInput.inputDisplay()
});
