let contactsData = [
  {
    id: 1,
    fullName: "Warren Edward Buffett",
    phone: "+12025550123",
    email: "warrenbuffett@bhhsservice.com",
    address: {
      line1: "3555 Farnam Street",
      line2: "",
      city: "Omaha",
      region: "Nebraska",
      postalCode: "68131",
      country: "USA",
    },
    birthdate: new Date(1930, 7, 30),
    tags: ["Investor"],
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
    address: {
      line1: "100 Oracle Parkway",
      line2: "",
      city: "Redwood City",
      region: "California",
      postalCode: "94065",
      country: "USA",
    },
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
    fullName: "Elon Musk",
    phone: "+181234567890",
    email: "elon@tesla.com",
    address: {
      line1: "1 Tesla Road",
      line2: "",
      city: "Austin",
      region: "Texas",
      postalCode: "78725",
      country: "USA",
    },
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
    id: 4,
    fullName: "Jeff Bezos",
    phone: "+181298765432",
    email: "jeff@amazon.com",
    address: {
      line1: "2125 5th Avenue",
      line2: "",
      city: "Seattle",
      region: "Washington",
      postalCode: "98121",
      country: "USA",
    },
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
    id: 5,
    fullName: "Jensen Huang",
    phone: "+181133355577",
    email: "jensen@nvidia.com",
    address: {
      line1: "2788 San Tomas Expressway",
      line2: "",
      city: "Santa Clara",
      region: "California",
      postalCode: "95051",
      country: "USA",
    },
    birthdate: new Date(1963, 1, 17),
    tags: ["Technology", "AI"],
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
    id: 6,
    fullName: "Howard Graham Buffett",
    phone: "+1898748734",
    email: "howardbuffett@bhhsservice.com",
    address: {
      line1: "3555 Farnam Street",
      line2: "",
      city: "Omaha",
      region: "Nebraska",
      postalCode: "68131",
      country: "USA",
    },
    birthdate: new Date(1954, 11, 16),
    tags: ["Investor", "Entrepreneur"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/howardbuffett",
      websiteUrl: "https://www.berkshirehathaway.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    fullName: "Toto Sugiri",
    phone: "+628111234567",
    email: "toto@dci-indonesia.co.id",
    address: {
      line1: "Jl. Kapten Soebijanto Djojohadikusumo Blok D",
      line2: "Kawasan Industri Surya Cipta",
      city: "Karawang",
      region: "Jawa Barat",
      postalCode: "41361",
      country: "Indonesia",
    },
    birthdate: new Date(1953, 6, 23),
    tags: ["Technology", "Entrepreneur"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/toto-sugiri",
      websiteUrl: "https://www.dci-indonesia.co.id/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    fullName: "William Tanuwijaya",
    phone: "+6282123456789",
    email: "william@tokopedia.com",
    address: {
      line1: "Jl. Prof. Dr. Satrio Kav 11",
      line2: "Kuningan, Setiabudi",
      city: "Jakarta Selatan",
      region: "DKI Jakarta",
      postalCode: "12950",
      country: "Indonesia",
    },
    birthdate: new Date(1981, 10, 11),
    tags: ["Technology", "Entrepreneur"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/williamtanuwijaya",
      websiteUrl: "https://www.tokopedia.com/",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function renderContacts(contacts) {
  const contactsElement = document.getElementById("contacts");
  contactsElement.innerHTML = `${contacts
    .map((contact) => renderContact(contact))
    .join("")}`;
}

function renderContact(contact) {
  // const age = calculateAge(contact?.birthdate);
  const imageUrl = getFullNameToImage(contact.id);
  const tagString = contact.tags
    .map((tag) => {
      return `<span class="${getColorBadge(tag)}">${tag}</span>`;
    })
    .join(" ");

  // console.log(
  //   📍 ${contact.address || "-"}
  //   🎂 ${age || "-"}
  //   ⭐ Favorite: ${contact.isFavorited ? "Yes" : "No"}
  //   🔗 LinkedIn: ${contact.socialMedia?.linkedinUrl || "-"}
  //   🌐 Website: ${contact.socialMedia?.websiteUrl || "-"}
  //   🕒 Created: ${contact.createdAt?.toLocaleString() || "-"}
  //   📝 Updated: ${contact.updatedAt?.toLocaleString() || "-"}`
  // );
  // renderSeparator();

  // return `
  // <li class="grid grid-cols-12 gap-2 items-center p-3 bg-card2 rounded-xl">
  //   <img src=${imageUrl} alt="" class="h-9 rounded-full" />
  //   <p class="text-md col-span-4">${contact.fullName}</p>
  //   <p class="text-md col-span-4">${contact.email}</p>
  //   <p class="text-md col-span-2">${contact.phone}</p>
  // </li>`;

  return `
  <tr class="group border-b border-slate-300">
      <td class="px-4 py-2  flex items-center gap-2 text-sm">
        <img src="${imageUrl}" alt="${contact.fullName}" class="h-10 rounded-full" />
        ${contact.fullName}
      </td>
      <td class="px-4 py-2 text-left text-sm">${contact.phone}</td>
      <td class="px-4 py-2 text-left text-sm">${contact.email}</td>
      <td class="px-4 py-2 text-left text-sm">
        <div class="flex flex-wrap gap-2">${tagString}</div>
      </td>
      <td class="p-3 space-x-1 group-hover:visible invisible duration-100 ease-in-out flex">
        <a href="/details" class="text-blue-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src="/images/icons/see.svg"/></a>
        <a href="/update-contact" class="text-green-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src="/images/icons/edit.svg"/></a>
        <button onclick="deleteContactById(contactsData, ${contact.id})" class="text-red-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src="/images/icons/trash1.svg"/></button>
      </td>
  </tr>`;
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

function getColorBadge(tag) {
  switch (tag.toLowerCase()) {
    case "investor":
      return `inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20`;
      break;
    case "entrepreneur":
      return "inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30";
      break;
    case "ai":
      return "inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20";
      break;
    case "technology":
      return "inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring inset-ring-pink-400/20";
      break;
    default:
      return "inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20";
  }
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

  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0;

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

function deleteContactById(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  contactsData = updatedContacts;
  renderContacts(contactsData);
}

function getContactById(id, contacts) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return null;

  renderContact(contact);
}

function searchContactsByName(keyword, contacts) {
  const updatedContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  contactsData = updatedContacts;
  renderContacts(contactsData);
}

function renderCountContacts(contacts) {
  const countContactsElement = document.getElementById("count-contacts");
  countContactsElement.innerHTML = contacts.length;
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

renderContacts(contactsData);
renderCountContacts(contactsData);
