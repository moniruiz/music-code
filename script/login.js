function loguear(){
    let user= document.getElementById("usuario").value;
    let pass= document.getElementById("clave").value;

    if (user == "monica" && pass=="1234") {
        window.location = "/";
    } else{
        alert("Datos Incorrectos");
    }
}