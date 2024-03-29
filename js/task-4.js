const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue)
    return alert("All form fields must be filled in");

  const userData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData);

  form.reset();
}
