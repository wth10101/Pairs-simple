const gameGrid = document.getElementById('game')

let arr=[]
while(arr.length < 8){
    var r = Math.floor(Math.random() * 8);
    if(arr.indexOf(r) === -1) arr.push(r);
}

const fruits = ["apple1","orange1","bannana1","kiwi1","apple2","orange2","bannana2","kiwi2"];
for (let i = 0; i<8; i++){
	const button = document.createElement('button')
	button.id = fruits[i]
	button.value = fruits[i].substring(0,fruits[i].length-1)
	button.innerHTML = '<img src="img\\blank.jpg" height=75 />'
	button.addEventListener('click', () => handleClick(button.value, button.id))
	gameGrid.appendChild(button)
}

function handleClick(value, id){
	console.log(`clicked ${value} ${id}`)
	el = document.getElementById(id)
	el.innerHTML = '<img src="img\\'+ el.value + '.jpg" height=75 />'
}

