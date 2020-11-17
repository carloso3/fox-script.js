console.log("cnn");
document.body.style.backgroundColor = "orange";
let url = location.href;

// health related articles
if (url == "https:www.cnn.com/health") {
    var x = document.getElementsByClassName("cd__headline");
    x[Math.floor(Math.random() * x.length)].style.backgroundColor = "red";
}
