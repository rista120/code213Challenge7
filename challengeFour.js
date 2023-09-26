let ourMonth = "August";

let seasons = {
  winter: ["December", "January", "February"],
  spring: ["March", "April", "May"],
  summer: ["June", "July", "August"],
  fall: ["September", "October", "November"],
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
