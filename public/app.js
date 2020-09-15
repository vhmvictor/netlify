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
if (browser == "Safari" || browser == "Google Chrome" || browser == "Opera") {
    var ls = localStorage.getItem("modal");
    if(!ls){
        Swal.fire({
            imageHeight: '600px',
            imageWidth: '300px',
            background: '#1C1C1C',
            title: '<h5 style="color:#fff">Como instalar no IOS!</h5>',
            imageUrl: "add-home-dm.gif",
            showCloseButton: true,
            confirmButtonText: "Entendi!", 
        });
    }
};
localStorage.setItem("modal", false);