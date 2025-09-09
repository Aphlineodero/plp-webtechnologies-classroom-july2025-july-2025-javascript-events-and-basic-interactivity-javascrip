// ====================
// Part 1: Event Handling
// ====================

// Click event example
const clickMeBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickMeBtn.addEventListener("click", () => {
  message.textContent = "Button clicked! 🎉";
});


// ====================
// Part 2: Interactive Elements
// ====================

// 1. Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// 3. FAQ Section (Toggle Answer)
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});


// ====================
// Part 3: Form Validation
// ====================
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Regex for email validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  // Validate Name
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Validate Email
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    signupForm.reset();
  }
});
