function setup() 
{

	x = 0	//Device tilt forward/backward	-180° to 180°
	y = 0	//Device tilt left/right	-180° to 180°
	z = 0	//Device rotation around screen	-180° to 180°
	createCanvas(400, 400);
	//premade function that disables gdefault gestures
	lockGestures();
	enableGyroTap('Tap to enable motion sensors');
}

function draw()
{	
	if (window.sensorsEnabled) {
		x = rotationX	//Device tilt forward/backward	-180° to 180°
		y = rotationY	//Device tilt left/right	-180° to 180°
		z = rotationZ	//Device rotation around screen	-180° to 180°
		text(x,50,50);
		text(y,70,50);
		text(z,90,50);
	}
}
