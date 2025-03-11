let canvas;
let ctx;
let radius;
let digitalDisplay;

function initializeElements() {
    canvas = document.getElementById('clockCanvas');
    ctx = canvas.getContext('2d');
    radius = canvas.height / 2;
    digitalDisplay = document.getElementById('digitalClock');
    
    // Перемещаем точку отсчета в центр
    ctx.translate(radius, radius);
}

function drawClock() {
    drawFace();
    drawNumbers();
    drawTime();
    updateDigitalClock();
}

function drawFace() {
    // Внешний круг
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.9, 0, 2 * Math.PI);
    ctx.fillStyle = '#2d2d2d';  // Темный фон для часов
    ctx.fill();
    
    // Окантовка
    ctx.strokeStyle = '#ffffff';  // Белая окантовка
    ctx.lineWidth = radius * 0.02;
    ctx.stroke();
    
    // Центральная точка
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';  // Белая центральная точка
    ctx.fill();
}

function drawNumbers() {
    ctx.font = radius * 0.15 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = '#ffffff';  // Белые цифры
    
    for(let num = 1; num <= 12; num++) {
        const ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.75);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.75);
        ctx.rotate(-ang);
    }
}

function drawTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    // Часовая стрелка
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(hour, radius * 0.5, radius * 0.04);
    
    // Минутная стрелка
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(minute, radius * 0.7, radius * 0.03);
    
    // Секундная стрелка
    second = (second * Math.PI / 30);
    drawHand(second, radius * 0.8, radius * 0.01, 'red');
}

function drawHand(pos, length, width, color = '#ffffff') {  // Белые стрелки по умолчанию
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    
    ctx.rotate(pos);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Инициализация часов
function initClock() {
    initializeElements();
    
    // Обновляем часы каждую секунду
    setInterval(function() {
        ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
        drawClock();
    }, 1000);

    // Рисуем часы сразу при загрузке
    drawClock();
}

export { initClock }; 