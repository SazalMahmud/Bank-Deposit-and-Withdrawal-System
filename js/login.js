document.getElementById('login-submit').addEventListener('click',function(){
    //email
    const emailField =document.getElementById('user-email');
    const userEmail = emailField.value;
    // password
    const passwordFileld =document.getElementById('user-password');
    const userPassword = passwordFileld.value;
    
      // check email and password
    if(userEmail == 'sazal@gmail.com' && userPassword == '12345'){
        window.location.href = 'index2.html';   
    }

});
