function range(start, end, step) {
  let numRange = [];
  if (start !== "undefined" && end !== "undefined" && step !== "undefined" && end > start && 0 < step) {
    for (var i = start; i <= end; i += step) {
      numRange.push(i);
    }
    return numRange;
  } else {
    return [];
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));