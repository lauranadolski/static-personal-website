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
	paths: 10,
	minPoints: 2,
	maxPoints: 15,
	minRadius: 10,
	maxRadius: 30
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