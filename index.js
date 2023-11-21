document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('acceptTerms').checked;

    if (!acceptTerms) {
        alert('Please accept the terms and conditions.');
        return;
    }

    var table = document.getElementById('registrationTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = dob;
    cell5.innerHTML = acceptTerms ? 'Yes' : 'No';

    document.getElementById('registrationForm').reset();
});