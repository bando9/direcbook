console.log("Direcbook");

let contactsData = [
  {
    id: 1,
    fullName: "Warren Edward Buffett",
    phone: "081454423694",
    email: "warrenbuffett@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1930, 7, 30),
    tags: ["Investor", "Mentor"],
    isFavorited: true,
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
    phone: "081006330738",
    email: "lefoundation@outlook.com",
    address: "The Bronx, New York City, USA",
    birthdate: new Date(1944, 7, 17),
    tags: ["Investor", "Technology"],
    isFavorited: true,
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
    phone: "081837956124",
    email: "charliemunger@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1924, 0, 1),
    tags: ["Investor", "Philanthropist"],
    isFavorited: false,
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
    phone: "081234567890",
    email: "elon@tesla.com",
    address: "Austin, Texas, USA",
    birthdate: new Date(1971, 5, 28),
    tags: ["Technology", "Entrepreneur", "AI"],
    isFavorited: true,
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
    phone: "081298765432",
    email: "jeff@amazon.com",
    address: "Medina, Washington, USA",
    birthdate: new Date(1964, 0, 12),
    tags: ["Investor", "Technology", "Entrepreneur"],
    isFavorited: false,
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
    phone: "081334455667",
    email: "sam@openai.com",
    address: "San Francisco, California, USA",
    birthdate: new Date(1985, 3, 22),
    tags: ["Entrepreneur", "AI", "Investor"],
    isFavorited: false,
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
    phone: "081133355577",
    email: "jensen@nvidia.com",
    address: "Tainan, Taiwan / California, USA",
    birthdate: new Date(1963, 1, 17),
    tags: ["Technology", "AI", "GPU"],
    isFavorited: true,
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
    phone: "081144556677",
    email: "andrew@deeplearning.ai",
    address: "Stanford, California, USA",
    birthdate: new Date(1976, 3, 18),
    tags: ["AI", "Educator", "Entrepreneur"],
    isFavorited: true,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/andrewyng",
      websiteUrl: "https://www.deeplearning.ai/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

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
}

function addContact({
  fullName,
  phone,
  email,
  address,
  birthdate,
  tags = [],
  isFavorited = false,
  socialLinks = {},
}) {
  const now = new Date();

  const id = 999999999; // TODO: Fix this

  contactsData.push(contactData);
}

function showContacts(contacts) {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const age = calculateAge(contact.birthdate);
    const tagsString = contact.tags?.join(", ");

    console.log(
      `👤 ${contact.fullName} | 📞 ${contact.phone} | 📧 ${
        contact.email
      } | 📍 ${contact.address} | 🎂 ${age} | 🏷️ ${
        tagsString || "-"
      } | ⭐ Favorite: ${
        contact.isFavorited ? "Yes" : "No"
      } | 🔗 linkedinUrl: ${
        contact.socialLinks?.linkedin || "-"
      } | 🌐 websiteUrl: ${contact.socialLinks?.website || "-"} | 🕒 Created: ${
        contact.createdAt?.toLocaleString() || "-"
      } | 📝 Updated: ${contact.updatedAt?.toLocaleString() || "-"}`
    );
  }
}

function deleteContact(id, contacts) {
  contactsData = contacts.filter((item) => item.id !== id);
  return contactsData;
}

function countContacts(contacts) {
  return contacts.length;
}

function checkPhoneAlreadyUsed(phone, contacts) {
  const contactFound = contacts.find((item) => item.phone == phone);
  if (contactFound) {
    console.log(`Phone number already in use.`);
  }
}

function sortByName(contacts) {
  const sortedContactsByName = [];
  for (let index = 0; index < contacts.length; index++) {
    const indexNext = index + 1;
    const greaterThen = contacts[index].fullName > contacts[indexNext].fullName;
    if (greaterThen) {
      sortedContactsByName.push(contacts[index].fullName);
    }
  }

  console.log(sortedContactsByName);
}

function showContactsBirthdayThisMonth(contacts) {
  const thisMonthNumber = new Date().getMonth();

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    if (contact.birthdate.getMonth() == thisMonthNumber) {
      console.log(`Happy Birthday ${contact.fullName}!`);
    }
  }
}

// TODO: Call the functions below
