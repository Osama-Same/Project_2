// add the following script tag in the head tag
//  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

// create header element with a class
const header = $(`<h1 class="class1" > Hello World </h1>`);

// select the body
const body = $(`body`);

// add the header to the body 
body.append(header);

// change the text, color of the header
header.text("Hello");
header.css('color', 'red')
// remove the class
header.removeClass('class1')

// create an input and a button then add them to the body
const input = $(`<input type="text"/>`);
const button = $(`<button> Add </button>`);
body.append(input, button);

// add a click event listener to the button
button.on("click", function () {
  // log the value of the input
  console.log(input.val());
});

const people = [
  {
    name: "John",
    age: 24,
  },
  {
    name: "John1",
    age: 25,
  },
  {
    name: "John2",
    age: 26,
  },
  {
    name: "John3",
    age: 27,
  },
];

// create a new ult element and add it to the body
const ul = $(`<ul></ul>`);
body.append(ul);

// iterate over the people array 
people.forEach(function (person) {
  // create an li item
  const li = $(`<li>${person.name} is ${person.age} years old</li>`);
  // append the li to the ul
  ul.append(li);
});
