const string = (value) => {
  if(typeof value === "string"){
    const newValue = value.split("").reverse().join("");
    console.log(newValue);
  }
  else{
    console.log("bs")
  }
}

string("ahsI Test");