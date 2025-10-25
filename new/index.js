const addContactFormElement = document.getElementById("add-contact-form");

function addContact(event) {
  event.preventDefault();

  const formData = new FormData(addContactFormElement);

  const contacts = loadData();
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0;

  const newContact = {
    id: newId,
    fullName: formData.get("full-name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: {
      line1: formData.get("line1"),
      line2: formData.get("line2"),
      city: formData.get("city"),
      region: formData.get("region"),
      postalcode: formData.get("postal-code"),
      country: formData.get("country"),
    },
    birthdate: formData.get("birthdate"),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  //   console.log(newContact);

  if (!newContact.fullName) return;
  if (!newContact.phone) return;
  if (!newContact.email) return;

  const updatedContacts = [...contacts, newContact];

  saveData(updatedContacts);
  console.log(newContact);
  console.log(updatedContacts);

  //   addContactFormElement.reset();
  goToDashboardPage();
}

addContactFormElement.addEventListener("submit", addContact);
