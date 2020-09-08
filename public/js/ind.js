
indexIpt = document.querySelector('#room-ind-ipt');
indexIpt.focus();
let indexBtn = document.querySelector('#room-ind-btn');
indexBtn.disabled = true;
let url = ''

console.log(indexBtn)
function roomName(e){
    re = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm
    url = window.location.href+e.value;
    var GO = url.match(re);
    if(!GO || e.value.length>15 || e.value.length<3){
        roomValidation(false, url);
    }else{ 
        roomValidation(true, url);
    }
}

function roomValidation(b){
    if(b === false){
        indexBtn.disabled = true;
    }else{
        indexBtn.disabled = false;
    }
}

function roomlink(){
    window.location.replace(url)
}

indexIpt.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if(indexBtn.disabled === false){
        roomlink();
    }
    else{
        console.log('not')
    }
  }
});