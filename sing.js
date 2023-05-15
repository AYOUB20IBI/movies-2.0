let signup = {
    "listsignup": []
  };


  
function asignup() {
    let name = document.getElementById('name');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm-password');
  
    let nm = /^[A-Za-z]+$/;
    if (!nm.test(name.value)) {
      name.style.border = '3px solid red';
      return false;
    } else {
      name.style.border = '3px solid green';
    }
  
    let user = /^[A-Za-z]+[0-9]{2,4}$/;
    if (!user.test(username.value)) {
      username.style.border = '3px solid red';
      return false;
    } else {
      username.style.border = '3px solid green';
    }
  
    let em = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]+$/;
    if (!em.test(email.value)) {
      email.style.border = '3px solid red';
      return false;
    } else {
      email.style.border = '3px solid green';
    }
    let pas=/^[A-Za-z0-9]{7}[@$&]?$/
    if (!pas.test(password.value)) {
      password.style.border = '3px solid red';
      return false;
    } else {
      password.style.border = '3px solid green';
    }
  
    if (confirm_password.value === '') {
      confirm_password.style.border = '3px solid red';
      return false;
    } else if (confirm_password.value !== password.value) {
      confirm_password.style.border = '3px solid red';
      alert("Password and confirm password must match.");
      return false;
    } else {
      confirm_password.style.border = '3px solid green';
    }
  
    let signup = JSON.parse(localStorage.getItem('ibi27a')) || { listsignup: [] };
    for (let i = 0; i < signup.listsignup.length; i++) {
      if (signup.listsignup[i].username === username.value) {
        username.style.border = '3px solid red';
        return false;
      }
    }
    username.style.border = '3px solid green';
  
    let h = {
      "name": name.value,
      "username": username.value,
      "email": email.value,
      "password": password.value
    };
    signup.listsignup.push(h);
  
    localStorage.setItem('ibi27a', JSON.stringify(signup));
}
  
  
function asignin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if(username.value === ''){
      username.style.border='3px solid red';
      return false;
    }else{
      username.style.border='3px solid green';
    }
  
    if(password.value === ''){
      password.style.border='3px solid red';
      return false;
    }else{
      password.style.border='3px solid green';
    }
  
    let lesdonnees = JSON.parse(localStorage.getItem('ibi27a'));
  
    for (let i = 0; i < lesdonnees.listsignup.length; i++) {
      if (lesdonnees.listsignup[i].username === username.value && lesdonnees.listsignup[i].password === password.value) {
        alert("Welcome " + lesdonnees.listsignup[i].username);
        return true;
      }
    }
    alert("Invalid username or password.");
    return false;
}
  
  