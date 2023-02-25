function setup() {
	//rest option
	rectMode(CENTER)

	// canva reload to resize
	setInterval(() => {
		setCanvasSize()
	}, 200);

}
let protoCube = true;
let elements = []
function draw() {
	if (mouseX > width || mouseY > height)
		return
	background(100)
	if (elements.length) {
		let curentOnWorking = elements[elements.length - 1]
		curentOnWorking.setPos(mouseX, mouseY)
	}
	elements.forEach((cub) => {
		cub.show()
	})


}

function mouseClicked() {
	elements.push(new Cube())
}



















//elements constructor function
function Cube() {
	this.x = 0
	this.y = 0
	this.w = 100
	this.h = 100
}
Cube.prototype.setPos = function (x, y) {
	this.x = x
	this.y = y
}
Cube.prototype.show = function () {
	rect(this.x, this.y, this.w, this.h)
}



// click handler

function addcub() {

}
function addcir() {

}
function addimg() {

}
function addtxt() {

}
function takePhoto() {

}
function takeProject() {

}
function importProject() {

}




// windows sizer

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