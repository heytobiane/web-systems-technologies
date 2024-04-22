document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('accountForm');
    const tableBody = document.querySelector('#userTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const roleSelect = document.getElementById('role');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        appendValues(nameInput.value, emailInput.value, roleSelect.value);

        nameInput.value = '';
        emailInput.value = '';
    });

    tableBody.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('edit-btn')) {
            const row = target.closest('tr');
            editRow(row);
        }

        if (target.classList.contains('delete-btn')) {
            const row = target.closest('tr');
            deleteRow(row);
        }
    });
});

function appendValues(name, email, role) {
    const tableBody = document.querySelector('#userTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td class="border p-2">${tableBody.children.length + 1}</td>
        <td class="border p-2">${name}</td>
        <td class="border p-2">${email}</td>
        <td class="border p-2">${role}</td>
        <td class="border p-2">
            <button class="text-blue-500 p-1 edit-btn"><i class="fas fa-edit"></i></button>
            <button class="text-red-500 p-1 delete-btn"><i class="fas fa-trash-alt"></i></button>
        </td>
    `;
    tableBody.appendChild(newRow);
}

function editRow(row) {
    console.log('Edit row function called');
}

function deleteRow(row) {
    console.log('Delete row function called');
}
