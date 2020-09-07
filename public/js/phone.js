info = {
    device: '',
    guest: '',
    room: ''
}
wid = 700
hei = 500
function setup() {
    canvas = createCanvas(windowWidth - 10, windowHeight - 30);
    background(245);

    // socket = io.connect('http://paintio.herokuapp.com/');
    socket = io.connect('http://localhost:3000/');

    matrix = {
        a: 5,
        b: 5,
        c: wid,
        d: hei
    }
    if (info.device = 'phone') {
        socket.emit('dsize', matrix)
    }
    socket.on('deviceInfo', function(data) {
        console.log(data)
    })
    socket.on('info', function(data) {
        info = {
            device: data.device,
            guest: data.guest,
            room: data.room
        }
    })
    socket.on('erase', function(data) {})

    strokeWeight(.5)
    stroke('#000000');

    line(matrix.a, matrix.b, matrix.c, matrix.a);
    line(matrix.c, matrix.b, matrix.c, matrix.d);
    line(matrix.c, matrix.d, matrix.a, matrix.d);
    line(matrix.a, matrix.d, matrix.a, matrix.b);
}
window.addEventListener('keydown', function(){
    strokeWeight(10)
    stroke(245);

    line(matrix.a, matrix.b, matrix.c, matrix.b);
    line(matrix.c, matrix.b, matrix.c, matrix.d);
    line(matrix.c, matrix.d, matrix.a, matrix.d);
    line(matrix.a, matrix.d, matrix.a, matrix.b);
    move = 5
    if (keyIsDown(LEFT_ARROW)) {
        matrix.a -= move;
        matrix.c -= move; 
    }

    if (keyIsDown(RIGHT_ARROW)) {
        matrix.a += move;
        matrix.c += move; 
    }

    if (keyIsDown(UP_ARROW)) {
        matrix.b -= move;
        matrix.d -= move; 
    }

    if (keyIsDown(DOWN_ARROW)) {
        matrix.b += move;
        matrix.d += move; 
    }
    stroke('#000000');
    strokeWeight(1)

    line(matrix.a, matrix.b, matrix.c, matrix.b);
    line(matrix.c, matrix.b, matrix.c, matrix.d);
    line(matrix.c, matrix.d, matrix.a, matrix.d);
    line(matrix.a, matrix.d, matrix.a, matrix.b); 
})

// function mouseDragged() {
//     strokeWeight(sizeval);
//     stroke(colorpen);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     sendmouse(mouseX, mouseY, pmouseX, pmouseY, sizeval, colorpen);
// }

// function sendmouse(xpos, ypos, xppos, yppos, sizeval, colorpen) {
//     var data = {
//         info: info,
//         mouseX: xpos,
//         mouseY: ypos,
//         mousepX: xppos,
//         mousepY: yppos,
//         sizeval: sizeval,
//         colorpen: colorpen
//     };
//     socket.emit('mouse', data);
// }

// function deleteAll() {
//     background(245);
// }