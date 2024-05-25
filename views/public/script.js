document.getElementById('transactionForm').addEventListener('submit', function(event) {
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;

    if (!type || !amount || isNaN(amount) || amount <= 0) {
        alert('Please enter valid transaction details.');
        event.preventDefault();
    }
});
