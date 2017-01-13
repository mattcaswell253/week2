$(document).ready(function() {

  $("form#operating-system").submit(function(event) {
    event.preventDefault();
$(".language-info").hide();
    var system = $("input:radio[name=info]:checked").val();

    if(system === "pc") {
      $("#andriod").show();
    } else if(system === "mac") {
      $("#ruby").show();
    }
  });
});
