const breakLength = document.getElementById('break-length')

const sessionLength = document.getElementById('session-length')

breakLength.innerHTML = 5
sessionLength.innerHTML = 25

let timerInterval;
let minutes = 25;
 let seconds = 0;

const timerDisplay  = document.getElementById('time-left')
const startButton  = document.getElementById('start_stop')
function updateTimer() {
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }

let started = false
startButton.addEventListener('click', () => {
            if(!started){
              started = true
              if (!timerInterval) {
                timerInterval = setInterval(updateTimer, 1000);     
            }
            }
  else{
    started=false
    clearInterval(timerInterval);
            timerInterval = null;
  }
        });