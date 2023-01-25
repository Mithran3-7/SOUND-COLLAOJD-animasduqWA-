function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mAvwIauyJ/model.json',modelloaded);
}
function modelloaded(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="detected voice is of - "+results[0].label;
        
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
       
        img=document.getElementById("animal_image");
        
        if(results[0].label=="barking")
        {
            img.src="bark.gif";
            
        }
        else if(results[0].label=="meowing")
        {
            img.src="meow.gif";
            
        }
        
        else 
        {
            img.src="listen.gif";
            
        }
    }
}