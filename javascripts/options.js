$(document).ready(function(){
$("#results").bind("click", function() {
    var apiKey = "YOUR API KEY HERE";
    var wordQuery = $("#wordQuery").val();
    var url = "http://api.wordnik.com/v4/word.json/"+ wordQuery +"/definitions?includeRelated=false&includeTags=false&limit=3&useCanonical=false&api_key="+ apiKey;
    $.getJSON(url, function(data) {
        var defList = $("<ul />");

        $.each(data, function(index, item) {
            $("<li>"+item.text+"</li>").append("<p class='source'>"+item.attributionText+"</p>")
                .appendTo(defList);
                console.log(defList);                
        });
        
        $("#output").fadeOut("fast", function(){
            $(this).empty()
                .append(defList)
                .fadeIn("slow");            
        });
    });
});
});