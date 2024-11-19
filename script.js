document.getElementById('raceForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const age = parseInt(document.getElementById('age').value);
  const registeredEarly = document.getElementById('registration').value === 'yes';

  // Generate a random race number
  let raceNumber = Math.floor(Math.random() * 1000);

  // Add 1000 to race number for early adult registrants
  if (age > 18 && registeredEarly) {
    raceNumber += 1000;
  }

  // Determine race time and message
  let outputMessage = '';
  if (age > 18 && registeredEarly) {
    outputMessage = `Runner ${raceNumber} will race at 9:30 am.`;
  } else if (age > 18 && !registeredEarly) {
    outputMessage = `Runner ${raceNumber} will race at 11:00 am.`;
  } else if (age < 18) {
    outputMessage = `Runner ${raceNumber} will race at 12:30 pm.`;
  } else {
    outputMessage = `Runner ${raceNumber} should see the registration desk.`;
  }

  // Display the result
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = outputMessage;
});
