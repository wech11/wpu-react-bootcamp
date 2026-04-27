// function showGreeting(message) {
//   return `${message}`;
// }

const showGreeting = function (message) {           // anonymous function
  return message;
};

const greeting = showGreeting("Selamat pagi!");         

// function showGreeting(message) {         // jika variablenya dibikin terlebih dahulu maka akan error
//   return message;                        // karena const harus dideklarasikan sebelum dipanggil
// }

console.log(greeting);