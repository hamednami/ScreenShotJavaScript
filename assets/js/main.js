/******
	By: Hamed Nami
	https://HamedNami.ir
	https://github.com/hamednami
******/
function screenShot() {
    html2canvas(document.body)
    .then(canvas => {
        var url = canvas.toDataURL('image/png');
        var a = document.createElement('a');
        a.setAttribute('download', 'screenshot-js-hamednamiofficial.png');
        a.setAttribute('href', url);
        a.click();
    })
}