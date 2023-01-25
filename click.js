let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorSquare')
console.log(squares)
//forEach
const timesClicked = { 'red': 0, 'green': 0, 'yellow': 0 }
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    //console.log(square.value)
  }
})

//Function for clearing the game
function clearScores(){
  timesClicked['red']=0
  timesClicked['yellow']=0
  timesClicked['green']=0
  squares.forEach(square => square.innerText='')
}
const clearBtn=document.getElementById('clear')
clearBtn.onclick=()=>clearScores()