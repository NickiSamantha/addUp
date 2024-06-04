document.getElementById('addButton').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        const sum = number1 + number2;
        document.getElementById('result').textContent = `Sum: ${sum}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers in both fields.';
    }
});
