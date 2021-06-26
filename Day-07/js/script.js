// --------Question 1----------
console.log("Question 1");

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollNo: 12,
};

console.log(Object.keys(student));

console.log("");

// --------Question 2----------

console.log("Question 2");
console.log(student);
delete student.rollNo;
console.log(student);

console.log("");

//   --------Question 3----------

console.log("Question 3");

let len = Object.keys(student);
console.log(len.length);

console.log("");

// --------Question 4----------

console.log("Question 4");

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((item) => {
  if (item.readingStatus) {
    console.log(`Already read ${item.title} by ${item.author}.`);
  } else {
    console.log(`You still need to read ${item.title} by ${item.author}.`);
  }
});

console.log("");

// --------Question 5----------

console.log("Question 5");

function Cylinder(height, diameter) {
  this.height = height;
  this.diameter = diameter;
}

Cylinder.prototype.volume = function () {
  var radius = this.diameter / 2;
  var height = this.height;

  var volume = Math.PI * radius ** 2 * height;
  return volume;
};

let c1 = new Cylinder(3, 3);
console.log(c1.volume());

console.log("");

// --------Question 6----------

console.log("Question 6");

var library2 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library2.sort((first, second) => second.libraryID - first.libraryID);
console.log(library2);
