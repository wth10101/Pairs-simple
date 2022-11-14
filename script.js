const gameGrid = document.getElementById('game')

let numCardsTurned = 0
let firstCardTurned
let score = 0


const fruits = ["apple1","orange1","bannana1","kiwi1","apple2","orange2","bannana2","kiwi2"];
let arr=[0,1,2,3,4,5,6,7]
arr.sort(() => Math.random() - 0.5);
for (let i = 0; i<8; i++){
	const button = document.createElement('button')
	button.id = fruits[arr[i]]
	button.classList.add("card")
	button.value = fruits[arr[i]].substring(0,fruits[arr[i]].length-1)
	button.innerHTML = '<img src="img\\blank.jpg" height=75 />'
	button.addEventListener('click', () => handleClick(button.value, button.id))
	gameGrid.appendChild(button)
}

function handleClick(value, id){
	el = document.getElementById(id)
	if (el.innerHTML.includes("blank")){
		el.innerHTML = '<img src="img\\'+ el.value + '.jpg" height=75 />'
		numCardsTurned++
		if (numCardsTurned == 1){
			firstCardTurned = el
		}
	}else{
		el.innerHTML = '<img src="img\\blank.jpg" height=75 />'
		numCardsTurned--
	}
	if (numCardsTurned == 2){
		if (firstCardTurned.value == value){
			firstCardTurned.removeEventListener("click", handleClick)
			el.removeEventListener("click", handleClick)
			score++
		}else{
			setTimeout(() => { //pause to let the card turn before alert
  			el.innerHTML = '<img src="img\\blank.jpg" height=75 />'
				firstCardTurned.innerHTML = '<img src="img\\blank.jpg" height=75 />'
			}, 500)
			
		}
		numCardsTurned = 0
		if (score == 4){
			clearInterval(timerVar)
			setTimeout(() => { //pause to let the card turn before alert
  			alert(document.getElementById("timer").innerHTML)
				
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
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = minute + ":" + seconds;
        }

