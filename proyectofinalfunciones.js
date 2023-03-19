// con esta funcion capturo los email que me pongan en el formulario

function captura(){
    var nombre=document.getElementById("quien").Value;
    var email=document.getElementById("mail").Value;
    var celular=document.getElementById("celu").Value;
    if(nombre==""){
       alert("el nombre es obligatorio"); 
    }
    alert(email)
    console.log(mail + " "+ celu+" "+ quien);
}

