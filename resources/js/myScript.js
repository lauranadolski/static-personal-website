// Create a circle shaped path at the center of the view,
// with a radius of 70:
// var path = new Path.Circle({
// 	center: view.center,
// 	radius: 70,
// 	fillColor: '#CDD3EE'
// });

// function onFrame(event) {
// 	// Each frame, change the fill color of the path slightly by
// 	// adding 1 to its hue:
// 	path.fillColor.hue += 1;
// }




var values = {
	paths: 20,
	minPoints: 2,
	maxPoints: 11,
	minRadius: 20,
	maxRadius: 70
};

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

var colorOptions = [
	'#DDE6F3',
	'#E3C9B0',
	'#C4291F',
	'#D6C6EB',
]

// '#CDD3EE',

createPaths();

function createPaths() {
	var radiusDelta = values.maxRadius - values.minRadius;
	var pointsDelta = values.maxPoints - values.minPoints;
	for (var i = 0; i < values.paths; i++) {
		var radius = values.minRadius + Math.random() * radiusDelta;
		var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
		var path = createBlob(view.size * Point.random(), radius, points);
		var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
		var hue = colorOptions[Math.floor(Math.random() * colorOptions.length)]
		path.fillColor = hue;
		// path.fillColor = { hue: hue, saturation: 1, lightness: lightness };
	};
}

function createBlob(center, maxRadius, points) {
	var path = new Path();
	path.closed = true;
	for (var i = 0; i < points; i++) {
		var delta = new Point({
			length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
			angle: (360 / points) * i
		});
		path.add(center + delta);
	}
	path.smooth();
	return path;
}

// function onFrame(event) {
// 	// Run through the active layer's children list and change
// 	// the position of the placed symbols:
// 	for (var i = 0; i < values.paths; i++) {
// 		var item = project.activeLayer.children[i];
		
// 		// Move the item 1/20th of its width to the right. This way
// 		// larger circles move faster than smaller circles:
// 		item.position.x += item.bounds.width / 300;

// 		// If the item has left the view on the right, move it back
// 		// to the left:
// 		if (item.bounds.left > view.size.width) {
// 			item.position.x = -item.bounds.width;
// 		}
// 	}
// }
