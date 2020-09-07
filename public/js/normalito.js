let colorpen = "";
let sizepen = "";
let sizeval = "";
let show = true


function cambiarcolor() {
    colorpen = document.getElementById("color-ipt").value;
    document.querySelector(".fa-eye-dropper").style.color = colorpen;
}
function sizePen() {
    console.log(show)
    sizepen = document.querySelector("#slider");
    sizepen.style.cssText = 'display: block !important';
    sizepen.style.position = 'absolute';
    sizepen.style.right = '0';
    if (show === false) {
        sizepen.style.cssText = 'display: none !important';
        show = true;
    }else{
        sizeval = 0;
        show = false
    }
}

function penValue(e) {
    sizeval = e.value;
    e.style.cssText = 'display: none !important';
    show = true;
    console.log(sizeval);
}

function deleteAll() {
    console.log("delt")
}

function penEraser(){
	colorpen = "#f5f5f5";
	sizeval = 100;
}