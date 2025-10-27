const updateContactElement = document.getElementById("update-contact");

// address: {
//   line1: formData.get("line1"),
//   line2: formData.get("line2"),
//   city: formData.get("city"),
//   region: formData.get("region"),
//   postalcode: formData.get("postal-code"),
//   country: formData.get("country"),
// },
// birthdate: formData.get("birthdate"),

function renderContactById() {
  const contacts = loadData();

  const searchParams = new URLSearchParams(window.location.search);
  const idParams = Number(searchParams.get("id"));

  const contact = contacts.find((contact) => contact.id === idParams);

  document.getElementById("full-name").defaultValue = contact.fullName;
  document.getElementById("email").defaultValue = contact.email;
  document.getElementById("phone").defaultValue = contact.phone;
  document.getElementById("line1").defaultValue = contact.address.line1 ?? "";
  document.getElementById("line2").defaultValue = contact.address.line2 ?? "";
  document.getElementById("city").defaultValue = contact.address.city ?? "";
  document.getElementById("region").defaultValue = contact.address.region ?? "";
  document.getElementById("postal-code").defaultValue =
    contact.address.postalCode ?? "";
  document.getElementById("country").defaultValue =
    contact.address.country ?? "";
  document.getElementById("birthdate").valueAsDate =
    new Date(contact.birthdate) ?? "";

  if (contact.tags) {
    contact.tags.forEach((tag) => {
      const checkbox = document.getElementById(tag.toLowerCase());

      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }
}

function updateContactById(event) {
  event.preventDefault();
  const contacts = loadData();

  const searchParams = new URLSearchParams(window.location.search);
  const idParams = Number(searchParams.get("id"));

  const formData = new FormData(updateContactElement);
  const newBirthdate = new Date(formData.get("birthdate"));

  const tags = [];

  if (formData.get("ai")) tags.push("AI");
  if (formData.get("technology")) tags.push("Technology");
  if (formData.get("entrepreneur")) tags.push("Entrepreneur");
  if (formData.get("family")) tags.push("Family");

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === idParams) {
      const updatedContact = {
        ...contact,
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
        birthdate: newBirthdate.toISOString(),
        updatedAt: new Date(),
      };
      console.log(updatedContact.birthdate);

      return updatedContact;
    }
    return contact;
  });

  saveData(updatedContacts);
  // goToDashboardPage();
}

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

const closeSidebar = () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
};

menuClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

updateContactElement.addEventListener("submit", updateContactById);
renderContactById();
