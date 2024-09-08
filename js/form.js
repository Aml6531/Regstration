const firstName = document.getElementById("fn");
const lastName = document.getElementById("ln");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const confirmPassword = document.getElementById("repass");
const phoneNumber = document.getElementById("no.");
const image = document.getElementById("img");

let allData = [];
if (localStorage.getItem("allData") != null) {
  allData = JSON.parse(localStorage.getItem("allData"));
}

// save data
function save() {

  if (validationData() == true) {
    var data = {
      name: firstName.value + " " + lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      phoneNumber: phoneNumber.value,
      image: image.value,
    };

    allData.push(data);
    localStorage.setItem('allData', JSON.stringify(allData));
    clearData();
    alert("Your data saved successfully");
  }

  
}

// clear data after submitting it
function clearData() {
  document.getElementById("fn").value = "";
  document.getElementById("ln").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("repass").value = "";
  document.getElementById("no.").value = "";
  document.getElementById("img").value = "";
}


// check validation and report message if necessary


function validationData() {

    // validation regex
  var firstNameRegex = /^[A-Z][a-z]{2,8}/;
  var lastNameRegex = /^[A-Z][a-z]{2,8}/;
  var emailRegex = /^[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  var passwordRegex = /^[a-zA-z0-9@_#%&*]{8}$/;
  var phoneNumberRegex = /^(02)?01[0125][0-9]{8}$/;
  var imageRegex = /([0-9a-zA-Z\._-]+.(png|PNG|jp[e]?g|JP[E]?G))/;

  if (firstNameRegex.test(firstName.value) == false) {
    return (document.getElementById("fnrgx").innerHTML =
      "name must be 3-8 charaters start with capital letter");
  } else {
    document.getElementById("fnrgx").innerHTML = "";
  }

  if (lastNameRegex.test(lastName.value) == false) {
    return (document.getElementById("lnrgx").innerHTML =
      "name must be 3-8 charaters start with capital letter");
  } else {
    document.getElementById("lnrgx").innerHTML = "";
  }

  if (emailRegex.test(email.value) == false) {
    return (document.getElementById("emailrgx").innerHTML =
      "enter valid email");
  } else {
    document.getElementById("emailrgx").innerHTML = "";
  }
  
  if (passwordRegex.test(password.value) == false) {
    return (document.getElementById("pasrgx").innerHTML =
      "password must be at least 8 characters includes small ,capital letters and special character (_ @ # % & *)");
  } else {
    document.getElementById("pasrgx").innerHTML = "";
  }

  if (confirmPassword.value != password.value) {
    return (document.getElementById("psc").innerHTML =
      "passwords doesn't match");
  } else {
    document.getElementById("psc").innerHTML = "";
  }

  if (phoneNumberRegex.test(phoneNumber.value) == false) {
    return (document.getElementById("norgx").innerHTML =
      "enter a correct phone number");
  } else {
    document.getElementById("norgx").innerHTML = "";
  }

  if (imageRegex.test(image.value) == false) {
    return (document.getElementById("imgrgx").innerHTML =
      "choose a jpg or png image");
  } else {
    document.getElementById("imgrgx").innerHTML = "";
  }
  
  return true;
}
