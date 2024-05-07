function Consulta(){
    let nom = document.getElementById("name").value;
    let ape= document.getElementById("ape").value;
    let mail= document.getElementById("email").value;
    let tel = document.getElementById("tel-number").value;
    let mensa = document.getElementById("comments").value;

    alert("Mensaje Recibido" + " " + mensa);
    window.location = "/";

} 