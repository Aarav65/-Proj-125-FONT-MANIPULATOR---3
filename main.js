leftWristX = 0;
righttWristX = 0;
difference = 0;
hello = "Hello";

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    div = createDiv();
    div.attribute("id","live_div");
    video.parent(div);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Initialized!");
}

function draw()
{
    background('#62ff2e');
    textSize(difference);
    fill('red');
    text(hello, 50, 400)

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}