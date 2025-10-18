console.log("Direcbook");

let contactsData = [
  {
    id: 1,
    fullName: "Warren Edward Buffett",
    phone: "+189241099019",
    email: "warrenbuffett@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1930, 7, 30),
    tags: ["Investor", "Mentor"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/warrenbuffett",
      websiteUrl: "https://www.berkshirehathaway.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    fullName: "Larry Ellison",
    phone: "+181006330738",
    email: "lefoundation@outlook.com",
    address: "The Bronx, New York City, USA",
    birthdate: new Date(1944, 7, 17),
    tags: ["Investor", "Technology"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/larryellison",
      websiteUrl: "https://www.oracle.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    fullName: "Charles Thomas Munger",
    phone: "+181837956124",
    email: "charliemunger@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1924, 0, 1),
    tags: ["Investor", "Philanthropist"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: null,
      websiteUrl: "https://www.berkshirehathaway.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    fullName: "Elon Musk",
    phone: "+181234567890",
    email: "elon@tesla.com",
    address: "Austin, Texas, USA",
    birthdate: new Date(1971, 5, 28),
    tags: ["Technology", "Entrepreneur", "AI"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/elonmusk",
      websiteUrl: "https://x.com/elonmusk",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    fullName: "Jeff Bezos",
    phone: "+181298765432",
    email: "jeff@amazon.com",
    address: "Medina, Washington, USA",
    birthdate: new Date(1964, 0, 12),
    tags: ["Investor", "Technology", "Entrepreneur"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/jeffbezos",
      websiteUrl: "https://www.amazon.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    fullName: "Sam Altman",
    phone: "+181334455667",
    email: "sam@openai.com",
    address: "San Francisco, California, USA",
    birthdate: new Date(1985, 3, 22),
    tags: ["Entrepreneur", "AI", "Investor"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/sama",
      websiteUrl: "https://openai.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    fullName: "Jensen Huang",
    phone: "+181133355577",
    email: "jensen@nvidia.com",
    address: "Tainan, Taiwan / California, USA",
    birthdate: new Date(1963, 1, 17),
    tags: ["Technology", "AI", "GPU"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/jensen-huang",
      websiteUrl: "https://www.nvidia.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    fullName: "Andrew Ng",
    phone: "+181144556677",
    email: "andrew@deeplearning.ai",
    address: "Stanford, California, USA",
    birthdate: new Date(1976, 3, 18),
    tags: ["AI", "Educator", "Entrepreneur"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/andrewyng",
      websiteUrl: "https://www.deeplearning.ai/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    fullName: "Howard Graham Buffett",
    phone: "+1898748734",
    email: "howardbuffett@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1954, 11, 16),
    tags: ["Investor", "Businuss"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/howardbuffett",
      websiteUrl: "https://www.berkshirehathaway.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function showContacts(contacts) {
  contacts.forEach((contact) => showContact(contact));
}

function showContact(contact) {
  const age = calculateAge(contact?.birthdate);
  const tagsString = contact.tags?.join(", ");

  console.log(
    `👤 ${contact.fullName}
    📞 ${contact.phone}
    📧 ${contact?.email || "-"}
    📍 ${contact.address}
    🎂 ${age || "-"}
    🏷️ ${tagsString || "-"}
    ⭐ Favorite: ${contact.isFavorited ? "Yes" : "No"}
    🔗 LinkedIn: ${contact.socialMedia?.linkedinUrl || "-"}
    🌐 Website: ${contact.socialMedia?.websiteUrl || "-"}
    🕒 Created: ${contact.createdAt?.toLocaleString() || "-"}
    📝 Updated: ${contact.updatedAt?.toLocaleString() || "-"}`
  );

  renderSeparator();
}

function calculateAge(yearBirthdate) {
  const currentYear = 2025;

  if (typeof yearBirthdate == "object") {
    const getYearDate = yearBirthdate.getFullYear();
    const age = currentYear - getYearDate;
    return age;
  }

  if (typeof yearBirthdate == "number") {
    const age = currentYear - yearBirthdate;
    return age;
  }

  if (typeof yearBirthdate == "string") {
    const getYearDate = new Date(yearBirthdate).getFullYear();
    const age = currentYear - getYearDate;
    return age;
  }

  return null;
}

function renderSeparator() {
  console.log("============================");
}

function addContact(
  contacts,
  {
    fullName = "Unknown",
    phone = null,
    email = null,
    address = null,
    birthdate = null,
    tags = null,
    isFavorited = false,
    isDeleted = false,
    socialMedia: { linkedinUrl = null, websiteUrl = null },
    createdAt = new Date(),
    updatedAt = new Date(),
  }
) {
  if (checkPhoneAlreadyUsed(phone, contacts)) {
    return;
  }

  const newId = contacts[contacts.length - 1].id + 1;

  const newContact = {
    id: newId,
    fullName,
    phone,
    email,
    address,
    birthdate,
    tags,
    isFavorited,
    isDeleted,
    socialMedia: { linkedinUrl, websiteUrl },
    createdAt,
    updatedAt,
  };

  const updatedContacts = [...contacts, newContact];
  contactsData = updatedContacts;
}

function updateContactById(
  id,
  contacts,
  {
    fullName,
    phone,
    email,
    birthdate,
    isFavorited,
    isDeleted,
    updatedAt,
    socialMedia: { linkedinUrl, websiteUrl },
  }
) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id) {
      const updatedContact = {
        ...contact,
        fullName: fullName ?? contact.fullName,
        phone: phone ?? contact.phone,
        email: email ?? contact.email,
        address: address ?? contact.address,
        birthdate: birthdate ?? contact.birthdate,
        isFavorited: isFavorited ?? contact.isFavorited,
        isDeleted: isDeleted ?? contact.isDeleted,
        socialMedia: {
          linkedinUrl: linkedinUrl ?? contact.socialMedia.linkedinUrl,
          websiteUrl: websiteUrl ?? contact.socialMedia.websiteUrl,
        },
        updatedAt: new Date(),
      };

      return updatedContact;
    } else {
      return contact;
    }
  });

  contactsData = updatedContacts;
}

function addTag(contacts, id, newTag = "Example") {
  // TODO: Add new tag into existing tags
}

function removeTag(contacts, id, tagToRemove = "Example") {
  // TODO: Add new tag into existing tags
}

function deleteContactById(id, contacts) {
  updatedContacts = contacts.filter((item) => item.id !== id);

  contactsData = updatedContacts;
}

function getContactById(id, contacts) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return null;

  return contact;
}

function searchContactsByName(keyword, contacts) {
  return contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
}

function checkPhoneAlreadyUsed(phone, contacts) {
  const phoneNumberFound = contacts.find((item) => item.phone == phone);
  if (phoneNumberFound) {
    console.log(`Phone number already in use.`);
    return true;
  } else {
    return false;
  }
}

function showContactsBirthdayThisMonth(contacts) {
  // TODO: Refactor to use array map
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const thisMonthNumber = new Date().getMonth();

    if (contact.birthdate.getMonth() == thisMonthNumber) {
      console.log(`Happy Birth day ${contact.fullName}!`);
    }
  }
}

function saveData() {
  const stringifiedContactsData = JSON.stringify(contactsData);

  localStorage.setItem("contactsData", stringifiedContactsData);
}

function loadData() {
  const loadedData = localStorage.getItem("contactsData");
  const parsedContactsData = JSON.parse(loadedData);
  return parsedContactsData;
}

function getFullNameToImage(id) {
  const contact = contactsData.find((contact) => contact.id == id);
  const getFullName = contact.fullName.split(" ").join("+");
  const getImage = `https://ui-avatars.com/api/?name=${getFullName}`;
  return getImage;
}

// ---------------------------------------------------------------------
// Run function
// ---------------------------------------------------------------------

// ========= RUN addContact =========
// addContact(contactsData, {
//   fullName: "Bando Mega Kusuma",
//   phone: "+18924109909",
//   address: "Semarang, Jawa Tengah, Indonesia",
//   birthdate: "1999-10-24",
//   socialMedia: {
//     linkedinUrl: "https://www.linkedin.com/in/bando-mega-kusuma",
//   },
// });

// ========= RUN updateContactById =========
// updateContactById(8, contactsData, {
//   fullName: "Toto Sugiri",
//   phone: "089667241563",
//   email: "totosugiri@dciservice.com",
//   address: "Bekasi Regency, Jawa Barat, Indonesia ",
//   birthdate: new Date(1953, 8, 23),
//   tags: ["DCI ", "Data Engineer"],
//   isFavorited: true,
//   isDeleted: false,
//   socialMedia: {
//     websiteUrl: "https://www.instagram.com/dciindonesia",
//   },
// });

// ========= RUN showContacts =========
// showContacts(contactsData);

// ========= RUN showContact =========
// showContact(contactsData[1]);

// ========= RUN deleteContactById =========
// deleteContactById(2, contactsData);

// ========= RUN getContactById =========
// getContactById(2, contactsData);

// ========= RUN savedData =========
// saveData(contactsData);

// ========= RUN loadData =========
// loadData(contactsData);

saveData();
console.log(loadData());
