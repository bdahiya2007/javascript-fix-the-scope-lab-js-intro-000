var animal = 'dog'

function myAnimal() {
  return animal
}


function yourAnimal() {
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
`theFunk()`
//var funcky= theFunk()

//funcky
//console.log(funcky)
