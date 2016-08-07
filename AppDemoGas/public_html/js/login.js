/* global Packages */

//  $(document).ready(function () {
        //alert('is jquery loaded!');
//    });
//    import java.util.properties;
    
function validate() {
    
     var conn= new Packages.pruebaConnexion();
     conn.getProperties();
     
     alert(conn.getProperties());
     
//   webview.addJavascriptInterface(new pruebaConnexion(),"Conn");
    var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
    if (username == "Admin" && password == "admin123") {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("El Nombre/contraseña son incorrectos");
    }
}
