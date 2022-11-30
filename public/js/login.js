const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {

  event.preventDefault();

  console.log("Signup Button Clicked!");

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(JSON.stringify({ name, email, password }));

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/register');
    } else {
      alert(response.statusText);
    }
  }
};

// var signupButton = document.querySelector('.signup-button')
// var registerContainer = document.querySelector('.register-container')

// signupButton.addEventListener("click", function() {
//   registerContainer.style.display = "flex"
// })

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
