window.onload = init;

function init(){
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
        //images[i].onclick = showAnswer;
        $(images[i]).on("click", showAnswer);
    }
    function showAnswer(){
        $("img").css({
            "filter": "blur(0px)"
        });
    }
}



