let Mail = prompt("Login using Email", '');
mail=document.getElementById("mail").value
pas=document.getElementById("pass").value
if (Mail == mail) {

  let pass = prompt('Password Plz', '');

  if (pass == pas) {
    alert( 'Welcome!' );
    window.location.replace("index.html");
  } else if (pass == '' || pass == null) {
    alert( 'Cancelled' );
    window.location.replace("regi.html");
  } else {
    alert( 'Wrong password' );
    window.location.replace("regi.html");
  }

} else if (Mail == '' || Mail == null) {
  alert( 'Cancelled' );
  window.location.replace("regi.html");
} else {
  alert( "Email Not Registered" );
  window.location.replace("regi.html");
}