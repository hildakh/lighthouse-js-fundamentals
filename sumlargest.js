let sumLargestNumbers = function(data) {
	/*for (let i = 0; i < data.length; i++) {
		numOne = Math.max(data[i]);
		data.splice(data.indexOf('numOne'), 1);
	}
	for (let j = 0; j < data.length; j++) {
		numTwo = Math.max(data[j]);

	}
	return numOne+numTwo;
} */     // Didn't work. Sth is wrong  
  let numOne = Math.max(...data);
  data.splice(data.indexOf(numOne), 1);
  let numTwo = Math.max(...data);
  /*let totalLarge = numOne + numTwo; //Optional. Initially created to test a theory
  return totalLarge; */
  return numOne + numTwo;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));