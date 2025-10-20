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

const contactsElement = document.getElementById("contacts");

function renderContacts(contacts) {
  contactsElement.innerHTML = `${contacts
    .map((contact) => renderContact(contact))
    .join("")}`;
}

function renderContact(contact) {
  const imageUrl = getFullNameToImage(contact.id);

  // const age = calculateAge(contact?.birthdate);
  // const tagsString = contact.tags?.join(", ");
  // console.log(
  //   `👤 ${contact.fullName}
  //   📍 ${contact.address || "-"}
  //   🎂 ${age || "-"}
  //   🏷️ ${tagsString || "-"}
  //   ⭐ Favorite: ${contact.isFavorited ? "Yes" : "No"}
  //   🔗 LinkedIn: ${contact.socialMedia?.linkedinUrl || "-"}
  //   🌐 Website: ${contact.socialMedia?.websiteUrl || "-"}
  //   🕒 Created: ${contact.createdAt?.toLocaleString() || "-"}
  //   📝 Updated: ${contact.updatedAt?.toLocaleString() || "-"}`
  // );

  return `
  <li class="grid grid-cols-12 gap-2 items-center p-3 bg-card2 rounded-xl">
    <img src=${imageUrl} alt="" class="h-9 rounded-full" />
    <p class="text-md col-span-4">${contact.fullName}</p>
    <p class="text-md col-span-4">${contact.email}</p>
    <p class="text-md col-span-2">${contact.phone}</p>
  </li>`;
}

function calculateAge(yearBirthdate) {
  const currentYear = new Date().getFullYear();

  if (typeof yearBirthdate == "string") {
    const getYearDate = new Date(yearBirthdate).getFullYear();
    const age = currentYear - getYearDate;
    return age;
  }
  if (typeof yearBirthdate == "object") {
    const getYearDate = yearBirthdate.getFullYear();
    const age = currentYear - getYearDate;
    return age;
  }

  if (typeof yearBirthdate == "number") {
    const age = currentYear - yearBirthdate;
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
    socialMedia: { linkedinUrl, websiteUrl },
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
    socialMedia: {
      linkedinUrl: linkedinUrl ?? null,
      websiteUrl: websiteUrl ?? null,
    },
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
    address,
    birthdate,
    isFavorited,
    isDeleted,
    socialMedia,
    updatedAt = new Date(),
  }
) {
  const { linkedinUrl, websiteUrl } = socialMedia;

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
          linkedinUrl: linkedinUrl ?? contact.socialMedia?.linkedinUrl,
          websiteUrl: websiteUrl ?? contact.socialMedia?.websiteUrl,
        },
        updatedAt,
      };
      return updatedContact;
    }
    return contact;
  });
  contactsData = updatedContacts;
}

function deleteContactById(id, contacts) {
  const updatedContact = contacts.filter((item) => item.id !== id);
  contactsData = updatedContact;
}

function getContactById(id, contacts) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return null;

  renderContact(contact);
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
  contacts.map((contact) => {
    const thisMonthNumber = new Date().getMonth();
    const getMonthContactNumber = contact.birthdate.getMonth();

    if (getMonthContactNumber == thisMonthNumber) {
      console.log(`Happy Birth day ${contact.fullName.toUpperCase()}🎉🎂`);
    }
  });
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
  const getImage = `https://ui-avatars.com/api/?name=${getFullName}&background=random`;
  return getImage;
}

// ---------------------------------------------------------------------
// Run function
// ---------------------------------------------------------------------

renderContacts(contactsData);

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
// console.log(contactsData[7]);

// getContactById(8, contactsData);

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

// saveData();
// console.log(loadData());
