// Define an array of correct answers for each level
const answers = ['messi', 'xiaoyuzhoufm', 'chip', 'duolingo','midjourney', 'fairy', 'peardoraemon','nintendo'];
const hints = ['No, think again, the answer is a name.', 'Is the icon familar? You only need its domain', 'When you are indexing, count from 1.', 'Pirated books often make mistakes in spelling.', 'It is very literal, no space.', 'What is her name?', 'fruit(4) + charactername(8), no space', 'Just type it.'];

// Add an event listener to the submit button
document.querySelector('#submit').addEventListener('click', () => {
	// Get the user's answer
	const userAnswer = document.querySelector('#answer').value.toLowerCase();
	const currentLevel = parseInt(document.querySelector('#currentlevel').value);
	// Check if the user's answer matches the correct answer
	if (userAnswer === answers[currentLevel]) {
		window.location.href = answers[currentLevel] + '.html';
	} else {
		// Display a message telling the user to try again
		document.querySelector('#feedback').textContent = hints[currentLevel];
	}
});