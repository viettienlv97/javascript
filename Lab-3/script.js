const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),
}
const btnSubmit = document.getElementById('btn-submit')
const resultEl = document.getElementById('result')

const register = function () {
  const self = this
  let msg = self.question + '\n'
  for (let i of self.options) {
    msg += i + '\n'
  }
  const answer = prompt(msg)
  if (checkValid(answer)) {
    increseVote(answer)
  }
}

const voting = function (vote) {
  this.numberOfVotes[vote]++
  console.log(this.numberOfVotes)
  displayResults()
}

const increseVote = (vote) => {
  voting.call(poll, vote)
}

const displayResults = () => {
  const type = prompt('Choose type to display! (string/array)')
  console.log(type)
  console.log(type.toLowerCase())
  if (
    !type ||
    (type.toLowerCase() !== 'string' && type.toLowerCase() !== 'array')
  ) {
    alert('Invalid input')
    return
  } else if (type === 'array') {
    console.log(`[${poll.numberOfVotes}]`)
    resultEl.textContent = `[${poll.numberOfVotes}]`
  } else {
    console.log(`Poll results are ${poll.numberOfVotes}`)
    resultEl.textContent = `Poll results are ${poll.numberOfVotes}`
  }
}

const handleClickBtn = () => {
  register.call(poll)
}

const checkValid = (answer) => {
  if (!answer) {
    alert('Please input!')
    return false
  }
  const ansNumber = Number(answer)

  if (isNaN(ansNumber) || ansNumber > 3 || ansNumber < 0) {
    alert('Invalid input!')
    return false
  }
  return true
}

btnSubmit.addEventListener('click', handleClickBtn)
