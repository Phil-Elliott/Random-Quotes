const container = document.querySelector('.container')
const button = document.querySelector('#quote-gen')
 

const quotes = {
	quote1: `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
	quote2: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
	quote3: `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,
	quote4: `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
	quote5: `“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
	quote6: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi`,
	quote7: `“Without music, life would be a mistake.”
― Friedrich Nietzsche`,
	quote8: `“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide`,
	quote9: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou`,
	quote10: `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`
}

const pEl = document.createElement('p')

button.addEventListener('click', () => {
	const random = pickRandom()
	pEl.innerText = random
	container.appendChild(pEl)
})

function pickRandom(){
	const keys = Object.keys(quotes)
	const randomKey = keys[Math.floor(Math.random() * keys.length)]
	return quotes[randomKey]
}














/* 1) Have quote disapear when new p is created
   2) Have quote appear one letter at a time

   */