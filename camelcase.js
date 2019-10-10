function camelCase(input) {
	let outPut = "";
	for(let i = 0; i < input.length; i++) {
		if(input[i] === " ") {
			outPut += input[i+1].toUpperCase();
			i++;
		} else {
			outPut += input[i];
		}
	}
	return outPut;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
