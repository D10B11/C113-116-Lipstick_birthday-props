nose_x=0;
nose_y=0;
function preload()
{
  img=loadImage("https://i.postimg.cc/6psCSK7x/lipstick.png");
}

function draw()
{
  image(video,0,0,300,300);
  image(img,nose_x,nose_y,50,23);
}

function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses)
}

 function modelLoaded()
{
   console.log("modelLoaded");
}

function gotPoses(result)
{
  console.log("posenet.on");
  if(result.length > 0)
  {
    console.log(result);
    nose_x=result[0].pose.nose.x-27;
    nose_y=result[0].pose.nose.y+22;
    console.log("nose_x="+nose_x);
    console.log("nose_y="+nose_y);
  }
}
 
function take_snapshot()
{
  save('My_Filter_Image.jpg');
}