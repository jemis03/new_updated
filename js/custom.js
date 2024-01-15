function togglemenu() {
    var x=document.getElementById("leftsidebar");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    console.log(x);
}