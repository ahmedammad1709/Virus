const terminal = document.getElementById('terminal');
const progressBar = document.getElementById('progressBar');
const body = document.body;
const alertSound = document.getElementById('alertSound');

let lines = [
    "Connecting to target...",
    "Bypassing firewall...",
    "Accessing webcam...",
    "Downloading files...",
    "Injecting trojan...",
    "Uploading data to Ammad's server...",
    "SYSTEM BREACH INITIATED 💀",
    "Erasing system files...",
    "Corrupting OS...",
    "Finalizing destruction...",
];

let prankFinished = false;
let index = 0;

function typeLine() {
    if (index < lines.length) {
        terminal.innerHTML += lines[index] + '\n';
        alertSound.play();
        index++;
        updateProgress(index / lines.length * 100);
        if (index > 5) body.classList.add('flash');
        setTimeout(typeLine, 1000);
    } else {
        setTimeout(showScare, 2000);
    }
}

function updateProgress(percent) {
    progressBar.style.width = percent + '%';
}

function showScare() {
    terminal.innerHTML += '\n💥 SYSTEM DESTROYED 💥\n';
    alertSound.play();
    setTimeout(() => {
        body.classList.remove('flash');
        document.body.style.backgroundColor = '#111';
        terminal.innerHTML += '\n\nxD Just kidding bro! Your system is safe.\n';
        terminal.innerHTML += ':) You just got pranked by Ammad.\n';
        progressBar.style.background = 'limegreen';
        prankFinished = true;
    }, 2000);
}

function goFullscreen() {
    if (!prankFinished) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }
}

window.onload = () => {
    setTimeout(typeLine, 1000);
};
