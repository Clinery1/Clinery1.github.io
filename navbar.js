var NAVBAR_HTTP=new XMLHttpRequest();
NAVBAR_HTTP.onreadystatechange=function() {
    if (this.readyState==4&&this.status==200) {
        navbarContainer.innerHTML=this.responseText;
        console.log("Navbar inserted");
    }
    if (this.status==404) {
        navbarContainer.innerHTML="<h1>Could not load navbar. Please file an issue <a href=\"https://github.com/Clinery1/Clinery1.github.io/issues\">here</a></h1>";
        console.log("Navbar not found");
    }
};
NAVBAR_HTTP.open("GET","/navbar.html",true);
NAVBAR_HTTP.send();
