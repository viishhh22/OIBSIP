function convertTemperatures() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const resultElement = document.getElementById('result');

    // Get the temperature values from the input fields
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const kelvin = parseFloat(kelvinInput.value);

    if (isNaN(celsius) && isNaN(fahrenheit) && isNaN(kelvin)) {
        resultElement.innerHTML = "Please enter at least one valid temperature.";
        return;
    }

    // Convert Celsius to Fahrenheit and Kelvin
    if (!isNaN(celsius)) {
        const fahrenheitValue = (celsius * 9/5) + 32;
        const kelvinValue = celsius + 273.15;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    }

    // Convert Fahrenheit to Celsius and Kelvin
    if (!isNaN(fahrenheit)) {
        const celsiusValue = (fahrenheit - 32) * 5/9;
        const kelvinValue = (fahrenheit + 459.67) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    }

    // Convert Kelvin to Celsius and Fahrenheit
    if (!isNaN(kelvin)) {
        const celsiusValue = kelvin - 273.15;
        const fahrenheitValue = (kelvin * 9/5) - 459.67;
        celsiusInput.value = celsiusValue.toFixed(2);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }

    resultElement.innerHTML = "Conversion complete.";
}

