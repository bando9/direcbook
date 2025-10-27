const addContactFormElement = document.getElementById("add-contact-form");

function addContact(event) {
  event.preventDefault();

  const formData = new FormData(addContactFormElement);

  const contacts = loadContactsData();
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0;

  const tags = [];

  if (formData.get("ai")) tags.push("AI");
  if (formData.get("technology")) tags.push("Technology");
  if (formData.get("entrepreneur")) tags.push("Entrepreneur");
  if (formData.get("family")) tags.push("Family");

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
    tags: tags,
    birthdate: formData.get("birthdate"),
    updatedAt: new Date(),
    createdAt: new Date(),
  };

  if (!newContact.fullName) return;
  if (!newContact.phone) return;
  if (!newContact.email) return;

  const updatedContacts = [...contacts, newContact];

  saveContactsData(updatedContacts);

  goToDashboardPage();
}

addContactFormElement.addEventListener("submit", addContact);

const menuToggleElement = document.getElementById("menu-toggle");
const menuCloseElement = document.getElementById("menu-close");
const sidebarElement = document.getElementById("sidebar");
const overlayElement = document.getElementById("overlay");

menuToggleElement.addEventListener("click", () => {
  sidebarElement.classList.remove("-translate-x-full");
  overlayElement.classList.remove("hidden");
});

const closesidebarElement = () => {
  sidebarElement.classList.add("-translate-x-full");
  overlayElement.classList.add("hidden");
};

menuCloseElement.addEventListener("click", closesidebarElement);
overlayElement.addEventListener("click", closesidebarElement);
