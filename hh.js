let timerInterval;
let remainingTime = 0;

document.getElementById('start').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('minutes').value);
    if (minutes > 0) {
        remainingTime = minutes * 60; // Chuyển sang giây
        updateTimerDisplay();
        timerInterval = setInterval(countdown, 1000);
    }
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerInterval);
    remainingTime = 0;
    updateTimerDisplay();
});

function countdown() {
    if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
    } else {
        clearInterval(timerInterval);
        alert('Thời gian đã hết! Hãy nghỉ ngơi và tiếp tục.');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}