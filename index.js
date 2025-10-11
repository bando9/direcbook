console.log("Direcbook");

// id, full name, phone, email, address, birthDate, tags, isFavorited, social links, createdAt, updatedAt
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/warrenbuffett",
      website: "https://www.berkshirehathaway.com/",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/larryellison",
      website: "https://www.oracle.com/",
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
    socialLinks: {
      linkedin: null,
      website: "https://www.berkshirehathaway.com/",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/elonmusk",
      website: "https://x.com/elonmusk",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jeffbezos",
      website: "https://www.amazon.com/",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sama",
      website: "https://openai.com/",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jensen-huang",
      website: "https://www.nvidia.com/",
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
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/andrewyng",
      website: "https://www.deeplearning.ai/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
// console.log(contactsData);

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

const timestamp = Date.now();

// CRUD

//* create
function addContact({
  id = timestamp,
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

  return {
    id,
    fullName,
    phone,
    email,
    address,
    birthdate: new Date(birthdate),
    tags,
    isFavorited,
    socialLinks,
    createdAt: now,
    updatedAt: now,
  };
}

let newObject = addContact({
  id: 9,
  fullName: "Bando Mega Kusuma",
  phone: "089241099019",
  email: "example@email.com",
  address: "Semarang, Jawa Tengah, Indonesia",
  birthdate: "1999-10-24",
  tags: ["Family", "Technology", "Investor"],
  isFavorited: true,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/bando-mega-kusuma",
    website: "https://bandomega.com",
  },
});
contactsData.push(newObject);
// console.log(contactsData);

//* Read
function showContact(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    const age = calculateAge(contacts[i].birthdate);
    console.log(
      `👤 ${contacts[i].fullName} | 📞 ${contacts[i].phone} | 📧 ${
        contacts[i].email
      } | 📍 ${contacts[i].address} | 🎂 ${age} | 🏷️ ${
        contacts[i].tags?.join(", ") || "-"
      } | ⭐ Favorite: ${
        contacts[i].isFavorited ? "Yes" : "No"
      } | 🔗 LinkedIn: ${
        contacts[i].socialLinks?.linkedin || "-"
      } | 🌐 Website: ${
        contacts[i].socialLinks?.website || "-"
      } | 🕒 Created: ${
        contacts[i].createdAt?.toLocaleString() || "-"
      } | 📝 Updated: ${contacts[i].updatedAt?.toLocaleString() || "-"}`
    );
  }
}
// showContact(contactsData);

// TODO: updateContact

//** delete contact
function deleteContact(id, contacts) {
  contactsData = contacts.filter((item) => item.id !== id);
  return contactsData;
}
// console.log(deleteContact(2, contactsData));

//** count data contacts
function countContacts(contacts) {
  return contacts.length;
}
const count = countContacts(contactsData);
// console.log(`There is ${count} contacs data.`);

//** has duplicate phone
function hasDuplicatedPhone(phone, contacts) {
  const phoneFinder = contacts.find((item) => item.phone == phone);
  if (phoneFinder) {
    console.log(`Phone number already in use.`);
  }
}
// hasDuplicatedPhone("089241099019", contactsData);

// TODO: Short Contact by Name
function shortByName(contacts) {
  const shortDataByName = [];
  for (let i = 0; i < 5; i++) {
    const j = i + 1;
    const greaterThen = contacts[i].fullName > contacts[j].fullName;
    console.log(greaterThen);
    if (greaterThen) {
      shortDataByName.push(contacts[i].fullName);
    }
    console.log(contacts[i].fullName);
  }

  console.log(shortDataByName);
}
// shortByName(contactsData);

// TODO: Filter Contact by City

// ** show birthdate this month
const monthNow = new Date().getMonth();
function showBirthdateMonth(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].birthdate.getMonth() == monthNow) {
      console.log(`Happy Birth day ${contacts[i].fullName}!`);
    }
  }
}
// showBirthdateMonth(contactsData);

// TODO: Export data contacts to JSON
