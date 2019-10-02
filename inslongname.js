function instructorWithLongestName(instructors) {
  let longestName = "";
  let longestNameArray = [];
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;
      longestNameArray = instructors[i];
    }
  }
  return longestNameArray;

}
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
