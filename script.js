console.log("page loaded...");

//eventos hover
function mouseOver (event){
    console.log("Evento mouseOver", event);
    console.log(event.play());
    event.play()
}

function mouseOut (event){
    console.log("Evento mouseOut", event);
    event.pause()
}