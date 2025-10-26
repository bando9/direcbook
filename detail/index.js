const contactDetailElement = document.getElementById("contact-detail");

function renderContactById() {
  const contacts = loadData();

  contactDetailElement.innerHTML = "";

  const searchParams = new URLSearchParams(window.location.search);
  const idParams = Number(searchParams.get("id"));

  const contact = contacts.find((contact) => contact.id === idParams);

  const contactNotFound = `<div class="flex justify-between pb-5">
            <a
              href="/"
              class="hover:bg-card1 rounded-full cursor-pointer h-10 w-10 flex justify-center items-center mb-5"
              ><img src="/images/icons/back.svg"
            /></a>
          </div>
          <div class="text-semibold">Contact Not Found</div>`;

  if (!contact) {
    contactDetailElement.innerHTML = contactNotFound;
    return null;
  }

  const {
    id,
    fullName,
    email,
    birthdate,
    phone,
    address: {
      line1 = "",
      line2 = "",
      city = "",
      region = "",
      postalCode = "",
      country = "",
    } = {},
    isFavorited,
    isDeleted,
    socialMedia: { linkedinUrl = "", websiteUrl = "" } = {},
    updatedAt,
    createdAt,
  } = contact;
  const age = calculateAge(birthdate);

  const tagString = (contact?.tags || [])
    .map((tag) => `<span class="${getColorBadge(tag)}">${tag}</span>`)
    .join(" ");
  const isFavoritedIcon = isFavorited
    ? "/images/icons/favorite-1.svg"
    : "/images/icons/favorite.svg";
  const imageUrl = getFullNameToImage(contact.id);

  const renderFoundContact = `
      <div class="flex items-center justify-between pb-4">
        <button
          onclick="goBack()"
          class="hover:bg-card1 rounded-full cursor-pointer h-9 w-9 flex justify-center items-center"
        >
          <img src="/images/icons/back.svg" alt="Back" />
        </button>
        <div class="flex items-center gap-2">
          <button onclick="isFavorite(${id})" class="hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7">
            <img src="${isFavoritedIcon}" alt="Favorite" />
          </button>
          <a
            href="/update-contact/?id=${id}"
            class="hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"
          >
            <img src="/images/icons/edit.svg" alt="Edit" />
          </a>
          <button
            onclick="deleteContactById(${id})"
            class="hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"
          >
            <img src="/images/icons/trash1.svg" alt="Delete" />
          </button>
        </div>
      </div>

      
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-slate-300 pb-5"
      >
        <img
          src="${imageUrl}"
          class="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover mx-auto sm:mx-0"
          alt="Profile image"
        />
        <div class="flex flex-col gap-1 text-center sm:text-left">
          <h1 class="text-lg sm:text-xl font-semibold">${fullName}</h1>
          ${
            birthdate
              ? `<p class="text-gray-700 text-sm">${new Date(
                  birthdate
                ).toLocaleString("en-UK", {
                  dateStyle: "long",
                })} (${age} years)</p>`
              : ""
          }
          <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
            ${tagString}
          </div>
        </div>
      </div>

      
      <div class="flex flex-col gap-3 mt-4">
        <h2 class="text-slate-800 font-semibold text-base sm:text-lg">
          Detail Contact
        </h2>

        <p class="text-slate-700 text-sm flex flex-wrap gap-1.5 items-center break-all">
          ${email}
          <button
            class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
          >
            <img src="/images/icons/copy.svg" alt="Copy" />
          </button>
        </p>

        <p class="text-slate-700 text-sm flex flex-wrap gap-1.5 items-center break-all">
          ${phone}
          <button
            class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
          >
            <img src="/images/icons/copy.svg" alt="Copy" />
          </button>
        </p>

        ${
          line1 || line2 || city || region || postalCode || country
            ? `<div class="flex flex-col gap-0.5 text-slate-700 text-sm">
          ${line1 ? `<p>${line1}</p>` : ""}
          ${line2 ? `<p>${line2}</p>` : ""}
          ${city ? `<p>${city}</p>` : ""}
          ${region ? `<p>${region}</p>` : ""}
          ${postalCode ? `<p>${postalCode}</p>` : ""}
          ${country ? `<p>${country}</p>` : ""}
        </div>`
            : ""
        }

        ${
          linkedinUrl
            ? `<p class="text-slate-700 text-sm flex flex-wrap gap-2 items-center break-all">
          <a href="${linkedinUrl}" class="underline text-blue-600">${linkedinUrl}</a>
          <button class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6">
            <img src="/images/icons/copy.svg" alt="Copy" />
          </button>
        </p>`
            : ""
        }

        ${
          websiteUrl
            ? `<p class="text-slate-700 text-sm flex flex-wrap gap-2 items-center break-all">
          <a href="${websiteUrl}" class="underline text-blue-600">${websiteUrl}</a>
          <button class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6">
            <img src="/images/icons/copy.svg" alt="Copy" />
          </button>
        </p>`
            : ""
        }

        <div class="mt-3 text-xs text-slate-600">
          <h3 class="font-medium text-slate-700">Histori:</h3>
          <p>Last edited: ${new Date(updatedAt).toLocaleString("en-UK", {
            dateStyle: "long",
            timeStyle: "short",
          })}</p>
          <p>Added contact: ${new Date(createdAt).toLocaleString("en-UK", {
            dateStyle: "long",
          })}</p>
        </div>
      </div>`;

  contactDetailElement.innerHTML = renderFoundContact;
}

function isFavorite(id) {
  let contacts = loadData();

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

  saveData(updatedContacts);

  renderContactById();
}

function deleteContactById(id) {
  let contacts = loadData();

  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  contacts = updatedContacts;

  saveData(updatedContacts);

  goToDashboardPage();
}

function getFullNameToImage(id) {
  const contacts = loadData();

  const contact = contacts.find((contact) => contact.id == id);
  const getFullName = contact.fullName.split(" ").join("+");
  const getImage = `https://ui-avatars.com/api/?name=${getFullName}&background=random`;
  return getImage;
}

function getColorBadge(tag) {
  switch (tag.toLowerCase()) {
    case "family":
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

renderContactById();
