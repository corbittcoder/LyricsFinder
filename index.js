$("searchButton").click(function(){
  var myurl= "https://api.lyrics.ovh/v1/" + $("#artist").val()
  + "/" + $("#title").val() + "/";
  $.ajax({
    url : myurl,
    dataType : "xml",
    "text xml" : JQuery.parseXML,
    success : function(xmlDoc) {
      $xml = $( xmlDoc );
      $lyrics = $xml.find ("lyrics");
      console.log(lyrics);
      $("#lyrics").html( $lyrics.text() );
    }
  });
});
