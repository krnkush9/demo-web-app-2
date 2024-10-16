document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    if (password.length <= 7) {
        return alert("Password length atleast 8 character")
    }
    var data = {};
    data.first_name = firstName
    data.last_name = lastName
    data.email = email
    data.phone_number = phoneNumber
    data.password = password

    console.log(data);

    alert('Form submitted successfully!');
});
