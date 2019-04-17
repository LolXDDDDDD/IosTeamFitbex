
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user-id").style.display = "block";
    document.getElementById("log-id").style.display = "none";

    var user = firebase.auth().curentUser;

    if(user != null)
    {
      email = user.email;
      document.getElementById("usertxt").innerHTML = "Welcome User:" + email;
      document.getElementsByClassName("back_div").style.display = "none";
      document.getElementsByClassName("menu").style.display = "block";
    }
  } else {
    // No user is signed in.
    document.getElementById("user-id").style.display = "none";
    document.getElementById("log-id").style.display = "block";
  }
});
function regist() {
    var userEmail = document.getElementById("RegistEmail").value;
    var userPass = document.getElementById("RegistPass").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : "+ errorMessage);
      });
}
function login(){
  var userEmail = document.getElementById("LoginEmail").value;
  var userPass = document.getElementById("LoginPass").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : "+errorMessage);
  });
}
function logout()
{
    firebase.auth().signOut();
}
// var login = document.getElementById("log-id");
// var register = document.getElementById("regis-id");
// var logbut = document.getElementById("sigin-id");
// var regisbut = document.getElementById("sigup-id");
function signup()
{
  document.getElementById("lefText").innerHTML = "Sign up";
  document.getElementById("regis-id").style.display = "block";
  document.getElementById("log-id").style.display = "none";
  document.getElementById("sigup-id").style.background = "#303958"
  document.getElementById("sigin-id").style.background = "#89bcd7"
}
function signin()
{
  document.getElementById("lefText").innerHTML = "Sign in";
  document.getElementById("regis-id").style.display = "none";
  document.getElementById("log-id").style.display = "block";
  document.getElementById("sigin-id").style.background = "#303958"
  document.getElementById("sigup-id").style.background = "#89bcd7"
}