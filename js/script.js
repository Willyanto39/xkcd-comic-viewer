$(document).ready(function(){
    $("#view-comic-button").click(function(){
        var episodeNumber = $("#episode-number").val();
        var url = "https://xkcd.now.sh/" + episodeNumber;

        $.getJSON(url, function(data){
            $("#title").text(data["safe_title"]);
            $("#comic").attr("src", data["img"]);
            $("#comic").attr("alt", data["transcript"]);
        }).fail(function(){
            alert("Comic not found");
        });
    });
});