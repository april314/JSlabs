$(document).ready(function(){
   $("body").fadeIn(2000);
});

$(document).ready(function(){
	$("#btn1").click(function() {
		$(this).hide();
	})
});

$(document).ready(function(){
    $("#field").dblclick(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("footer").mouseenter(function(){
        alert("I SEE YOU!");
        $(this).css("background-color", "#cccccc");
    });
});

$(document).ready(function(){
    $("input").on({
    	keypress: function(){
        	$(this).hide();
    	},
    	focus: function() {
    		$(this).css("background-color", "yellow");
    	}
    });
});

$(document).ready(function(){
    $("header").click(function(){
        var head = $(this);
        head.animate({height: '+=300px', opacity: '0.4'}, "slow");
        head.animate({width: '+=300px', opacity: '0.8'}, "slow");
        head.animate({height: '-=300px', opacity: '0.4'}, "slow");
        head.animate({width: '-=300px', opacity: '0.8'}, "slow");
    });
});

$(document).ready(function(){
	$("#btn2").click(function() {
		$("#ajax").load("https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js");
	})
});

$(document).ready(function() {
	$("#ajax").click(function() {
		$(this).slideUp(10000);
	})
});