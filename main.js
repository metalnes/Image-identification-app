function setup() {
  canvas = createCanvas(600, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelLoaded)
}
function draw(){
  image(video,0,0,600,400)
  classifier.classify(video,gotResult)

}
function modelLoaded(){
  console.log('Model is Loaded!')
}

function gotResult(error,result){
  console.log(result)
  if(error){
    console.error(error)
    
  }
  else{
    label=result[0].label
    confidence=(result[0].confidence*100).toFixed(2)
    document.getElementById("result_name_Object").innerHTML=label
    document.getElementById("result_name_Accuracy").innerHTML=confidence + "%"
    synth=window.speechSynthesis;
    speakdata="object detected is: " + label
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
  }
} 
