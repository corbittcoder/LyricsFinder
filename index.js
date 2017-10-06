$("searchButton").click(function(){
  var myurl= "https://api.lyrics.ovh/v1/" + $("#artist").val()
  + "/" + $("#title").val() + "/";
  $.ajax({
    url : myurl,
    dataType : "xml",
    "text xml" : JQuery.parseXML,
    success : function(parse) {
      $lyrics = $parse.find ("lyrics");
      console.log(lyrics);
      $("#lyrics").html( $lyrics.text() );
    }
  });
});
$("#searchButton").ready(function() {
        $.ajax({ type: "POST",
                        url: myurl,
                        data: "<formData client=\"\" year=\"\" categories=\"\" tags=\"\" freeText=\"\" count=\"34\" page=\"1\"></formData>",
                        contentType: "text/xml",
                        dataType: "xml",
                        cache: false,
                        error: function() { alert("No data found."); },
                        success: function(xml) {
                            alert("it works");
                            alert($(xml).find("project")[0].attr("id"));
                        }
        });
    });
