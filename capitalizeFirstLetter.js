function capitalizeFirstLetter(value) {
const capitalize = value.toLowerCase().split(" ").map(word=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');
return capitalize;
}

console.log(capitalizeFirstLetter("my name is himu"));;