let age = 0
let day = 0
// set our variables to 0

document.getElementById('button').addEventListener('click', action)
// connects the button to the function

function action () {
  age = document.getElementById('input1').value
  age = parseInt(age)
  day = document.getElementById('input2').value
  // this will convert the input into an integer so our computer can read it, .value will store our input
  if ((day == 'tuesday' || day == 'thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('answer').innerHTML = 'You are eligilbe for student pricing!'
    // if the day is tuesday or thursday, everyone can get student pricing also, if they are between the age of 12 and 21 they can get student pricing
  } else {
    document.getElementById('answer').innerHTML = 'Sorry, you must pay regular price.'
    // if the input is anything other than tuesday or thursday and they're not between the age of 12 and 21 then they can't get student pricing
  }
}
