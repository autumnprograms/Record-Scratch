	// Variables to store current rotation data
	let orientationX = 0;  // Current rotation around X axis (front/back tilt)
	let orientationY = 0;  // Current rotation around Y axis (left/right tilt)
	let orientationZ = 0;  // Current rotation around Z axis (device rotation)

	// Variables to store rotational velocity
	let velocityX = 0;     // Change in X rotation per frame
	let velocityY = 0;     // Change in Y rotation per frame
	let velocityZ = 0;     // Change in Z rotation per frame

function setup() 
{

	createCanvas(400, 400);
	//premade function that disables gdefault gestures
	lockGestures();
	enableGyroTap('Tap to enable motion sensors');

	textAlign(CENTER, CENTER);
    textSize(32);
}

function draw()
{	
	background(200,255,200)
		if (window.sensorsEnabled) {
			// Update orientation values from device sensors ONLY when enabled
			orientationX = rotationX;
			orientationY = rotationY;
			orientationZ = rotationZ;
			
			// Calculate rotational velocity (change from previous frame)
			// p5.js provides pRotationX, pRotationY, pRotationZ for previous frame values
			velocityX = orientationX - pRotationX;
			velocityY = orientationY - pRotationY;
			velocityZ = orientationZ - pRotationZ;

			textSize(16);
			text("X: " + orientationX.toFixed(1) + "°", width/2, height/2 - 80);
			text("Y: " + orientationY.toFixed(1) + "°", width/2, height/2 - 60);
			text("Z: " + orientationZ.toFixed(1) + "°", width/2, height/2 - 40);
		}

}
