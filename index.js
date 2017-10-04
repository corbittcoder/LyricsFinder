$("searchButton").click(function(){
  var myurl= "https://api.lyrics.ovh/v1/" + $("#artist").val() + "/" + $("#title").val() + "/";
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
      $("#lyrics").html(JSON.stringify(parsed_json["lyrics"]));
    }
    error : function(error, parsed_json) {
      console.log(error);
      console.log(parsed_json);
    }
  });
});
