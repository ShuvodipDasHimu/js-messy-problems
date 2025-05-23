const countVowels = (str) => {
  const newStr = str.split("");
  let counter = 0;
  for(const s of str){
    
    if(s === "a" || s === "A"){
      counter++;
    }
    else if(s === "e" || s === "E")
      {
      counter++;  
      }
      else if(s === "i" || s === "I")
      {
        counter++;
      }
      else if(s === "o" || s === "O"){
        counter++;
      }
      else if(s === "u" || s === "U"){
        counter++;
      }
    }
    return console.log(`There are ${counter} vowels in this string`);
}

countVowels("ELEPHANT");