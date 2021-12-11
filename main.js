difference = 0;
rightwristX = 0;
leftwristX = 0;
function preload()
{

}
function setup()
{
 video = createCapture(VIDEO);
 video.size(500 , 500);
 video.position(40 , 170)
 canvas = createCanvas(500 , 500);
 canvas.position(565 , 170);
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose',  gotPoses);
}
function modelLoaded()
{
    console.log("Pose Net is Initialized");
}
function draw()
{
 background('#FFFF00');
 document.getElementById("font_size").innerHTML = difference;
 textSize(difference);
 fill('#FFA500');
 text('Kavya' , 50, 400);
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
     console.log(results);
     leftwristX = results[0].pose.leftWrist.x;
     rightwristX = results[0].pose.rightWrist.x;
     difference = floor(leftwristX - rightwristX);
     console.log("Left wrist X = " + leftwristX + "Right wrist Y = " + rightwristX);    
    }
}