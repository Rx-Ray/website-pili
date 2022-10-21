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

function gos(){
    link="https://search.bilibili.com/all?keyword=keywords&from_source=webtop_search&spm_id_from=333.1007&search_source=2";
    key=document.getElementById("rr").value;
    window.open(link.replace("keywords",key));
}