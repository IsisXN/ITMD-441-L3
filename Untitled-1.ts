// script.js
document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTipInput = document.getElementById('totalWithTip');

    function calculateTip() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipSlider.value);

        if (isNaN(billAmount) || billAmount < 0) {
            alert("Please enter a valid, positive number for the Bill Total.");
            return;
        }

        tipPercentageInput.value = tipPercentage + '%';
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalWithTip = billAmount + tipAmount;

        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    }

    billAmountInput.addEventListener('input', calculateTip);
    tipSlider.addEventListener('input', calculateTip);
});