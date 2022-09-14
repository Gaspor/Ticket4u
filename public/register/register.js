var cnpj = document.getElementById("1");
var user = document.getElementById("2");

function juridica(){
     if (cnpj.style.visibility == "visible") {
        user.style.visibility = 'hidden';
     }
     else{
        cnpj.style.visibility='visible';
        user.style.visibility = 'hidden';
     }
 }

 function fisica(){
    if (user.style.visibility == "visible") {
       cnpj.style.visibility = 'hidden';
    }
    else{
       cnpj.style.visibility='hidden';
       user.style.visibility = 'visible';
    }
}


 document.getElementById('cnpj').addEventListener('input', function(e) {
    
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');
    
 });