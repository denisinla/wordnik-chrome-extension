var getWNAPI = (function(){

  var apiKey    = "1f94ba32c766af19880780675ba045e9ef6f8f8d37a538e0b";
  var xhr = new XMLHttpRequest();

  document.getElementById("results").addEventListener("click", function(event){
    event.preventDefault();
    // query
    var wordQuery = document.getElementById("wordQuery").value;

    xhr.open("GET", 'http://api.wordnik.com/v4/word.json/'+ wordQuery +'/definitions?includeRelated=false&includeTags=false&limit=3&useCanonical=false&api_key='+apiKey+'', true);
    xhr.onreadystatechange = function(){

      if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);

        console.log("Data:" + data);

        // results
        var results = document.getElementById("output");
        for(var obj in data){
          results.innerHTML += data[obj].text+ "<br> <span class='source'>"+ data[obj].attributionText + "</span><br><br>";
        }
      }
    }
    xhr.send(null);
  });
})();