let dataContacts = [
  {
    id: 1,
    name: "john doe",
    phone: "+628965424783",
  },
  {
    id: 2,
    name: "samuel christ",
    phone: "+628939474783",
  },
  {
    id: 3,
    name: "gabriel jhonson",
    phone: "+6289834785129",
  },
];

// const savedData = JSON.stringify(dataContacts);
// localStorage.setItem("dataUserCRM", savedData);

// const loadedData = localStorage.getItem("dataUserCRM");
// const parseLoadedData = JSON.parse(loadedData);
// console.log(parseLoadedData);

// const insertName = (callback) => {
//   const name = "Alpaca";
//   callback(name);
// };

// insertName(function (name) {
//   console.log(`My name is ${name}`);
// });

const exampleAPI = `https://jsonplaceholder.typicode.com/todos`;

const getDataAPI = async () => {
  try {
    const response = await fetch(exampleAPI);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("errors: ", err);
  }
};

getDataAPI();
