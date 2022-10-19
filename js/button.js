function fast(){
    var speed= document.getElementById("speed").value;//获取输入框中的内容
    video.playbackRate=speed;
}

function choosevideo(){
    var file = document.getElementById("open").files[0];
    var url = URL.createObjectURL(file);
    console.log(url);
    video.src=url;
}

function hid(){
    var vis=document.getElementById("tips");
    vis.style.visibility="visible";
}

function ani(){
    var ttt=document.getElementById("233")
    var tff=document.getElementById("244")
    ttt.style.visibility="hidden"
    tff.style.visibility="hidden"
}