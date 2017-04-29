function color(id,color){
    //var newColor="blue";
    var R=Math.floor(Math.random() * 256);
    var G=Math.floor(Math.random() * 256);
    var B=Math.floor(Math.random() * 256);
/*
    var R=84;
    var G=133;
    var B=184;*/
    document.getElementById(id).style.backgroundColor="rgb("+R+","+G+","+B+")";
}