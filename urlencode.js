function urlEncode(text) {
  let spaceEmp = " ";
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== spaceEmp) {
      newText += text[i];
    } else if (text[i] === spaceEmp && i !== 0 && i !== text.length - 1) {
      newText += "%20"
    }
  }

  return newText;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));