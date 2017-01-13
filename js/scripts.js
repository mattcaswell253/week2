$(document).ready(function() {

  $("form#operating-system").submit(function(event) {
    event.preventDefault();
$(".language-info").hide();

    var system = $("input:radio[name=info]:checked").val();
    var location = $("select#location").val();
    var work = $("select#work-style").val();
    var rather = $("select#rather").val();
    var ideal = $("select#ideal").val();

    if(location === "large" && system === "mac") {
      $("#css").show();
    } else if(system === "pc" && location === "small") {
      $("#andriod").show();
    } else if(system === "both" && location === "government") {
      $("#net").show();
    } else if(system === "pc" && location === "government") {
      $("#php").show();
    } else if(system === "mac" && location === "small") {
      $("#ruby").show();
    } else if(system === "mac" && work === "government") {
      $("#andriod").show();
    } else if (system === "both") {
      $("#net").show();
    } else if (system === "both" && ideal === "app") {
      $("#andriod").show();
    } else if (system === "pc") {
      $("#ruby").show();
    }

    })
  });
