function toggleNavigation() {
  const x = document.getElementById("show");

  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}

// submitting form
let contactForm = document.getElementById("contact-us-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // handle submit
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let message = document.getElementById("message").value;

  // Gender selection
  let genderValues = document.getElementsByName("gender");
  let gender = Array.from(genderValues).find((radio) => radio.checked).value;

  // Create an object of response
  let formData = { firstName, lastName, gender, email, phoneNumber, message };
 alert("we shall get back to you as soon as possible.")
 alert("Your data hass been submitted")
 

 contactForm.action="/index.html"

// Clear all data
//  let allDataInputs = document.querySelectorAll("inputs")
//  let allDataMessage = document.querySelectorAll("textarea")
 
//  allDataInputs.value = 

 contactForm.reset();

});
