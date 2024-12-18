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
