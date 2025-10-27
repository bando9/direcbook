let initialContacts = [
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
    tags: ["Family"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/warrenbuffett",
      websiteUrl: "https://www.berkshirehathaway.com",
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
    tags: ["Family", "Technology"],
    isFavorited: true,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/larryellison",
      websiteUrl: "https://www.oracle.com",
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
    tags: [],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/jeffbezos",
      websiteUrl: "https://www.amazon.com",
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
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/jensen-huang",
      websiteUrl: "https://www.nvidia.com",
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
    tags: ["Family", "Entrepreneur"],
    isFavorited: false,
    isDeleted: false,
    socialMedia: {
      linkedinUrl: "https://www.linkedin.com/in/howardbuffett",
      websiteUrl: "https://www.berkshirehathaway.com",
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
      websiteUrl: "https://www.tokopedia.com",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function saveInitialContacts() {
  const contactsData = loadContactsData();

  if (contactsData.length === 0) {
    saveContactsData(initialContacts);
  }
}

function renderContacts() {
  const contactElement = document.getElementById("contacts");

  saveInitialContacts();
  let contacts = loadContactsData();

  const showContacts = (contacts) => {
    return `${contacts.map((contact) => renderContact(contact)).join("")}`;
  };

  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q");
  const labelFiltered = searchParams.get("tag");
  const isFavorited = searchParams.get("isFavorited");

  let queryElement = document.getElementById("q");
  queryElement.value = query;

  if (query) {
    const filteredContacts = searchContactsByName(query, contacts);
    contacts = filteredContacts;
    contactElement.innerHTML = showContacts(contacts);
    renderCountContacts("contacts", contacts);
  } else if (labelFiltered) {
    const filteredContacts = filterByTags(labelFiltered, contacts);
    contacts = filteredContacts;
    contactElement.innerHTML = showContacts(contacts);
    renderCountContacts(labelFiltered, contacts);
  } else if (isFavorited) {
    const filteredContacts = filterFavorites(contacts);
    contacts = filteredContacts;
    contactElement.innerHTML = showContacts(contacts);
    renderCountContacts("favorites", contacts);
  } else {
    contactElement.innerHTML = showContacts(contacts);
    renderCountContacts("all contacts", contacts);
  }
}

function renderContact(contact) {
  const imageUrl = getFullNameToImageUrl(contact.id);
  const tagString = (contact?.tags || [])
    .map((tag) => `<span class="${getColorBadge(tag)}">${tag}</span>`)
    .join(" ");
  const isFavoritedIcon = contact.isFavorited
    ? "/images/icons/favorite-1.svg"
    : "/images/icons/favorite.svg";

  return `
  <tr class="group border-b border-slate-300 hover:bg-card2 cursor-pointer" onclick="if(!event.target.closest('button')) window.location='/detail/?id=${contact.id}'">
      <td class="px-4 py-2  flex items-center gap-2 text-sm">
        <img src="${imageUrl}" alt="${contact.fullName}" class="h-10 rounded-full" />
        ${contact.fullName}
      </td>
      <td class="px-4 py-2 text-left text-sm hidden md:table-cell ">${contact.phone}</td>
      <td class="px-4 py-2 text-left text-sm hidden md:table-cell">${contact.email}</td>
      <td class="px-4 py-2 text-left text-sm hidden md:table-cell">
        <div class="flex flex-wrap gap-2">${tagString}</div>
      </td>
      <td class="p-3 space-x-1 group-hover:visible invisible duration-100 ease-in-out hidden md:flex">
        <button onclick="toggleFavorite(${contact.id})" class="text-blue-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src=${isFavoritedIcon} /></button>
        <a href="/update-contact/?id=${contact.id}" class="text-green-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src="/images/icons/edit.svg"/></a>
        <button onclick="deleteContactById(${contact.id})" class="text-red-500 hover:underline hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"><img src="/images/icons/trash1.svg"/></button>
      </td>
  </tr>
  `;
}

function toggleFavorite(id) {
  let contacts = loadContactsData();

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id) {
      const updatedIsFavorited = !contact.isFavorited;
      const updatedContact = {
        ...contact,
        isFavorited: updatedIsFavorited,
      };

      return updatedContact;
    }
    return contact;
  });

  contacts = updatedContacts;

  saveContactsData(updatedContacts);

  renderContacts(contacts);
}

function deleteContactById(id) {
  let contacts = loadContactsData();

  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  contacts = updatedContacts;

  saveContactsData(updatedContacts);

  renderContacts(contacts);
}

function searchContactsByName(keyword, contacts) {
  const updatedContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return updatedContacts;
}

function filterFavorites(contacts) {
  const updatedContacts = contacts.filter((contact) => contact.isFavorited);
  return updatedContacts;
}

// TODO: Rename labels to tags
function filterByTags(tag, contacts) {
  const updatedContacts = contacts.filter((contact) =>
    contact.tags?.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())
  );
  return updatedContacts;
}

function getColorBadge(tag) {
  switch (tag.toLowerCase()) {
    case "family":
      return `inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20`;
    case "entrepreneur":
      return "inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30";
    case "ai":
      return "inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20";
    case "technology":
      return "inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring inset-ring-pink-400/20";
    default:
      return "inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20";
  }
}

function getFullNameToImageUrl(id) {
  const contacts = loadContactsData();

  const contact = contacts.find((contact) => contact.id == id);
  const getFullName = contact.fullName.split(" ").join("+");
  const getImage = `https://ui-avatars.com/api/?name=${getFullName}&background=random`;
  return getImage;
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
  initialContacts = updatedContacts;
}

function getContactById(id, contacts) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return null;

  renderContact(contact);
}

// TODO: Rename to quantity
function renderCountContacts(keyword, contacts) {
  const countContactsElement = document.getElementById("count-contacts");
  countContactsElement.innerHTML = `${keyword} (${contacts.length})`;
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

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

menuClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

renderContacts();
