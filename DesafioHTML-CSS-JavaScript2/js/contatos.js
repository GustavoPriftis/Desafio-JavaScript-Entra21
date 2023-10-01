const contacts = [];

function addContact() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name !== "" && email !== "" && phone !== "") {
        const contact = { name, email, phone };
        contacts.push(contact);

        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";

        displayContacts();
    }
}


function displayContacts() {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editContact(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteContact(${index})">Excluir</button>
            </td>
        `;
        contactList.appendChild(row);
    });
}


function editContact(index) {
    const contact = contacts[index];
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    nameInput.value = contact.name;
    emailInput.value = contact.email;
    phoneInput.value = contact.phone;

    contacts.splice(index, 1);

    displayContacts();
}


function deleteContact(index) {
    
    contacts.splice(index, 1);

    displayContacts();
}


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addContact();
});

displayContacts();