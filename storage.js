function saveData(contacts) {
  const stringifiedInitialContacts = JSON.stringify(contacts);
  localStorage.setItem("contactsData", stringifiedInitialContacts);
}

function loadData() {
  const loadedData = localStorage.getItem("contactsData");

  if (!loadedData) {
    saveData([]);
  }

  try {
    const parsedInitialContacts = JSON.parse(loadedData);
    return parsedInitialContacts;
  } catch (err) {
    console.error("Failed to load contacts data.", err);
  }
}

const goToDashboardPage = () => {
  window.location = "/";
};

function goBack() {
  if (document.referrer !== "") {
    return `${window.history.back()}`;
  } else {
    return `${(window.location.href = "/")}`;
  }
}
