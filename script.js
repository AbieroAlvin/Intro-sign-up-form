const form = document.querySelector("#form");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  element.classList.add("error-text");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");

  if (element !== email) {
    element.value = "";
  } else {
    element.style.color = "hsl(0, 100%, 74%)";
  }
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  element.classList.remove("error-text");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  let emailReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return emailReg.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstName = fname.value.trim();
  const lastName = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstName === "") {
    setError(fname, "First Name is required");
  } else {
    setSuccess(fname);
  }
  if (lastName === "") {
    setError(lname, "Last Name is required");
  } else {
    setSuccess(lname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character");
  } else {
    setSuccess(password);
  }
};
