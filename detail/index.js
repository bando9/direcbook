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
    address: { line1, line2, city, region, postalCode, country },
    isFavorited,
    isDeleted,
    socialMedia: { linkedinUrl, websiteUrl },
    createdAt,
    updatedAt,
  } = contact;
  const age = calculateAge(birthdate);

  const tagString = (contact?.tags || [])
    .map((tag) => `<span class="${getColorBadge(tag)}">${tag}</span>`)
    .join(" ");
  const isFavoritedIcon = isFavorited
    ? "/images/icons/favorite-1.svg"
    : "/images/icons/favorite.svg";
  const imageUrl = getFullNameToImage(contact.id);

  const renderFoundContact = `<div class="flex justify-between pb-5">
            <a
              href="/"
              class="hover:bg-card1 rounded-full cursor-pointer h-10 w-10 flex justify-center items-center mb-5"
              ><img src="/images/icons/back.svg"
            /></a>
            <div class="p-3 space-x-3 flex">
              <a
                class=" hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"
                ><img src=${isFavoritedIcon}
              /></a>
              <a
                href="/update-contact/?id=${id}"
                class=" hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"
                ><img src="/images/icons/edit.svg"
              /></a>
              <button
              onclick="deleteContactById(${id})"
                class="hover:bg-card1 p-1 rounded-full cursor-pointer h-7 w-7"
              >
                <img src="/images/icons/trash1.svg" />
              </button>
            </div>
          </div>
          <div class="flex items-center gap-5 border-b border-slate-300 pb-5">
            <img
              src="${imageUrl}"
              class="w-44 h-44 rounded-full"
              alt="profile image"
            />
            <div class="flex flex-col gap-1">
              <h1 class="text-xl font-semibold">${fullName}</h1>
              <p class="text-gray-700 text-sm">${new Date(
                birthdate
              ).toLocaleString("en-UK", {
                dateStyle: "long",
              })} (${age} years)</p>
              <div class="flex flex-wrap gap-2">${tagString}</div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="text-slate-800 font-semibold text-lg">Detail Contact</h2>
            <p class="text-slate-700 text-sm flex gap-1.5 items-center">
            ${email}
              <button
                class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
              >
                <img src="/images/icons/copy.svg" />
              </button>
            </p>
            <p class="text-slate-700 text-sm flex gap-1.5 items-center">
            ${phone}
              <button
                class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
              >
                <img src="/images/icons/copy.svg" />
              </button>
            </p>
            <div class="flex flex-col gap-1">
              <p class="text-slate-700 text-sm gap-1">${line1}</p>
              <p class="text-slate-700 text-sm gap-1">${line2}</p>
              <p class="text-slate-700 text-sm">${city}</p>
              <p class="text-slate-700 text-sm">${region}</p>
              <p class="text-slate-700 text-sm">${postalCode}</p>
              <p class="text-slate-700 text-sm">${country}</p>
            </div>
            <p class="text-slate-700 text-sm flex gap-3 items-center">
              <a href="${linkedinUrl}">${linkedinUrl}</a>
              <button
                class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
              >
                <img src="/images/icons/copy.svg" />
              </button>
            </p>
            <p class="text-slate-700 text-sm flex gap-3 items-center">
              <a href="${websiteUrl}">${websiteUrl}</a>
              <button
                class="hover:bg-card1 p-1 rounded-full cursor-pointer h-6 w-6"
              >
                <img src="/images/icons/copy.svg" />
              </button>
            </p>

            <div>
            <h2 class="text-slate-700 text-sm">Histori:</h2>
            <p class="text-slate-700 text-xs">Last edited. ${new Date(
              updatedAt
            ).toLocaleString("en-UK", {
              dateStyle: "medium",
              timeStyle: "short",
            })}</p>
            <p class="text-slate-700 text-xs">Added contact. ${new Date(
              createdAt
            ).toLocaleString("en-UK", {
              dateStyle: "long",
            })} </p>
            </div>
          </div>`;

  contactDetailElement.innerHTML = renderFoundContact;
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
renderContactById();
