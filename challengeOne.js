let message = "There is no war in Ba Sing Se";

if (message == "") {
  console.log("There are no words");
} else {
  let words = message.split(" ").length;
  if (words == 1) {
    console.log("There is only one word in this message");
  } else {
    console.log("There are " + words + " words in this message");
  }
}
