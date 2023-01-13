const suspectsArray = [
  {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 24,
  description: "skinny",
  image: "upstanding",
  color: "white"
},
{
  firstName: 'Josh',
  lastName: 'Rodriguez',
  occupation: 'Painter',
  age: 31,
  description: "heavy",
  image: "thug",
  color: "brown"
},
{
  firstName: 'James',
  lastName: 'Milner',
  occupation: 'Welder',
  age: 37,
  description: "heavy",
  image: "average",
  color: "white"
},
{
  firstName: 'Josh',
  lastName: 'Rodriguez',
  occupation: 'Painter',
  age: 31,
  description: "heavy",
  image: "thug",
  color: "brown"
},
{
  firstName: 'Marcus',
  lastName: 'Downs',
  occupation: 'Football',
  age: 25,
  description: "muscular",
  image: "upstanding",
  color: "black"
},
{
  firstName: 'Mark',
  lastName: 'White',
  occupation: 'Gangster',
  age: 28,
  description: "heavy",
  image: "thug",
  color: "white"
},  
];

// Rooms Array

const roomsArray = [{ name: "Dining Room" },
{ name: "Conservatory" },
{ name: "Kitchen" },
{ name: "Study" },
{ name: "Library" },
{ name: "Billiard Room" },
{ name: "Lounge" },
{ name: "Ballroom" },
{ name: "Hall" },
{ name: "Spa" },
{ name: "Living Room" },
{ name: "Observatory" },
{ name: "Theater" },
{ name: "Guest House" },
{ name: "Patio" },
];

// Weapons Array

const weaponsArray = [ { name: "rope", weight: 10, },
{ name: "knife", weight: 8, },
{ name: "candlestick", weight: 2, },
{ name: "dumbell", weight: 30, },
{ name: "poison", weight: 2, },
{ name: "axe", weight: 15, },
{ name: "bat", weight: 13, },
{ name: "trophy", weight: 25, },
{ name: "pistol", weight: 20, },
];



// ITERATION 2

function selectRandom(array) {
const randomElement = array[Math.floor(Math.random() * array.length)];
return randomElement
}

function pickMystery() {
const randomSuspect = selectRandom(suspectsArray);
const randomWeapon = selectRandom(weaponsArray);
const randomRoom = selectRandom(roomsArray);

return {suspect: randomSuspect, weapon: randomWeapon, room: randomRoom};
}


// ITERATION 3

function revealMystery(envelope) {
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`

}

console.log(revealMystery(pickMystery()));
