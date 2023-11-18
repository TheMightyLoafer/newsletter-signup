const formInnerContent = document.getElementById('form-content')
const submitBtn = document.getElementById('submit-btn')


submitBtn.addEventListener('click', () => {
    let emailValue = document.getElementById('email-address')

    if (!emailValue.value) {
        return // the email field is empty, do nothing
    }

    formInnerContent.innerHTML = `
    <h1>Thanks for Subscribing!</h1>
    <p>A confirmation email has been sent to ${emailValue.value}</p>
    <p>Please open it and click the button inside to confirm your subscription.</p>`
})