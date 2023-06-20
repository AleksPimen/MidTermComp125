// Function to copy values from Entry 1 to Entry 2
function copyValues() {
  // Get values from Entry 1 fields
  const firstName1 = document.getElementById("firstName1").value;
  const lastName1 = document.getElementById("lastName1").value;
  const address1 = document.getElementById("address1").value;
  const gender1 = document.getElementById("gender1").value;
  const phone1 = document.getElementById("phone1").value;
  const year1 = document.getElementById("year1").value;

  // Set values in Entry 2 fields
  document.getElementById("firstName2").value = firstName1;
  document.getElementById("lastName2").value = lastName1;
  document.getElementById("address2").value = address1;
  document.getElementById("gender2").value = gender1;
  document.getElementById("phone2").value = phone1;
  document.getElementById("year2").value = year1;
}

// Event listener for checkbox change
document.getElementById("sameAsEntry1").addEventListener("change", function() {
  // Checks if the checkbox is checked
  if (this.checked) {
    // Copy values from Entry 1 to Entry 2
    copyValues();
  }
});

// Get the form and input fields
const form = document.getElementById("entryForm");
const inputs = form.getElementsByTagName("input");

// Add event listener to the form for submit event
form.addEventListener("submit", function() {
  // Go through each input field
  for (let i = 0; i < inputs.length; i++) {
    // Checks if the input is invalid
    if (!inputs[i].checkValidity()) {
      // Prints message if the field is empty
      inputs[i].setCustomValidity("Please fill out this field.");
    } else {
      // Clear the custom validation message for valid fields
      inputs[i].setCustomValidity("");
    }
  }
});
// Function to reset the form after submission
function resetForm() {
  // Comand to reset the form fields
  form.reset();
}
// When the form is submitted the resetForm() method is called to reset the form fields
form.addEventListener("submit", resetForm);
