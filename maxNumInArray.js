const maxNumInArray = (array) => {
  const maxNum = Math.max(...array); // used spread operator btw
  console.log(maxNum);
}

maxNumInArray([0,1,2,4,8,16,32,64]);