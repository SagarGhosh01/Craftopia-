// Function to submit form
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subscribe = document.getElementById('subscribe').checked;

    if (name && email) {
        alert(`Thank you ${name} for submitting the form!`);
        if (subscribe) {
            alert(`You are subscribed to the newsletter!`);
        }
    } else {
        alert("Please fill in all fields.");
    }
}
