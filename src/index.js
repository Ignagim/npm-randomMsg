const messages = [
  "Igna",
  "Nico",
  "Emi",
  "Lucy",
  "Maria",
  "Carlos",
  "Octa",
  "Nacho",
  "Tomas",
  "Sofia",
  "Laura",
  "Claudia",
  "Bruno"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};