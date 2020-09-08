var socket;
room = ''
device = ''

function setup() {
    canvas = createCanvas(windowWidth - 80, windowHeight - 50);
    background(colorcanvas);
    // socket = io.connect('http://paintio.herokuapp.com/');
    socket = io.connect('http://localhost:3000/');

    socket.on('room', function(data){
        room = data;
    })
    socket.on('erase', function(data){
        // background(data);
    })
    socket.on('device', function(data){
        device = data
    })
    socket.on('askforcanvas', function(data){
        console.log('toc toc canvas');
        socket.emit('sendcanvas', data);
    })
    socket.on('takecanvas', function(data){
        console.log(data);
        console.log('thank you');
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
    sendMouse(mouseX, mouseY, pmouseX, pmouseY, sizeval, colorpen);
}

function sendMouse(xpos, ypos, xppos, yppos, sizeval, colorpen) {
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