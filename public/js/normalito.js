let colorpen = "#4db99a";
let colorcanvas = "#f5f5f5";
let sizeeraser = 100;
let sizeval = 12;
let sizeholder = "";
let colorholder = "";
let show = true

let picker = document.querySelector('#picker');
let colorIpt = document.querySelector('#color-ipt');
let sizepen = document.querySelector("#slider");

sizepen.value = sizeval;


picker.addEventListener('click', function(e) {
    console.dir(colorIpt)
    colorIpt.select();
});

function retakeColor(){
    colorpen = colorholder;
    sizeval = sizeholder;

}
function changeColor() {
    colorpen = colorIpt.value;
    document.querySelector(".fa-eye-dropper").style.color = colorpen;
}
function penSize() {
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
}

function penEraser(){
    if(String(sizeval) !== String(sizeeraser)){
        sizeholder = sizeval;
    }
    if(String(colorpen) !== String(colorcanvas)){
        colorholder = colorpen;
    }
	colorpen = colorcanvas;
	sizeval = sizeeraser;
}

function deleteCanvas() {
    background(colorcanvas);
    socket.emit('erase', colorcanvas); 
}


///////////////////////
// index validation //
/////////////////////
