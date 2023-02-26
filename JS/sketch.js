let nodes = []
function setup() {
	//rest option
	rectMode(CENTER)

	// canva reload to resize
	setInterval(() => {
		setCanvasSize()
	}, 200);
	//test 

}
let protoCube = true;
function draw() {
	if (mouseX > width || mouseY > height)
		return
	background(100)
	nodes.forEach((cub) => {
		cub.checkMouse()
		cub.show()
	})


}



















//node class
class Node {
	constructor() {
		this.x = 0
		this.y = 0
		this.h = 100
		this.w = 100
		this.color = color(100, 100, 100)
		this.isSelected = false
		this.isHoverd = false
		this.label = ""
		this.init = true
		// [[theNode,bool:inTo or fromTo],[theNode,bool:true]]
		this.connections = []

	}



	addConnection(otherNode) {
		this.connections.push([otherNode, true])
		otherNode.connections.push([this, false])
	}
}

class Cube extends Node {
	constructor(props) {
		super(props)

	}
	show() {
		if (this.init) {
			this.x = mouseX
			this.y = mouseY
		}
		let hoverColor = color(100, 100, 255)
		stroke(this.isHoverd ? hoverColor : 0)
		strokeWeight(5)

		fill(this.color)
		rectMode(CENTER)
		rect(this.x, this.y, this.w, this.h)

		textSize(16)
		textAlign(CENTER, CENTER)
		text(this.label, this.x, this.y)
		for (let connection of this.connections) {
			line(this.x, this.y, connection.x, connection.y)
		}
	}

	checkMouse() {
		if (!this.init) {
			this.isHoverd =
				((this.x + this.w / 2) < mouseX) &&
				((this.y + this.h / 2) < mouseY) &&
				((this.x - this.w / 2) > mouseX) &&
				((this.y - this.h / 2) > mouseY)
		}
	}

}

function mouseClicked() {
	if (mouseX > width && mouseY > height) {
		return
	}
	for (let node of nodes) {
		if (node.init) {
			node.init = false
			return
		}
		if (node.isHoverd) {
			node.isSelected = true
			return
		}
		// if (dist(node.x, node.y, mouseX, mouseY) < 25) {
		// 	let label = prompt("Enter node label:");
		// 	if (label) {
		// 		let newNode = new Node(mouseX, mouseY, label);
		// 		nodes.push(newNode);
		// 		node.addConnection(newNode);
		// 	}
		// }
	}
}









// click handler

function addcub() {
	nodes.push(new Cube)
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