document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form element
    const form = document.querySelector("form");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get values from form fields
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const company = document.getElementById("company").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phone-number").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Check if any of the fields are empty
      if (!firstName || !lastName || !company || !email || !phoneNumber || !message) {
        alert("All fields are mandatory. Please fill them out.");
        return;
      }
  
      // If all fields are filled, show a success message and reset the form
      alert("Form submitted successfully!");
      form.reset();
    });
  });
  