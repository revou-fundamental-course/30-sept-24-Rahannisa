<script>
  function convertTemp() {
    var temp = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result;

    // Conversion logic
    if (fromUnit === 'C') {
      if (toUnit === 'F') {
        result = (temp * 9/5) + 32 + ' °F';
      } else if (toUnit === 'K') {
        result = temp + 273.15 + ' K';
      } else if (toUnit === 'R') {
        result = temp * 4/5 + ' °R';
      } else {
        result = temp + ' °C';
      }
    } else if (fromUnit === 'F') {
      if (toUnit === 'C') {
        result = (temp - 32) * 5/9 + ' °C';
      } else if (toUnit === 'K') {
        result = (temp - 32) * 5/9 + 273.15 + ' K';
      } else if (toUnit === 'R') {
        result = (temp - 32) * 4/9 + ' °R';
      } else {
        result = temp + ' °F';
      }
    } else if (fromUnit === 'K') {
      if (toUnit === 'C') {
        result = temp - 273.15 + ' °C';
      } else if (toUnit === 'F') {
        result = (temp - 273.15) * 9/5 + 32 + ' °F';
      } else if (toUnit === 'R') {
        result = (temp - 273.15) * 4/5 + ' °R';
      } else {
        result = temp + ' K';
      }
    }

    document.getElementById('result').innerText = 'Result: ' + result;
  }
</script>
