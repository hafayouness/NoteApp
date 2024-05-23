const textarea = document.getElementById("text-field");
const Menu = document.querySelector(".menu");
const input = document.getElementById("title");
const input2 = document.getElementById("input2");
const save_btn = document.getElementById("submit");
const color_red = document.getElementById("red");
const color_green = document.getElementById("green");
const color_purple = document.getElementById("purple");
const color_blue = document.getElementById("blue");
const category1 = document.getElementById("s1");
const category2 = document.getElementById("s2");
const category3 = document.getElementById("s3");
const notepad = document.querySelector(".notepad");
const add_btn = document.querySelector(".add-note");

let message_text = "Note saved sucessfully";
let appendNote = document.createElement("div");
notepad.appendChild(appendNote);
let applist = document.createElement("div");
let cat1 = "Design";
let cat2 = "Networing";
let cat3 = "Student";
const date = new Date(); // getting today's date;

const day = date.getDate(); //getting today full date with getDate function
const month = date.getMonth() + 1; //getting today full month with getmonth function
const year = date.getFullYear(); //getting current year in full with getFullYear function
// console.log(day, month, year);
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const d = new Date();
let fullMonth = monthNames[d.getMonth()];
console.log(fullMonth + " " + year); //logging fullmonth and year to the console
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day2 = days[date.getDay()];
// console.log(day2);
window.onbeforeunload = function () {
  return true; //prevening the page from loading
};

let tdoo = {
  Header: textarea.value,
  Body: input.value,
  category: input2.value,
  Days: day2 + "" + fullMonth + "" + year,
}; //getting full information from called properties

save_btn.addEventListener("click", () => {
  //save button onclick
  let tdoo = {
    Header: input.value,
    Body: textarea.value,
    category: input2.value,
    Days: day2 + " " + fullMonth + " " + year,
  };
  let appendNote = document.createElement("div");
  notepad.appendChild(appendNote);
  var retrieveData = JSON.parse(localStorage.getItem("Storage")); //localstorage now is getting the setItem of tdoo and parsing to the set "STORAGE"Item of localStorage
  console.log(message_text); //custom note message for saving
  setTimeout(() => {
    console.clear(); //clearing the console
  }, 1000);
  setTimeout(() => {
    localStorage.setItem("Storage", JSON.stringify(tdoo)); //setting localstorage and adding a "Storage" item, stringifying the called tdoo element
    var retrieveData = JSON.parse(localStorage.getItem("Storage")); //localstorage now is getting the setItem of tdoo and parsing to the set "STORAGE"Item of localStorage
    console.log(retrieveData);
    appendNote.innerHTML = ` 
    <div class="notepad">
    <div class="notes">
      <div class="note-title">${tdoo.Body}</div>
      <div class="note-pfx">
        <p class="note-sub"> ${tdoo.Header}</p>
      </div>
      <div class="c5">
        <div class="category">
          <div class="cat" id="categoty">${tdoo.category}</div> 
        </div>
        <div class="date-created">
          <div class="date" id="date"> ${tdoo.Date}</div>
        </div>
      </div> 
      
    </div>
    `;
  }, 2000);
});

window.addEventListener("load", () => {
  textarea.tdoo = tdoo.Body;
  input.tdoo = tdoo.Header;
  input2.tdoo = tdoo.category;

  appendNote.innerHTML = ` 
    <div class="notepad">
    <div class="notes">
      <div class="note-title">${tdoo.Body}</div>
      <div class="note-pfx">
        <p class="note-sub"> ${tdoo.Header}</p>
      </div>
      <div class="c5">
        <div class="category">
          <div class="cat" id="categoty">${tdoo.category}</div> 
        </div>
        <div class="date-created">
          <div class="date" id="date"> ${tdoo.Date}</div>
        </div>
      </div> 
      
    </div>
    `;
});
const add_color = (cname) => {
  const colors = ["red", "green", "blue", " purple"];
  colors.filter((C) => C !== cname).map((C) => textarea.classList.remove("C"));
  textarea.classList.add(cname);
};
color_blue.addEventListener("click", function (event) {
  console.log(event.target);
  add_color("blue");
});
color_green.addEventListener("click", function (event) {
  console.log(event.target);
  add_color("green");
});
color_purple.addEventListener("click", function (event) {
  console.log(event.target);
  add_color("purple");
});
color_red.addEventListener("click", function (event) {
  console.log(event.target);
  add_color("red");
});
category1.addEventListener("click", (e) => {
  console.log(e.target);
  document.getElementById("s1").innerHTML = `${cat1}`;
  input2.value = `${cat1}`;
});
category2.addEventListener("click", (e) => {
  console.log(e.target);
  document.getElementById("s2").innerHTML = `${cat2}`;
  input2.value = `${cat2}`;
});
category3.addEventListener("click", (e) => {
  console.log(e.target);
  document.getElementById("s3").innerHTML = `${cat3}`;

  input2.value = `${cat3}`;
});
// categories button to change the note category
add_btn.addEventListener("click", (e) => {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".drap").style.display = "none";
});
document.getElementById("return").addEventListener("click", function (event) {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".drap").style.display = "block";
});
