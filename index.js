console.log("Direcbook");

// id, full name, phone, email, address
const contactsData = [
  {
    id: 1,
    fullName: "Warren Edward Buffett",
    phone: "081454423694",
    email: "warrenbuffett@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1930, 7, 30),
  },
  {
    id: 2,
    fullName: "Larry Elison",
    phone: "081006330738",
    email: "lefoundation@outlook.com",
    address: "The Bronx, New York City, USA",
    birthdate: new Date(1944, 7, 17),
  },
  {
    id: 3,
    fullName: "Charles Thomas Munger",
    phone: "081837956124",
    email: "charliemunger@bhhsservice.com",
    address: "Omaha, Nebraska, USA",
    birthdate: new Date(1924, 0, 1),
  },
];

// console.log(contactsData);

function calculateAge(yearBirthdate) {
  const currentYear = 2025;

  if (typeof yearBirthdate == "object") {
    const getYearDate = yearBirthdate.getFullYear();
    const age = currentYear - getYearDate;
    return age;
  } else {
    const age = currentYear - yearBirthdate;
    return age;
  }
}

calculateAge(contactsData[1].birthdate);
calculateAge(1999); // 26

// CRUD

// function addContact(id, fullName, phone, email, address){

// }

function showContacts(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    const age = calculateAge(contactsData[i].birthdate);

    console.log(
      `👤 ${contacts[i].fullName} | 📞 ${contacts[i].phone} | 📧 ${contacts[i].email} | 📍 ${contacts[i].address} | 🎂 ${age}`
    );
  }
}

showContacts(contactsData);
