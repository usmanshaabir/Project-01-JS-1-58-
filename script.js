// Clear Output

const clearOutput =() => {
  document.getElementById("output").innerHTML=" ";
}
// login

function login() {
  event.preventDefault();
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("pass").value;

  if (email === "admin@user.com" && password === "123456") {

    // Redirect to the home page
    window.location.href = "./home.html";
  } else {
    Toastify({
      text: "Invalid email or password",
      backgroundColor: "red",
      duration: 3000,
    }).showToast();
  }
}

// Display City list

let cities = ["Faisalabad", "Lahore", "Multan", "Islamabad", "Peshawar"];

for (let i = 0; i < cities.length; i++) {
  document.getElementById("output").innerHTML += cities[i] + " </br>"
}

// Add City Name 

function showTopCities() {
  let newUser = document.getElementById("inputValue").value;
  // if input empty
  if (!newUser) {
    Toastify({
      text: "Plz Enter Your City Name",
      gravity: "top",
      position: "center",
      close: true,
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      duration: 3000,
    }).showToast();
    // in console log
    console.log("Plz Enter Your City Name");
    return
  }
  console.log(newUser);
  newUser = newUser.charAt(0).toUpperCase() + newUser.slice(1);
  let output = "";


  if (cities.includes(newUser)) {

    Toastify({
      text: newUser + " Already Exists in the Array.",
      gravity: "top",
      position: "center",
      close: true,
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      duration: 3000,
    }).showToast();
    // console log
    console.log("already exists in the array.");
  }

  else {
    // localStorage.setItem("nuser", newUser)
    cities.push(newUser);
    for (var i = 0; i < cities.length; i++) {

      output += cities[i] + "<br>";
    }
    // let nu  = localStorage.getItem("nuser");
    document.getElementById("output").innerHTML = output ;

    Toastify({
      text: newUser + " Name Added!",
      gravity: "top",
      position: "center",
      close: true,
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      duration: 3000,
    }).showToast();
    // console log
    console.log(cities);
  }
}











