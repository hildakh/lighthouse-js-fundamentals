function numberOfVowels(data) {
	let totalVowels = 0;
	for(let i = 0; i < data.length; i++) {
		if(data[i] === "a" || data[i] === "e" || data[i] === "o" || data[i] === "i" || data[i] === "u") {
			totalVowels += 1;
		}
	}
	return totalVowels;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));