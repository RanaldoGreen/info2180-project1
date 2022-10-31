document.addEventListener('DOMContentLoaded',function(){
    var  btn = document.getElementsByClassName("btn");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    btn.item(1).addEventListener('click', function(f){
        f.preventDefault(); 
        var email = document.getElementById('email').value;
        if(email.length==0 || !email.match(pattern)){
            alert('Please enter a valid email address.');
            return;
        }
        if(email.match(pattern)){
            msg = document.getElementsByClassName("message")[0];
            msg.textContent = 'Thank You! Your email address ' + email + ' has been added to our mailing list!';
        }
    });
})