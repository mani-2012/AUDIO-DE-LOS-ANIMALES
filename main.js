function animals(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    nfl=ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/5ngASay5J/model.json', flor);
}
function flor(){
nfl.classify(mouse);
}