function setup() {
	setInterval(() => {
		setCanvasSize()
	}, 200);
}

function draw() {
	background(0)

}






let lastH = 0
let lastW = 0
function setCanvasSize() {
	let curentW = (windowWidth * 1 / 3) > 450 ? windowWidth - 450 : windowWidth * 2 / 3
	if (lastW !== curentW || lastH !== windowHeight - 50) {
		lastH = windowHeight - 50
		lastW = (windowWidth * 1 / 3) > 450 ? windowWidth - 450 : windowWidth * 2 / 3
		createCanvas(lastW, lastH);
	}
}
