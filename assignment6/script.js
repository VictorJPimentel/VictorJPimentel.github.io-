const peter = {
  firstName: "Peter",
  lastName: "Smith",
  birthYear: 1990,
  jobTitle: "student",
  score: [100, 99, 90, 96],

  calAvgScore: function () {
    this.avgScore =
      (this.score[0] + this.score[1] + this.score[2] + this.score[3]) /
      this.score.length;
    return this.avgScore;
  },

  calHighestScore: function () {
    this.highestScore = Math.max(...this.score);
    return this.highestScore;
  },

  showSummary: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      ` has completed ` +
      this.score.length +
      ` tasks, and ` +
      this.firstName +
      `'s average score is ` +
      this.calAvgScore() +
      ", " +
      this.firstName +
      `'s highest score is ` +
      this.calHighestScore()
    );
  },
};

console.log(peter.showSummary());

//Question 2
console.log(`Question 2: `);
function CovertCToF(celsius) {
  while (isNaN(celsius)) {
    alert(`Please enter a number`);
    celsius = prompt("Enter the celsius temperature again");
  }
  while (celsius < -88 || celsius > 55) {
    alert(`Please enter a number between -88 and 55.`);
    celsius = Number(prompt("Enter the celsius temperature again:"));
  }
  fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F";`);
  return celsius;
}
CovertCToF(prompt("Enter the celsius temperature"));

// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[1];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("myModal3");
var btn = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[2];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
