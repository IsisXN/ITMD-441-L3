// Conversion rates
const conversionRates = {
    USD: 1,
    INR: 84.07,
    JPY: 149.34
};

// Function to update calculations
function updateCalculations() {
    const billInput = document.getElementById("billTotal").value;
    const tipSlider = document.getElementById("tipSlider").value;
    const currency = document.getElementById("currency").value;

    // Validate bill input (only positive numbers)
    const billTotal = parseFloat(billInput);
    if (isNaN(billTotal) || billTotal <= 0) {
        alert("Please enter a valid positive number for the bill total.");
        return;
    }

    // Update Tip Percentage field
    document.getElementById("tipPercentage").value = `${tipSlider}%`;

    // Calculate tip and total amounts
    const tipAmount = (billTotal * tipSlider / 100).toFixed(2);
    const totalWithTip = (billTotal + parseFloat(tipAmount)).toFixed(2);

    // Apply currency conversion
    const convertedTipAmount = (tipAmount * conversionRates[currency]).toFixed(2);
    const convertedTotal = (totalWithTip * conversionRates[currency]).toFixed(2);

    // Update fields with converted values
    document.getElementById("tipAmount").value = `${convertedTipAmount} ${currency}`;
    document.getElementById("totalWithTip").value = `${convertedTotal} ${currency}`;
}

// Add event listeners
document.getElementById("tipForm").addEventListener("input", updateCalculations);
document.getElementById("tipForm").addEventListener("change", updateCalculations);