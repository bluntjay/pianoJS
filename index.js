const keys = document.querySelectorAll(".key");
const whiteKey = document.querySelectorAll(".key.white");
const blackKey = document.querySelectorAll(".key.black");

keys.forEach( key => {
	key.addEventListener("click", () => playNote(key))
});

function playNote(key){
	const audioNote = document.getElementById(key.dataset.note);
	audioNote.currentTime = 0;
	audioNote.play();
	key.classList.add("active");
	audioNote.addEventListener("ended", () =>{
		key.classList.remove("active")
	})
}

const whiteKeys = ["z", "x", "c", "v", "b", "n", "m"];
const blackKeys = ["s", "d", "f", "g", "h", "j"];

document.addEventListener("keydown", e =>{
	if(e.repeat) return
	const key = e.key;
	const whiteKeysIndex = whiteKeys.indexOf(key);
	const blackKeysIndex = blackKeys.indexOf(key);

	if(whiteKeysIndex > -1) playNote(whiteKey[whiteKeysIndex])
	if(blackKeysIndex > -1) playNote(blackKey[blackKeysIndex])
})