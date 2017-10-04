$("searchButton").keyup(function(){
  var myurl= "https://api.lyrics.ovh/v1/" + $("#artist").val() + "/" + $("#title").val() + "/";
  $.ajax({
    url : myurl,
    crossDomain: true,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
      $("#lyrics").html(JSON.stringify(parsed_json["lyrics"]));
    }
  });
});
