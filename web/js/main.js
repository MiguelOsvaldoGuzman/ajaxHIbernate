function sendDataToBack(){
   var nombre=document.getElementById("nombre").value;
   var paterno=document.getElementById("paterno").value;
   var materno=document.getElementById("materno").value;
   
   $.post("urlSuperPro",{
       nombre:nombre,
       paterno:paterno,
       materno:materno
       
   },
   function (data){
       console.log("Exito");
       console.log(data);
                if (data.resultado) {
                    window.alert("Si fuciono");
                }
   });
}


