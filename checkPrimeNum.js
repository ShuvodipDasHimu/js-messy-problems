function checkPrimeNum(number){

  if(number < 2){
    return console.log(`${number} is not a prime number`);
  }

  for(let i = 2; i<= Math.sqrt(number); i++){
    if(number % i == 0){
      return console.log(`${number} is not a prime number`);
    }
  }
  console.log(`${number} is a prime number`);
}

checkPrimeNum(1);
checkPrimeNum(2);
checkPrimeNum(4);
checkPrimeNum(5);
checkPrimeNum(7);