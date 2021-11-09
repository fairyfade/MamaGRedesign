function checkEmail() {
  var elMsg = document.getElementByid('feedback') ; // Get feedback element 
  var elUsername = document.getElementByld('email');// Get username input 
  if (elUsername.value != "@") { / / If email doesnt contain "@" 
    elMsg.textContent'Invalid Email'; // Set msg 
  else { //Otherwise 
    elMsg.textContent = ''; //Clear message 
     
}
function changeTitle(){
  var heading = document.getElementById('interests');
  heading.innerHTML = "Additional Interests";
}

changeTitle();