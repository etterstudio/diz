
function soundSettings() {
	
	sound.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	sound.oscillator = sound.audioCtx.createOscillator();
	sound.gainNode = sound.audioCtx.createGain();

	sound.maxFreq = 6000;
	sound.maxVol = 1;

	sound.oscillator.connect(sound.gainNode);
	sound.gainNode.connect(sound.audioCtx.destination);

	sound.oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	sound.oscillator.frequency.value = sound.maxFreq/10; // value in hertz

	sound.gainNode.gain.value = sound.maxVol/10;

}

var pongs = {};
pongs.p1 = new Audio('audio/pong1.mp3');
pongs.p2 = new Audio('audio/pong2.mp3');
pongs.p3 = new Audio('audio/pong3.mp3');
pongs.p4 = new Audio('audio/pong4.mp3');
pongs.p5 = new Audio('audio/pong5.mp3');