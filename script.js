const formInnerContent = document.getElementById('form-container');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    let emailValue = document.getElementById('email-address');

    if (!emailValue.value) {
        return; // the email field is empty, do nothing
    }

    formInnerContent.innerHTML = `
  
    <div><img src="/assets/images/icon-success.svg" alt="success icon"></div>
    <h1>Thanks for Subscribing!</h1>
    <p>A confirmation email has been sent to <span class="bold">${emailValue.value}</span>
    Please open it and click the button inside to confirm your subscription.</p>

    <input type="submit" class="submit-btn" id="dismiss-btn" value="Dismiss message">
  
    `;

    // Add the 'success-message' class to formInnerContent
    formInnerContent.classList.add('success-message');

    const dismissBtn = document.getElementById('dismiss-btn'); // Re-fetch the dismiss button after updating the form content
    dismissBtn.addEventListener('click', refreshPage); // Attach the event handler now

    function refreshPage() {
        location.reload();
    }
});