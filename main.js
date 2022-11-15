function animals(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    lapiz=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3CPraswD6/model.json', fresa);
}
function moon(erro,respuesta){
    if (erro){
console.log(erro);
    }
    else if(respuesta){
    console.log(respuesta);
    ro=Math.floor(Math.random()*255);
    ve=Math.floor(Math.random()*255);
    az=Math.floor(Math.random()*255);
    document.getElementById("coco").style.color="rgb("+ro+","+ve+","+az+")";
    document.getElementById("coco").innerHTML="El objeto es: "+respuesta[0].label;
    if (resultados[0].label=="aplausos"){
        document.getElementById("pul").src="gallina.gif";
        }
    if (resultados[0].label=="tambores"){
        document.getElementById("pul").src="dog.gif";
        }
        if (resultados[0].label=="chasquidos"){
            document.getElementById(resultados[0].label=="tambores");{
document.getElementById("pul").src="cat.gif";
}
if (resultados[0].label=="ruido de fondo"){
    document.getElementById("pul").src="oido.gif";
}
}
    }
}
function fresa(){
lapiz.classify(moon());
}