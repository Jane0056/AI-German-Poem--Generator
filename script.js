// Function to display German Poem
function showPeom(response) {
  let germanPoetry = response.data.answer; // Extract the poem fact from the API response
  let outputDiv = document.querySelector("#output");

  // Use Typewriter effect to display the fact dynamically
  new Typewriter(outputDiv, {
    strings: [peom], // Display the peom text
    autoStart: true, // Start typing immediately
    cursor: "", // Remove the cursor effect
    delay: 50, // Typing speed
    deleteSpeed: 100, // Speed of deleting each character (smaller number = faster)
  });
}
// Enable the submit button
let submitButton = document.querySelector("#submit-btn");
submitButton.removeAttribute("disabled");

function showDefaultPoemInfo() {
  let germanPoetryInfo = `Die deutsche Poesie ist eine zeitlose Kunstform, die für ihre Tiefe, Schönheit und kraftvolle emotionale Ausdruckskraft gefeiert wird.<br />
    Von den romantischen Versen Johann Wolfgang von Goethes und Friedrich Schillers bis hin zu den modernen Reflexionen Rainer Maria Rilkes haben deutsche Dichter einen unauslöschlichen Eindruck in der Weltliteratur hinterlassen.<br />
    Themen wie Liebe, Natur, Philosophie und die menschliche Existenz schwingen in ihren Worten mit und verbinden Kulturen sowie Generationen.<br />
    Erlebe die Schönheit der deutschen Poesie und tauche ein in eine Welt voller Inspiration und Fantasie.<br />
    <strong>Entdecke deine Verse mit dem Deutschen Gedichtgenerator</strong>
    `;

  let outputDiv = document.querySelector("#output");

  new Typewriter(outputDiv, {
    strings: [germanPoetryInfo],
    autoStart: true,
    delay: 50,
  });
}
// API setup
function generate(event) {
  event.preventDefault();

  let apiKey = "boc9a5a07045b413df4e1ab63536ctf0";

  let context = `You are an AI poem generator that creates inspiring, 
  captivating and creative German poems. Your task is to generate a 
  unique, poetic 4-line poem that takes the reader into a world full 
  of emotions, imagery and imagination. The poem should be formatted 
  in simple HTML, with each line separated by a <br />.<br />
let the user's themes, instructions and prompts and express the elegance 
and depth of the German language in your verses. Use powerful metaphors,
 melodic rhythms and vivid imagery that touch the heart and inspire the
  soul.<br />
Incorporate romantic, nature-related or philosophical elements when 
appropriate to make the poem even more impressive. Make sure that the
 reader feels carried by the words and immersed in the world of poetry.
 <br />
At the end of each poem, add the following sentence with a charming 
conclusion: 
<strong>German AI Poem Generator - Words that touch the soul</strong>. 
Make the experience unforgettable and unique!`;

  let userInput = document.querySelector("#user-input");

  let prompt = `User instructions: Create a beautiful and inspiring German poem based on the theme: "${userInput.value}". 
  The poem should be 4 lines long, rich in emotion, imagery, and depth. Each line should be separated by a <br />. 
  Use poetic language to evoke strong feelings and create a vivid mental picture. 
  End the poem with the following signature: 
  <strong>German AI Poem Generator – Words that touch the soul</strong>.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${encodeURIComponent(
    context
  )}&prompt=${encodeURIComponent(prompt)}&key=${apiKey}`;

  // Disable the submit button while processing
  submitButton.setAttribute("disabled", "disabled");

  let germanPoetryElement = document.querySelector("#output");
  germanPoetryElement.classList.remove("hidden");
  germanPoetryElement.innerHTML = `<div class="waiting">⏳ Generating beautiful and inspiring German poem about ${userInput.value}...</div>`;

  // API call
  axios
    .get(apiUrl)
    .then(showPeomFact)

    .finally(() => {
      submitButton.removeAttribute("disabled"); // Re-enable the submit button
    });
}

// Add event listener for form submission
let germanPoetryForm = document.querySelector("#poem-generator");
germanPoetryForm.addEventListener("submit", generate);

// Call the showPoem function
showDefaultPoemInfo();
