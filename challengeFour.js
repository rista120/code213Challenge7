let str = "august";
let ourMonth = str.toUpperCase();

let seasons = {
  winter: ["DECEMBER", "JANUARY", "FEBRUARY"],
  spring: ["MARCH", "APRIL", "May"],
  summer: ["JUNE", "JULY", "AUGUST"],
  fall: ["SEPTEMBER", "OCTOBER", "NOVEMBER"],
};

let arr = [];

for (let season in seasons) {
  if (seasons[season].includes(ourMonth)) {
    arr.push(season);
  }
}

if (arr.length > 0) {
  console.log("we are in the " + arr[0]);
} else {
  console.log("The words you entered may be incorrect");
}
