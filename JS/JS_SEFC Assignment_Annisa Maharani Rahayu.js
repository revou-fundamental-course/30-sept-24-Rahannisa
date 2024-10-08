document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var temp = parseFloat(document.getElementById('tempInput').value);
    var unit = document.getElementById('tempUnit').value;
    var result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid number!';
    } else {
        if (unit === 'Celsius') {
            var fahrenheit = (temp * 9/5) + 32;
            result = `${temp}° Celsius is ${fahrenheit.toFixed(2)}° Fahrenheit.`;
        } else {
            var celsius = (temp - 32) * 5/9;
            result = `${temp}° Fahrenheit is ${celsius.toFixed(2)}° Celsius.`;
        }
    }
    
    document.getElementById('result').innerText = result;
});
