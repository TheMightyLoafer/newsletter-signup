const formInnerContent = document.getElementById('form-container');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  let emailValue = document.getElementById('email-address');

  if (!isValidEmail(emailValue.value)) {
    const errormsg = document.querySelector('.email');
    errormsg.innerHTML = `<p class="error-message">Please enter a valid email address</p>`;

    // Prevent default form submission
    event.preventDefault();

    // Focus the input field to encourage re-entry
    emailInput.focus();
    return; // Prevent further processing in the function
  }

  formInnerContent.innerHTML = `
  <picture class="form-img">
        <source media="(min-width: 500px)" srcset="/assets/images/illustration-sign-up-desktop.svg">
        <img src="/assets/images/illustration-sign-up-mobile.svg" alt="Sign up illustration">
      </picture>
  <div class="success-message" id="form-content">
    <div><img src="/assets/images/icon-success.svg" alt="success icon"></div>
    <h1>Thanks for Subscribing!</h1>
    <p>A confirmation email has been sent to <span class="bold">${emailValue.value}</span></p>
    <p>Please open it and click the button inside to confirm your subscription.</p>

    <input type="submit" class="submit-btn" id="dismiss-btn" value="Dismiss message">
  `;

  // Add the 'success-message' class to formInnerContent

  const dismissBtn = document.getElementById('dismiss-btn'); // Re-fetch the dismiss button after updating the form content
  dismissBtn.addEventListener('click', refreshPage); // Attach the event handler now

  function refreshPage() {
    location.reload();
  }
});

function isValidEmail(email) {
    // Check if the email is a string
    if (typeof email !== 'string') {
      return false;
    }
  
    // Check for the presence of an @ symbol
    if (!email.includes('@')) {
      return false;
    }
  
    // Split the email into local part and domain
    const [localPart, domain] = email.split('@');
  
    // Check the local part
    if (!localPart.match(/^[a-zA-Z0-9._-]+$/)) {
      return false;
    }
  
    // Check the domain
    if (!domain.match(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      return false;
    }

    if (!email) {
        return false;
    }
  
    // If all checks pass, the email is valid
    return true;
  }