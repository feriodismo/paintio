var socket;
mousepX = 0;
mousepY = 0;
mouseX = 0;
mouseY = 0;
room = ''
device = ''
sizeval = 12
let inp1, inp2;
picker = document.querySelector('#picker');
colorIpt = document.querySelector('#color-ipt');

picker.addEventListener('click', function(e) {
    console.dir(colorIpt)
    colorIpt.select();
});

function setup() {
    canvas = createCanvas(windowWidth - 80, windowHeight - 50);
    background(245);

    socket = io.connect('http://paintio.herokuapp.com/');
    // socket = io.connect('http://localhost:3000/');

    socket.on('room', function(data){
        room = data;
    })
    socket.on('erase', function(data){
        // background(data);
    })
    socket.on('device', function(data){
        device = data
    })
    socket.on('mouse',

        function(data) {
            strokeWeight(data.sizeval);
            stroke(data.colorpen);
            line(data.mouseX, data.mouseY, data.mousepX, data.mousepY);
        }
    );
}


function mouseDragged() {
    strokeWeight(sizeval);
    stroke(colorpen);
    line(mouseX, mouseY, pmouseX, pmouseY);
    sendmouse(mouseX, mouseY, pmouseX, pmouseY, sizeval, colorpen);
}

function sendmouse(xpos, ypos, xppos, yppos, sizeval, colorpen) {
    var data = {
        mouseX: xpos,
        mouseY: ypos,
        mousepX: xppos,
        mousepY: yppos,
        room: room,
        sizeval: sizeval,
        colorpen: colorpen
    };
    socket.emit('mouse', data);
}

function deleteAll() {
    background(245);
    socket.emit('erase', 245); 
}