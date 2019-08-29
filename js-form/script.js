function submitForm() {

    let infoUser = {};
    infoUser.firstname = document.getElementById('fname').value;
    infoUser.lastname = document.getElementById('lname').value;
    infoUser.age = document.getElementById('age').value;
    infoUser.username = document.getElementById('username').value;
    infoUser.email = document.getElementById('email').value;
    infoUser.password = document.getElementById('password').value;
    infoUser.cpassword = document.getElementById('cpassword').value;
    infoUser.address = document.getElementById('address').value;
    infoUser.city = document.getElementById('city').value;
    infoUser.zip = document.getElementById('zip').value;
    infoUser.phone = document.getElementById('phone').value;
    infoUser.hobbies = document.getElementById('hobbies').value;

    console.log(infoUser);
    event.preventDefault()

    if(infoUser.username.length > 12) {
        document.getElementById('errorUser').innerHTML = "There are max. 12 characters allowed in the username";
        document.getElementById('username').focus();
        return false;
      }

    if(infoUser.password != infoUser.cpassword) {
        document.getElementById('errorUser').innerHTML ="The passwords don't match! Try again.";
        document.getElementById('password').focus();
        return false;
    }
    else {
        location.href = "success.html";
    }
};
