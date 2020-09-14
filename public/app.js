var e = " Propriedade userAgent: " +navigator.userAgent;
document.getElementById("info").innerHTML = e;

var navegadores = "";

if (navegadores = navigator.userAgent.toLowerCase().indexOf('op') > -1) {
    document.getElementById("browser").innerHTML = "Opera";
}else if (navegadores = navigator.userAgent.indexOf('Firefox') > -1) {
    document.getElementById("browser").innerHTML = "Mozilla Firefox";
}else if (navegadores = navigator.userAgent.indexOf('Epiphany') > -1) {
    document.getElementById("browser").innerHTML = "Epiphany";
}else if (navegadores = navigator.userAgent.indexOf('Edg') > -1) {
    document.getElementById("browser").innerHTML = "Microsoft Edge"
}else if (navegadores = navigator.userAgent.indexOf('Chrome') > -1) {
    document.getElementById("browser").innerHTML = "Google Chrome";
}else if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
    document.getElementById("browser").innerHTML = "Safari";
}
