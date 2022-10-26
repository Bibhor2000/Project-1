//subDisplay Assigning Object
const subDisplay = {
    display: document.querySelector('.sub-display'),
    images: document.querySelector('.images'),
    imageDisplay: function() {

    }
}

//subGuesses Assigning Object
const subGuesses = {
    guessOne: document.querySelector('#one'),
    guessTwo: document.querySelector('#two'),
    guessThree: document.querySelector('#three'),
    guessFour: document.querySelector('#four'),
    guessFive: document.querySelector('#five'),
    guesses: document.querySelector('.guesses'),
    guessesAmount: 5,
    letterDisplay: function() {
        let inputs = [`${subInput.inputOne.value}`, `${subInput.inputTwo.value}`, `${subInput.inputThree.value}`, `${subInput.inputFour.value}`, `${subInput.inputFive.value}`]
        let input = playerInputs.join('')
        let words = subInput.storage
        promptDisplay = subDisplay.display.innerText
        promptOutput = subInput.prompts

        if (promptDisplay === promptOutput.prompt1) {
            let word = words[0]
            if (word.substring(0, 1) === input.substring(0, 1) || word.substring(1, 2) === input.substring(1, 2) || word.substring(2, 3) === input.substring(2, 3) || word.substring(3, 4) === input.substring(3, 4) || word.substring(4, 5) === input.substring(4, 5)) {

            } if (word.substring(0, 1) !== input.substring(0, 1)) {
                this.guessOne.innerText = input.substring(0, 1)
            } if (word.substring(1, 2) !== input.substring(1, 2)) {
                this.guessTwo.innerText = input.substring(1, 2)
            } if (word.substring(2, 3) !== input.substring(2, 3)) {
                this.guessThree.innerText = input.substring(2, 3)
            } if (word.substring(3, 4) !== input.substring(3, 4)) {
                this.guessFour.innerText = input.substring(3, 4)
            } if (word.substring(4, 5) !== input.substring(4, 5)) {
                this.guessFive.innerText = input.substring(4, 5)
            }
        }  if (promptDisplay === promptOutput.prompt2) {
            let word = words[1]
            if (word.substring(0, 1) === input.substring(0, 1) || word.substring(1, 2) === input.substring(1, 2) || word.substring(2, 3) === input.substring(2, 3) || word.substring(3, 4) === input.substring(3, 4) || word.substring(4, 5) === input.substring(4, 5)) {

            } if (word.substring(0, 1) !== input.substring(0, 1)) {
                this.guessOne.innerText = input.substring(0, 1)
            } if (word.substring(1, 2) !== input.substring(1, 2)) {
                this.guessTwo.innerText = input.substring(1, 2)
            } if (word.substring(2, 3) !== input.substring(2, 3)) {
                this.guessThree.innerText = input.substring(2, 3)
            } if (word.substring(3, 4) !== input.substring(3, 4)) {
                this.guessFour.innerText = input.substring(3, 4)
            } if (word.substring(4, 5) !== input.substring(4, 5)) {
                this.guessFive.innerText = input.substring(4, 5)
            }
        }  if (promptDisplay === promptOutput.prompt3) {
            let word = words[2]
            if (word.substring(0, 1) === input.substring(0, 1) || word.substring(1, 2) === input.substring(1, 2) || word.substring(2, 3) === input.substring(2, 3) || word.substring(3, 4) === input.substring(3, 4) || word.substring(4, 5) === input.substring(4, 5)) {

            }  if (word.substring(0, 1) !== input.substring(0, 1)) {
                this.guessOne.innerText = input.substring(0, 1)
            }  if (word.substring(1, 2) !== input.substring(1, 2)) {
                this.guessTwo.innerText = input.substring(1, 2)
            }  if (word.substring(2, 3) !== input.substring(2, 3)) {
                this.guessThree.innerText = input.substring(2, 3)
            }  if (word.substring(3, 4) !== input.substring(3, 4)) {
                this.guessFour.innerText = input.substring(3, 4)
            }  if (word.substring(4, 5) !== input.substring(4, 5)) {
                this.guessFive.innerText = input.substring(4, 5)
            }
        } if (promptDisplay === promptOutput.prompt4) {
            let word = words[3]
            if (word.substring(0, 1) === input.substring(0, 1) || word.substring(1, 2) === input.substring(1, 2) || word.substring(2, 3) === input.substring(2, 3) || word.substring(3, 4) === input.substring(3, 4) || word.substring(4, 5) === input.substring(4, 5)) {

            }  if (word.substring(0, 1) !== input.substring(0, 1)) {
                this.guessOne.innerText = input.substring(0, 1)
            }  if (word.substring(1, 2) !== input.substring(1, 2)) {
                this.guessTwo.innerText = input.substring(1, 2)
            }  if (word.substring(2, 3) !== input.substring(2, 3)) {
                this.guessThree.innerText = input.substring(2, 3)
            }  if (word.substring(3, 4) !== input.substring(3, 4)) {
                this.guessFour.innerText = input.substring(3, 4)
            }  if (word.substring(4, 5) !== input.substring(4, 5)) {
                this.guessFive.innerText = input.substring(4, 5)
            }
        }  if (promptDisplay ===  promptOutput.prompt5) {
            let word = words[4]
            if (word.substring(0, 1) === input.substring(0, 1) || word.substring(1, 2) === input.substring(1, 2) || word.substring(2, 3) === input.substring(2, 3) || word.substring(3, 4) === input.substring(3, 4) || word.substring(4, 5) === input.substring(4, 5)) {

            }  if (word.substring(0, 1) !== input.substring(0, 1)) {
                this.guessOne.innerText = input.substring(0, 1)
            }  if (word.substring(1, 2) !== input.substring(1, 2)) {
                this.guessTwo.innerText = input.substring(1, 2)
            }  if (word.substring(2, 3) !== input.substring(2, 3)) {
                this.guessThree.innerText = input.substring(2, 3)
            }  if (word.substring(3, 4) !== input.substring(3, 4)) {
                this.guessFour.innerText = input.substring(3, 4)
            }  if (word.substring(4, 5) !== input.substring(4, 5)) {
                this.guessFive.innerText = input.substring(4, 5)
            }
        }
    },
    guessesLeft: function() {     
        this.guessesAmount--
        guessesText = `Guesses left: ${this.guessesAmount}`
        this.guesses.innerText = guessesText
        if (this.guessesAmount === 0) {
            alert('Game Over!!!')
        }
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
    inputOne: document.querySelector('#first'),
    inputTwo: document.querySelector('#second'),
    inputThree: document.querySelector('#third'),
    inputFour: document.querySelector('#fourth'),
    inputFive: document.querySelector('#fifth'),
    inputDisplay: function() {
        word = this.storage[Math.floor(Math.random() * this.storage.length)]
        promptDisplay = subDisplay.display
        if (word === 'Order') {
            promptDisplay.innerText = this.prompts.prompt1
        } else if (word === 'Carry') {
            promptDisplay.innerText = this.prompts.prompt2
        } else if (word === 'Water') {
            promptDisplay.innerText = this.prompts.prompt3
        } else if (word === 'Motor') {
            promptDisplay.innerText = this.prompts.prompt4
        } else if (word === 'Array') {
            promptDisplay.innerText = this.prompts.prompt5
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
    playerInputs = [`${subInput.inputOne.value}`, `${subInput.inputTwo.value}`, `${subInput.inputThree.value}`, `${subInput.inputFour.value}`, `${subInput.inputFive.value}`]
    playerInput = playerInputs.join('')
    promptDisplay = subDisplay.display.innerText
    promptOutput = subInput.prompts
    
    if (playerInput === 'Order' && promptDisplay === promptOutput.prompt1) {
        alert('You are correct!')
    } else if (playerInput === 'Carry' && promptDisplay === promptOutput.prompt2) {
        alert('You are correct!')
    } else if (playerInput === 'Water' && promptDisplay === promptOutput.prompt3) {
        alert('You are correct!')
    } else if (playerInput === 'Motor' && promptDisplay === promptOutput.prompt4) {
        alert('You are correct!')
    } else if (playerInput === 'Array' && promptDisplay === promptOutput.prompt5) {
        alert('You are correct!')
    } else if (playerInput !== 'Order' && promptDisplay === promptOutput.prompt1) {
        alert('Wrong! Try Again')
        subGuesses.letterDisplay()
        subGuesses.guessesLeft()
    } else if (playerInput !== 'Carry' && promptDisplay === promptOutput.prompt2) {
        alert('Wrong! Try Again')
        subGuesses.letterDisplay()
        subGuesses.guessesLeft()
    } else if (playerInput !== 'Water' && promptDisplay === promptOutput.prompt3) {
        alert('Wrong! Try Again')
        subGuesses.letterDisplay()
        subGuesses.guessesLeft()
    } else if (playerInput !== 'Motor' && promptDisplay === promptOutput.prompt4) {
        alert('Wrong! Try Again')
        subGuesses.letterDisplay()
        subGuesses.guessesLeft()
    } else if (playerInput !== 'Array' && promptDisplay === promptOutput.prompt5) {
        alert('Wrong! Try Again')
        subGuesses.letterDisplay()
        subGuesses.guessesLeft()
    }
})


