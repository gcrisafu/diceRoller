function rollDice(){
const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const diceValues = [];
const images = [];

for(i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    diceValues.push(value);
    images.push(`<img src="dice_images/${value}.png" alt = "dice ${value}">`)
}

diceResult.textContent = `Dice: ${diceValues.join(', ')}`;
diceImages.innerHTML = images.join('');



}