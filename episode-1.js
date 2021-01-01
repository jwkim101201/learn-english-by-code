// Episode 1. English for Searching (Not Talking)

let sentence = []

if (thinking('깃 사용법')) {
  sentence.push('How to') // = 어떻게
  sentence.push('use') // = 사용하다
  sentence.push('Git') // = 깃

  then(...sentence) // = 어떻게 깃을 사용합니까?
}

function thinking (think) {
  return true
}

function then (subject, verb, object) {
    console.log(`${subject} ${verb} ${object}`)
}
