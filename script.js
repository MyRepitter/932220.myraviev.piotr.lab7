
function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function insertFigure(category) {
    var n = count.value;
    if (n > 1000000 || n < 1)
        alert('Valid values: 1, 2, ... , 1000000');
    else
        switch (category) {
            case 0: for (var i = 0; i < n; i++) addSquare(); break;
            case 1: for (var i = 0; i < n; i++) addCircle(); break;
            case 2: for (var i = 0; i < n; i++) addTriangle(); break;
        }
}

function addTriangle() {
    var fig = document.createElement('div');
    var size = getRandNum(5, 500);
    var is_mark = false;

    fig.classList.add('triangle');
    fig.style.borderBottom = 'solid blue ' + size / 2 + 'px';
    fig.style.borderLeft = 'solid transparent ' + size / 2 + 'px';
    fig.style.borderRight = 'solid transparent ' + size / 2 + 'px';
    fig.style.left = getRandNum(0, 2000 - size) + 'px';
    fig.style.top = getRandNum(100, 1000 - size) + 'px';

    fig.addEventListener('click', function Clicked() { if (is_mark) fig.style.borderBottomColor = 'blue'; else fig.style.borderBottomColor = 'yellow'; is_mark = !is_mark; })
    fig.addEventListener('dblclick', function D_Clicked() { document.body.removeChild(fig); })
    document.body.appendChild(fig);
}

function addSquare() {
    var fig = document.createElement('div');
    var size = getRandNum(5, 500);
    var is_mark = false; 

    fig.classList.add('square');
    fig.style.width = size + 'px';
    fig.style.height = size + 'px';
    fig.style.left = getRandNum(0, 2000 - size) + 'px';
    fig.style.top = getRandNum(100, 1000 - size) + 'px';

    fig.addEventListener('click', function Clicked () { if (is_mark) fig.style.background = 'red'; else fig.style.background = 'yellow'; is_mark = !is_mark; })
    fig.addEventListener('dblclick', function D_Clicked () { document.body.removeChild(fig); })
    document.body.appendChild(fig);
}

function addCircle() {
    var fig = document.createElement('div');
    var size = getRandNum(5, 500);
    var is_mark = false;

    fig.classList.add('circle');
    fig.style.width = size + 'px';
    fig.style.height = size + 'px';
    fig.style.left = getRandNum(0, 2000 - size) + 'px';
    fig.style.top = getRandNum(100, 1000 - size) + 'px';

    fig.addEventListener('click', function Clicked () { if (is_mark) fig.style.background = 'green'; else fig.style.background = 'yellow'; is_mark = !is_mark; })
    fig.addEventListener('dblclick', function D_Clicked() { document.body.removeChild(fig); })
    document.body.appendChild(fig);
}