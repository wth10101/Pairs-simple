const gameGrid = document.getElementById('game')
const fruits = ["apple1","orange1","bannana1","kiwi1","apple2","orange2","bannana2","kiwi2"];
let numCardsTurned = 0
let firstCardTurned
let score = 0
loadCards()

function loadCards(){
	let arr=[0,1,2,3,4,5,6,7]
	arr.sort(() => Math.random() - 0.5);
	for (let i = 0; i<8; i++){
		const card = document.createElement('img')
		card.id = fruits[arr[i]]
		card.classList.add("card")
		card.value = fruits[arr[i]].substring(0,fruits[arr[i]].length-1)
		card.src = "img\\blank.jpg"
		card.addEventListener('click', () => handleClick(card.value, card.id))
		gameGrid.appendChild(card)
	}
}

function handleClick(value, id){
	//console.log(value + " " + id)
	el = document.getElementById(id)
	if (el.src.includes("blank")){ // turn card to image
		el.src = 'img\\'+ el.value + '.jpg'
		numCardsTurned++
		if (numCardsTurned == 1){
			firstCardTurned = el
		}
	}else{ //turn card to blank
		el.src = 'img\\blank.jpg'
		el.style.height = '100px';
		numCardsTurned--
	}
	
	if (numCardsTurned == 2){ // check for match
		if (firstCardTurned.value == value){
			firstCardTurned.removeEventListener("click", () =>handleClick(firstCardTurned.value, firstCardTurned.id))
			el.removeEventListener("click", () => handleClick(el.value, el.id))
			score++
		}else{
			setTimeout(() => { //pause to let the card turn before alert
  			el.src = "img\\blank.jpg"
				firstCardTurned.src = "img\\blank.jpg"
			}, 500)		
		}
		numCardsTurned = 0
		if (score == 4){
			clearInterval(timerVar)
			setTimeout(() => { //pause so card turns before alert
  			alert(document.getElementById("timer").innerHTML);
			resetGame();
			}, 100)	
		}
	}
}

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = minute + ":" + seconds;
        }

var el = document.getElementById("reset-btn");
el.addEventListener('click', () => {
	resetGame();
})

function resetGame(){
	const elements = document.getElementsByClassName("card");
	while(elements.length > 0){
		elements[0].parentNode.removeChild(elements[0]);
	}
	score = 0
	totalSeconds = 0;
	clearInterval(timerVar)
	timerVar = setInterval(countTimer, 1000);
	loadCards()
}