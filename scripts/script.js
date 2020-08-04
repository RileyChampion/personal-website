$(document).ready(function(){
    $(".arrow-image").hover(function(){
        $(".arrow-image").attr("src", "./images/arrow-icon-03.png");
        }, function(){
        $(".arrow-image").attr("src", "./images/arrow-icon-02.png");
    });
});