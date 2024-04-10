const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0)
};
const btnSubmit = document.getElementById('btn-submit');

const register = function () {
  const self = this;
  let msg = self.question + '\n';
  for (let i of self.options) {
    msg += i + '\n';
  }
  console.log(msg);
  let answer = prompt(msg);
  if (checkValid(answer)) {
    console.log(answer);
  }
};
const handleClickBtn = () => {
  register.call(poll);
};

const checkValid = (answer) => {
  if (!answer) {
    alert('Please input!');
    return false;
  }

  answer = Number(answer)
  if (answer.isNaN()) return false

  return true;
};

btnSubmit.addEventListener('click', handleClickBtn);
