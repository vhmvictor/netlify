var navegadores = "";
let browser = "";
if (navegadores = navigator.userAgent.toLowerCase().indexOf('op') > -1) {
    browser = "Opera";
}else if (navegadores = navigator.userAgent.indexOf('Firefox') > -1) {
    browser = "Mozilla Firefox";
}else if (navegadores = navigator.userAgent.indexOf('Epiphany') > -1) {
    browser = "Epiphany";
}else if (navegadores = navigator.userAgent.indexOf('Edg') > -1) {
    browser = "Microsoft Edge";
}else if (navegadores = navigator.userAgent.indexOf('Chrome') > -1) {
    browser = "Google Chrome";
}else if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
    browser = "Safari";
}
console.log(browser)
if (browser == "Safari" || browser == "Opera") {
    Swal.fire({
        imageUrl: "add-home.gif",
        confirmButtonText: "Entendi!", 
    });
};