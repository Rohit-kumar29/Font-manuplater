function setup(){
    video = createCapture(VIDEO);
    video.size(500 ,500);

    canvas = createCanvas(550 ,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    background('#ffd700');
}
function modalLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
    }

}