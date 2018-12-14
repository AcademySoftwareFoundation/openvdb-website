
$(document).ready(function(){

  $(".btn-close").click(function(){
    $(this).parent().animate({'height':'0px'}, function() {
        var btnId = "#" + $(this).closest("div").attr("id") + "-btn";
        $(btnId).attr("disabled", false);
        $(btnId).css({ opacity: 1.0 });
    });
  });

  // VDB Details

  $("#vdb-folder-btn").click(function(){
    $("#vdb-folder").animate({'height':'360px'});
    $(this).attr("disabled", true);
    $(this).css({ opacity: 0.2 });
  });

  $("#page1").css({ opacity: 0.2 });

  $("#page3").click(function(){
    if ($.browser.mozilla) {      
     $('#vdb-folder').css({
               'background-position': '-1480px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#vdb-folder").animate({'background-position-x':'-1480px'});
    }
    $("#page1").css({ opacity: 1.0 });
    $("#page2").css({ opacity: 1.0 });
    $("#page3").css({ opacity: 0.2 });
  });

  $("#page2").click(function() {

    if ($.browser.mozilla) {      
     $('#vdb-folder').css({
               'background-position': '-740px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#vdb-folder").animate({'background-position-x':'-740px'});
    }

    $("#page1").css({ opacity: 1.0 });
    $("#page2").css({ opacity: 0.2 });
    $("#page3").css({ opacity: 1.0 });
  });

  $("#page1").click(function(){
    if ($.browser.mozilla) {      
     $('#vdb-folder').css({
               'background-position': '0px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#vdb-folder").animate({'background-position-x':'0px'});
    }
    $("#page1").css({ opacity: 0.2 });
    $("#page2").css({ opacity: 1.0 });
    $("#page3").css({ opacity: 1.0 });
  });


  // Conversion

  $("#conversion-folder-btn").click(function(){
    $("#conversion-folder").animate({'height':'360px'});
    $(this).attr("disabled", true);
    $(this).css({ opacity: 0.2 });
  });


  $("#conversion-page1").css({ opacity: 0.2 });

  $("#conversion-page1").click(function(){
    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '0px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'0px'});
    }
    $("#conversion-page1").css({ opacity: 0.2 });
    $("#conversion-page2").css({ opacity: 1.0 });
    $("#conversion-page3").css({ opacity: 1.0 });
    $("#conversion-page4").css({ opacity: 1.0 });
    $("#conversion-page5").css({ opacity: 1.0 });
    $("#conversion-page6").css({ opacity: 1.0 });
  });

  $("#conversion-page2").click(function(){
    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '-740px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'-740px'});
    }
    $("#conversion-page1").css({ opacity: 1.0 });
    $("#conversion-page2").css({ opacity: 0.2 });
    $("#conversion-page3").css({ opacity: 1.0 });
    $("#conversion-page4").css({ opacity: 1.0 });
    $("#conversion-page5").css({ opacity: 1.0 });
    $("#conversion-page6").css({ opacity: 1.0 });
  });

  $("#conversion-page3").click(function(){
    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '-1480px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'-1480px'});
    }

    $("#conversion-page1").css({ opacity: 1.0 });
    $("#conversion-page2").css({ opacity: 1.0 });
    $("#conversion-page3").css({ opacity: 0.2 });
    $("#conversion-page4").css({ opacity: 1.0 });
    $("#conversion-page5").css({ opacity: 1.0 });
    $("#conversion-page6").css({ opacity: 1.0 });
  });

  $("#conversion-page4").click(function(){

    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '-2220px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'-2220px'});
    }
    $("#conversion-page1").css({ opacity: 1.0 });
    $("#conversion-page2").css({ opacity: 1.0 });
    $("#conversion-page3").css({ opacity: 1.0 });
    $("#conversion-page4").css({ opacity: 0.2 });
    $("#conversion-page5").css({ opacity: 1.0 });
    $("#conversion-page6").css({ opacity: 1.0 });
  });

  $("#conversion-page5").click(function(){
    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '-2960px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'-2960px'});
    }
    $("#conversion-page1").css({ opacity: 1.0 });
    $("#conversion-page2").css({ opacity: 1.0 });
    $("#conversion-page3").css({ opacity: 1.0 });
    $("#conversion-page4").css({ opacity: 1.0 });
    $("#conversion-page5").css({ opacity: 0.2 });
    $("#conversion-page6").css({ opacity: 1.0 });
  });

  $("#conversion-page6").click(function(){
    if ($.browser.mozilla) {      
     $('#conversion-folder').css({
               'background-position': '-3700px 0px',
               '-moz-transition': 'all 500ms ease'
     });
    } else {
        $("#conversion-folder").animate({'background-position-x':'-3700px'});
    }
    $("#conversion-page1").css({ opacity: 1.0 });
    $("#conversion-page2").css({ opacity: 1.0 });
    $("#conversion-page3").css({ opacity: 1.0 });
    $("#conversion-page4").css({ opacity: 1.0 });
    $("#conversion-page5").css({ opacity: 1.0 });
    $("#conversion-page6").css({ opacity: 0.2 });
  });



});
