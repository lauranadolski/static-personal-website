// This is the file that powers all of the Paper.js schtuffs - which currently includes random blob generation.
// This code includes code that originally came from a Paper.js example (I have modified it).

var values = {
	// The number of blobs to render on the page.
	paths: 20,
	// The minimum number of points on any given blob.
	minPoints: 2,
	// The maximum number of points on any given blob.
	maxPoints: 11,
	// The minimum radius of any given blob (blob size).
	minRadius: 20,
	// The maximum radius of any given blob (blob size).
	maxRadius: 70
};

// Hex color options from which to grab to fill each blob.
var colorOptions = [
	'#DDE6F3',
	'#E3C9B0',
	'#C4291F',
	'#D6C6EB',
]

// Creates all of the blobs.
function createPaths() {

	// For loop that iterates however many times is specified in the paths key of the values object.
	for (var i = 0; i < values.paths; i++) {

		// Generate a random radius for the blob.
		var radius = Math.floor(Math.random() * values.maxRadius) + values.minRadius;


		// Generate a random number of points for the blob.
		var points = Math.floor(Math.random() * values.maxPoints) + values.minPoints;

		// Invoke the below createBlob() function, passing through as arguments:
			// 1) a center point, randomly generated from the current size of the viewport
			// 2) the above-generated radius within the specified range
			// 3) the above-generated number of points within the specified range
		var path = createBlob(view.size * Point.random(), radius, points);

		// Grab from a random index of the colorOptions array, make the blob that color.
		var color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		path.fillColor = color;
	};
}

function createBlob(center, maxRadius, points) {
	// Generate a new path.
	var path = new Path();

	// Set the path.closed property to true, which will connect the first and last segments of the path.
	path.closed = true;

	// Create the points, based on the passed-through specified number of points.
	for (var i = 0; i < points; i++) {

		var delta = new Point({
			// For the newly generated point, set the length to be random but within the specified maximum radius.
			length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
			// For the newly generated point, set the angle to be at some fraction of 360 degrees in sum.
			angle: (360 / points) * i
		});

		// Add the segment to the end of the segments array of this path.
		path.add(center + delta);
	}

	// Smooth paths to create curves that flow smoothly through the path's segment points.
	path.smooth();

	// Return the newly generated path object.
	return path;
}

// Invokes the function to create these here blobs.
createPaths();