alert("Welcome to LCS - Learning Community Serena's Landing Page!");

document.getElementById("light").style.display = "none";

document.getElementById("toggle").onclick = function() {
    document.getElementById("toggle").style.display = "none";
    document.getElementById("light").style.display = "block";
    document.getElementById("site").style.color = "white";
    document.getElementById("site").style.background = "#121212";
    document.getElementById("sidebar").style.borderColor = "white";
};

document.getElementById("light").onclick = function() {
    document.getElementById("light").style.display = "none";
    document.getElementById("toggle").style.display = "block";
    document.getElementById("site").style.color = "black";
    document.getElementById("site").style.background = "white";
    document.getElementById("sidebar").style.borderColor = "black";
};