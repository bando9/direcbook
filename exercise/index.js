let dataContacts = [
  {
    id: 1,
    name: "john doe",
    phone: "+628965424783",
  },
  {
    id: 2,
    name: "samuel",
    phone: "+628939474783",
  },
  {
    id: 1,
    name: "gabriel",
    phone: "+6289834785129",
  },
];

// console.log(dataContacts);

const savedData = JSON.stringify(dataContacts);
localStorage.setItem("dataUserCRM", savedData);

const loadedData = localStorage.getItem("dataUserCRM");
const parseLoadedData = JSON.parse(loadedData);
console.log(parseLoadedData);
