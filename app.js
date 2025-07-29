const terminal = document.getElementById('terminal');
let lines = [
    'Initializing virus...',
    'Accessing system files...',
    'Decrypting passwords...',
    'Uploading personal data to Ammad\'s server...',
    'System breach in progress...',
    'Installing spyware...',
    'Deleting system32...',
    '💀 SYSTEM COMPROMISED 💀',
    '',
    '',
    '',
    '',
];

let index = 0;

function typeLine() {
    if (index < lines.length) {
        terminal.innerHTML += lines[index] + '\n';
        index++;
        setTimeout(typeLine, 1000);
    } else {
        setTimeout(() => {
            terminal.innerHTML += '\n\n😆 You got pranked by Ammad! Your device is safe.\n';
            terminal.innerHTML += '🔒 Just a harmless joke 😄\n';
            document.body.style.backgroundColor = '#111';
        }, 2000);
    }
}

typeLine();
