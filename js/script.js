$("#guess_number").click(function() {
    let number = prompt("Яке число від 0 до 5 було загадано?");
    let numberToGuess = Math.floor(Math.random() * 6)
    if (number == numberToGuess) {
        alert("Правильно! Гарна інтуїція")
    } else {
        alert(`Не вгадав! Було загадано число ${numberToGuess}`)
    }
});